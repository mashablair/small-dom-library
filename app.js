var $ = (function() {
  /**
   * The constructor object
   */
  var Constructor = function(selector) {
    this.selector = selector;
  };

  /**
   * Get an array of items from the DOM.
   * @return {Array} The wizards
   */
  Constructor.prototype.get = function() {
    return Array.from(document.querySelectorAll(this.selector));
  };

  Constructor.prototype.getFirst = function() {
    return document.querySelector(this.selector);
  };

  Constructor.prototype.getLast = function() {
    var array = this.get();
    return array[array.length - 1];
  };

  Constructor.prototype.addClass = function(class_name) {
    this.get().forEach(function(item) {
      item.classList.add(class_name);
    });
  };

  Constructor.prototype.removeClass = function(class_name) {
    this.get().forEach(function(item) {
      item.classList.remove(class_name);
    });
  };

  return Constructor;
})();

// Use like this:
var buttons = new $("button");
buttons.get();
buttons.addClass("btn-purple");

// Methods available
// .get()
// .getFirst()
// .getLast()
// .addClass(className)
// .removeClass(className)
