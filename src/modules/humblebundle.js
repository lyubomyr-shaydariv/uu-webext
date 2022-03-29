registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "hmb_campaign" && k !== "hmb_medium" && k !== "hmb_source";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
