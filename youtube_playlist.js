// Add to the jQuery prototype.
jQuery.fn.youtube_playlist = function(options) {
  return jQuery(this).each(function() {
    if ('youtube_playlist' in this) {
      this.youtube_playlist.init(options);
    }
    else {
      this.youtube_playlist = new youtube.playlist(jQuery(this), options);
    }
  });
};