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
  var display = jQuery(document.createElement('li'));
  this.link = jQuery(document.createElement('a'));
  this.title = jQuery(document.createElement('h3'));
  this.thumbnail = jQuery(document.createElement('img'));
  this.description = jQuery(document.createElement('p'));

  // Build the display.
  display.append(this.link.append(this.thumbnail).append(this.title).append(this.description));
  context.append(display);
  return display;
};

/** Override the init method. */
youtube.teaser.prototype.init = function(options) {
  youtube.display.prototype.init.call(this, options);
  this.link.attr({href: options.link});
  this.title.text(options.title);
  this.thumbnail.attr({src: options.thumbnail});
  this.description.text(options.description);
};