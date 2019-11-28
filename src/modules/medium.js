registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "medium.com" && url.pathname === "/r/" ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
});
