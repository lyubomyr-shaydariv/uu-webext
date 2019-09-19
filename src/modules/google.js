registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "www.google.com" && url.pathname === "/url" ) {
				return extractQueryPairAsUrl(url.searchParams, "q");
			}
		}
	};
});
