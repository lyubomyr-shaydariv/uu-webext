addRule((function() {
	const at = AT_HOSTNAME("medium.com");
	const filter = EXCLUDE("_branch_match_id", "source");
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
		AT_HOSTNAME("medium.com"),
		AT_PATHNAME("/r/")
	);
	return {
		redirect: function(url) {
			if ( at(url) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	};
})());
