addRule((function() {
	const filter = EXCLUDE("click_key", "click_sum", "organic_search_click", "ref");
	return {
		redirect: function(url) {
			if ( url.hostname === "etsy.com" || url.hostname.endsWith(".etsy.com") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
