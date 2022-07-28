registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "www.linkedin.com" && url.pathname === "/safety/go" ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
});
