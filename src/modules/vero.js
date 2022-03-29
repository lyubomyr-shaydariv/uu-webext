registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "vero_conv" && k !== "vero_id";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
