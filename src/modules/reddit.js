registerModule(function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "out.reddit.com") && /^\/[^/]+$/.test(url.pathname) ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
			if ( (url.hostname === "www.reddit.com") || (url.hostname === "amp.reddit.com") ) {
				url.hostname = "old.reddit.com";
				return url;
			}
		}
	};
});
