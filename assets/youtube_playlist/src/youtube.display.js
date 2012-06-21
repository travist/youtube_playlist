/** Create the namespace. */
var youtube = youtube || {};

/** Create the youtube display object. */
youtube.display = function(context, options) {
  if (context && context.length > 0) {
    this.options = options;
    this.context = this.create(context);
    this.init(options);
  }
};

/** Create a new display for this item. */
youtube.display.prototype.create = function(context) {
  return context;
};

/** Initialize the display. */
youtube.display.prototype.init = function(options) {
  this.options = options;
};