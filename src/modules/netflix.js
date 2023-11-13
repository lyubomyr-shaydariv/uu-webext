addRule((function() {
	const filter = EXCLUDE("tctx", "trackId");
	return {
		redirect: function(url) {
			if ( url.hostname === "netflix.com" || url.hostname.endsWith(".netflix.com") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
