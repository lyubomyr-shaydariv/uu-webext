registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "www.youtube.com" && url.pathname === "/redirect" ) {
				return extractQueryPairAsUrl(url.searchParams, "q");
			}
		}
	};
});
