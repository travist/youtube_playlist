/** Create the namespace. */
var youtube = youtube || {};

/** Create the teaser object. */
youtube.teaser = function(context, options) {
  options = jQuery.extend({
    title: '',
    thumbnail: '',
    description: '',
    link: ''
  }, options);
  youtube.display.call(this, context, options);
};

/** Derive from youtube.display. */
youtube.teaser.prototype = new youtube.display();
youtube.teaser.prototype.constructor = youtube.teaser;

/** Override the create method. */
youtube.teaser.prototype.create = function(context) {
  youtube.display.prototype.create.call(this, context);
  var display = jQuery('<li><a href="' + this.options.link + '">\
    <img src="' + this.options.thumbnail + '" />\
    <h3>' + this.options.title + '</h3>\
    <p>' + this.options.description + '</p>\
  </a></li>');
  context.append(display);
  return display;
};

/** Override the init method. */
youtube.teaser.prototype.init = function(options) {
  youtube.display.prototype.init.call(this, options);
};