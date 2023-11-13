addRule((function() {
	const filter = EXCLUDE("_branch_match_id", "source");
	return {
		redirect: function(url) {
			if ( url.hostname === "medium.com" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "medium.com" && url.pathname === "/r/" ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
})());
