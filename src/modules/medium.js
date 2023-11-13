addRule((function() {
	const filter = EXCLUDE("_branch_match_id", "source");
	return {
		redirect: function(url) {
			if ( url.hostname === "medium.com" ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "medium.com" && url.pathname === "/r/" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	};
})());
