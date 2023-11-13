addRule((function() {
	const at = AT_DOMAIN("change.org");
	const filter = EXCLUDE("guest", "recruited_by_id", "recruiter", "short_display_name", "source_location");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
