'use strict';

/*
 * Returns all shows with DRM and at least 1 episode
 */
exports.list_shows_drm = function(req, res) {
    var filteredShows = filterShows(req.body);
    res.json(filteredShows);
}

/*
 * Helper function to filter out shows that have DRM and at least one episode
 */
function filterShows(payload) {

    var shows = payload['payload'];
    var filteredResults = new Object();
    filteredResults.response = [];

    // Check if show counter is available
    if (!payload.hasOwnProperty('take')) {
      throw new SyntaxError;
    }

    // Enumerate through shows
    for (var i = 0; i < payload['take']; i++) {
      // Check if the JSON object has the valid properties
      if (shows[i].hasOwnProperty('drm') && shows[i].hasOwnProperty('episodeCount') && shows[i].hasOwnProperty('image')
        && shows[i].hasOwnProperty('slug') && shows[i].hasOwnProperty('title')) {

        if (shows[i]['drm'] == true && shows[i]['episodeCount'] > 0) {
          var result = {
            'image' : shows[i]['image']['showImage'],
            'slug' : shows[i]['slug'],
            'title' : shows[i]['title']
          };
          filteredResults.response.push(result);
        }

      }
    }

    return filteredResults;

}
