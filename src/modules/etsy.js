addRule((function() {
	const at = AT_DOMAIN("etsy.com");
	const filter = EXCLUDE("click_key", "click_sum", "organic_search_click", "ref");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
