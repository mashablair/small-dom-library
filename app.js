// Tutorial here: https://gomakethings.com/how-to-create-your-own-vanilla-js-dom-manipulation-library-like-jquery/#avoid-having-to-use-new-each-time
var $ = (function() {
  /**
   * Create the constructor
   * @param {String} selector The selector to use
   */
  var Constructor = function(selector) {
    if (selector === "document") {
      this.elems = [document];
    } else if (selector === "window") {
      this.elems = [window];
    } else {
      this.elems = Array.from(document.querySelectorAll(selector));
    }
  };

  Constructor.prototype.getFirst = function() {
    return this.elems[0];
  };

  Constructor.prototype.getLast = function() {
    return this.elems[this.elems.length - 1];
  };

  Constructor.prototype.addClass = function(class_name) {
    this.get().forEach(function(item) {
      item.classList.add(class_name);
    });
    return this;
  };

  Constructor.prototype.removeClass = function(class_name) {
    this.get().forEach(function(item) {
      item.classList.remove(class_name);
    });
    return this;
  };

  /**
   * Instantiate a new constructor to avoid typing 'new' operator every time
   * we want to instantiate
   */
  var instantiate = function(selector) {
    return new Constructor(selector);
  };

  /**
   * Return the constructor instantiation
   */
  return instantiate;
})();

// Use like this:
// var buttons = $("button");
// buttons.elems // gets you the array of elems selected
// buttons.addClass("btn-purple");
// buttons.getFirst();

// Methods available
// .get()
// .getFirst()
// .getLast()
// .addClass(className)
// .removeClass(className)
