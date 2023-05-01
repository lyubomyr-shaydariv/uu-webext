addRule((function() {
	function filter(k, vs) {
		return k !== "click_key" && k !== "click_sum" && k !== "organic_search_click" && k !== "ref";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "etsy.com" || url.hostname.endsWith(".etsy.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
