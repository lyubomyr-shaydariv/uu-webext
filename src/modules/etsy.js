registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "click_key" && k !== "click_sum" && k !== "organic_search_click" && k !== "ref";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "etsy.com" || url.hostname === "www.etsy.com" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
