addRule((function() {
	const filter = createFilterByConstantKeys("cvid", "form", "pq", "qs", "sc", "sk", "sp");
	return {
		redirect: function(url) {
			if ( url.hostname === "bing.com" || url.hostname.endsWith(".bing.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
