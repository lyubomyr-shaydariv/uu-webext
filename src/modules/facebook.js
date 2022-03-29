registerModule(function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "www.facebook.com" || url.hostname === "facebook.com") && url.pathname === "/l.php" ) {
				return extractQueryPairAsUrl(url.searchParams, "u");
			}
		}
	};
});
registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "fbclid";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
