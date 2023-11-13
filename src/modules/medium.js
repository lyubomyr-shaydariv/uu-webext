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
	const at = AT_HOSTNAME("medium.com");
	return {
		redirect: function(url) {
			if ( at(url) && url.pathname === "/r/" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	};
})());
