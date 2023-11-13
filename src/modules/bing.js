addRule((function() {
	const at = AT_DOMAIN("bing.com");
	const filter = EXCLUDE("cvid", "form", "pq", "qs", "qp", "sc", "sk", "sp");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
