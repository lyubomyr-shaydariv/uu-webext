addRule((function() {
	const filter = EXCLUDE("context", "si");
	return {
		redirect: function(url) {
			if ( url.hostname === "open.spotify.com" ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
