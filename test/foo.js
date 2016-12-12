function Foo(name) {
  this.name = name;
}

Foo.prototype.name = 'John Doe';

Foo.prototype.greetUser = function() {
  alert(this.name);
};
