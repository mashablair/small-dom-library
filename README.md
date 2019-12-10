# A Small DOM Manupulation Library

## What

Vanilla JS scripts that help users to accomplish simple day-to-day operations, such as:

* Get an array of items from the DOM.
* Get the first and last matching items from the DOM.
* Add and remove a class to all matching elements.

## Example of Use
You can use the library like this (try it in the console of the demo page):
```
var buttons = new $("button");
buttons.get();
buttons.addClass("btn-purple");

// Methods available
.get()
.getFirst()
.getLast()
.addClass(className)
.removeClass(className)
```

## Why

Practicing Constructor Pattern.  

## Some Links

Project 10 of [Vanilla JS Academy](https://vanillajsacademy.com/)

[View Demo](https://mashablair.github.io/small-dom-library/)
