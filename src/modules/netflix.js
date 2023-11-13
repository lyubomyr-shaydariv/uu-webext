addRule((function() {
	const at = AT_DOMAIN("netflix.com");
	const filter = EXCLUDE("tctx", "trackId");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
