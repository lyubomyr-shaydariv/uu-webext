registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "soc_src" && k !== "soc_trk";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
