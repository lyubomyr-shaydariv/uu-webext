addRule((function() {
	const filter = EXCLUDE("feature", "kw", "si");
	return {
		redirect: function(url) {
			if ( url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("si");
	return {
		redirect: function(url) {
			if ( url.hostname === "youtu.be" ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com")) && url.pathname === "/redirect" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "q");
			}
		}
	};
})());
