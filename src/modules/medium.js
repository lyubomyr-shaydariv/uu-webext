registerModule(function() {
	function filter(k, vs) {
		return k !== "_branch_match_id" && k !== "source";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "medium.com" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "medium.com" && url.pathname === "/r/" ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
});
