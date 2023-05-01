registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "cvid" && k !== "form" && k !== "pq" && k !== "qs" && k !== "sc" && k !== "sk" && k !== "sp";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "bing.com" || url.hostname === "www.bing.com" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
