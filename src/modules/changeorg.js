addRule((function() {
	const filter = EXCLUDE("guest", "recruited_by_id", "recruiter", "short_display_name", "source_location");
	return {
		redirect: function(url) {
			if ( url.hostname === "change.org" || url.hostname.endsWith(".change.org") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
