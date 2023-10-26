addRule((function() {
	const filter = createFilterByConstantKeys("click_key", "click_sum", "organic_search_click", "ref");
	return {
		redirect: function(url) {
			if ( url.hostname === "etsy.com" || url.hostname.endsWith(".etsy.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
