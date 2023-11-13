addRule((function() {
	const filter = EXCLUDE("cvid", "form", "pq", "qs", "qp", "sc", "sk", "sp");
	return {
		redirect: function(url) {
			if ( url.hostname === "bing.com" || url.hostname.endsWith(".bing.com") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
