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
	const at = AND(
		AT_DOMAIN("youtube.com"),
		AT_PATHNAME("/redirect")
	);
	return {
		redirect: function(url) {
			if ( at(url) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "q");
			}
		}
	};
})());
