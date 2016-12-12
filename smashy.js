(function() {
  function ajax(opts) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          opts.success(xhr);
        } else {
          opts.error(xhr);
        }
      }
    });
    xhr.open('GET', opts.url, true);
    xhr.send();
  }
  
  function createFileURLs(config, baseURL) {
    return config.files.map(function(fileName) {
      if (fileName.charAt(0) === '/') {
        fileName = fileName.slice(1);
      }
      fileName += config.defaultExt;
      return fileName;
    });
  }
  
  function build(url, cb) {
    if (url.slice(-1) !== '/') {
      url += '/';
    }
    ajax({
      url: url + 'smashy.json',
      success: function(xhr) {
        var config = JSON.parse(xhr.response);
        var files = createFileURLs(config, url);
        var fileContents = {};
        var filesLoaded = 0;
        var code = '';
        for (var i = 0; i < files.length; i++) (function(file) {
          ajax({
            url: file,
            success: function(xhr) {
              fileContents[file] = xhr.responseText;
              if (filesLoaded === files.length) {
                for (var j = 0; j < files.length; j++) {
                  var fileName = files[j];
                  code += fileContents[fileName];
                }
                cb({code: code, outputName: config.outputName});
              }
            },
            error: function(xhr) {
              alertify.error('Bad request made to: ' + xhr.responseURL);
            }
          });
        })(files[i]);
      },
      error: function(xhr) {
        
      }
    });
  }
  
  window.smashy = {};
  smashy.smash = function(url, cb) {
    build(url, cb);
  };
})();
