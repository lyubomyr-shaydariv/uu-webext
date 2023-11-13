addRule((function() {
	const at = AT_HOSTNAME("duckduckgo.com");
	return {
		redirect: function(url) {
			if ( at(url) && url.pathname === "/l/" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "uddg");
			}
		}
	};
})());
