addRule((function() {
	const at = AT_DOMAIN("youtube.com");
	const filter = EXCLUDE("feature", "kw", "si");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const at = AT_DOMAIN("youtu.be");
	const filter = EXCLUDE("si");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const at = AT_DOMAIN("youtube.com");
	return {
		redirect: function(url) {
			if ( at(url) && url.pathname === "/redirect" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "q");
			}
		}
	};
})());
