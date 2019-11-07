registerModule(function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "out.reddit.com") && /^\/[^/]+$/.test(url.pathname) ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
});
