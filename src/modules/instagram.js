addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "l.instagram.com" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "u");
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("igshid");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
