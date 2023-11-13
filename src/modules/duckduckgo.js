addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "duckduckgo.com" && url.pathname === "/l/" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "uddg");
			}
		}
	};
})());
