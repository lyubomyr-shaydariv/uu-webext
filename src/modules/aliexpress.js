registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "aff_platform" && k !== "aff_trace_key";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
