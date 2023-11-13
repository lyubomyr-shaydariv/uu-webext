addRule((function() {
	const at = AT_HOSTNAME("open.spotify.com");
	const filter = EXCLUDE("context", "si");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
