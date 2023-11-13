addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "t.umblr.com" && url.pathname === "/redirect" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "z");
			}
		}
	};
})());
