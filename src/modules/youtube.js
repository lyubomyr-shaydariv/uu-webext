registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "feature" && k !== "kw";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "www.youtube.com" || url.hostname === "youtube.com" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "www.youtube.com" && url.pathname === "/redirect" ) {
				return extractQueryPairAsUrl(url.searchParams, "q");
			}
		}
	};
});
