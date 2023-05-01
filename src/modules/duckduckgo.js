addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "duckduckgo.com" && url.pathname === "/l/" ) {
				return extractQueryPairAsUrl(url.searchParams, "uddg");
			}
		}
	};
})());
