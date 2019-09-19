registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "mc_cid" && k !== "mc_eid";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
