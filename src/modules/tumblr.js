addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "t.umblr.com" && url.pathname === "/redirect" ) {
				return extractQueryPairAsUrl(url.searchParams, "z");
			}
		}
	};
})());
