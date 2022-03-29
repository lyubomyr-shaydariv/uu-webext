registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "tt_content" && k !== "tt_medium";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
