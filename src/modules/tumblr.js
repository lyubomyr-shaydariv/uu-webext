addRule((function() {
	const at = AT_HOSTNAME("t.umblr.com");
	return {
		redirect: function(url) {
			if ( at(url) && url.pathname === "/redirect" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "z");
			}
		}
	};
})());
