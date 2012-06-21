/** Create the namespace. */
var youtube = youtube || {};

/** Create the youtube playlist object. */
youtube.playlist = function(context, options) {
  options = jQuery.extend({
    playlist: ''
  }, options);
  youtube.display.call(this, context, options);
};

/** Derive from youtube.display. */
youtube.playlist.prototype = new youtube.display();
youtube.playlist.prototype.constructor = youtube.playlist;

/** Override the create method. */
youtube.playlist.prototype.create = function(context) {
  youtube.display.prototype.create.call(this, context);
  var display = jQuery(document.createElement('ul')).attr({
    'data-role': 'listview',
    'data-theme': 'g'
  }).width(this.options.width);
  context.append(display);
  return display;
};

/** Override the init method. */
youtube.playlist.prototype.init = function(options) {
  youtube.display.prototype.init.call(this, options);
  jQuery.getJSON(this.options.playlist, (function(playlist) {
    return function(data) {
      var item = null;
      for (var index in data.feed.entry) {
        item = data.feed.entry[index];
        new youtube.teaser(playlist.context, {
          title: item.title.$t,
          description: item.content.$t,
          thumbnail: item.media$group.media$thumbnail[1].url,
          link: item.link[0].href
        });
      }

      // Refresh the playlist.
      playlist.context.listview();
    };
  })(this));
};