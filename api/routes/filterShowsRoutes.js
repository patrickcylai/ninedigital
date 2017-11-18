'use strict';

module.exports = function(app) {
	var filterShows = require('../controllers/FilterShowsController');

	// DRM filter Routes
	app.route('/drmfilter')
		.post(filterShows.list_shows_drm);
};
