registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "ml_subscriber" && k !== "ml_subscriber_hash";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
