addRule((function() {
	const at = AT_HOSTNAME("l.instagram.com");
	return {
		redirect: function(url) {
			if ( at(url)  ) {
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
