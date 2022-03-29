registerModule(function() {
	function isSafeKeyPair(k, v) {
		return !k.startsWith("ns_");
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
