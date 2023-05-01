registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "ref_" && !k.startsWith("pf_rd_");
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "imdb.com" || url.hostname === "www.imdb.com" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
