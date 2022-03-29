registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "wt_mc" && k !== "wt_zmc";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
