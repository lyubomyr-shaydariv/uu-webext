registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "at_campaign" && k !== "at_medium" && !k.startsWith("at_custom");
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
