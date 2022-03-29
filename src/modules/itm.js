registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "itm_campaign" && k !== "itm_medium" && k !== "itm_source" && k !== "itm_content" && k !== "itm_term";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
