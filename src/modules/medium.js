registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "_branch_match_id" && k !== "source";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "medium.com" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
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
