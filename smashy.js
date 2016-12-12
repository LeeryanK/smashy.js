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
  
  function build(url) {
    if (url.slice(-1) !== '/') {
      url += '/';
    }
    ajax({
      url: url + 'smashy.json',
      success: function(xhr) {
        var config = JSON.parse(xhr.response);
        var files = createFileURLs(config, url);
        for (var i = 0; i < files.length; i++) (function(file) {
          ajax({
            url: file,
            success: function(xhr) {
              
            },
            error: function(xhr) {
              
            }
          });
        })(files[i]);
      },
      error: function(xhr) {
        
      }
    });
  }
})();
