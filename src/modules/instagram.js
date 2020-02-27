registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "l.instagram.com" ) {
				return extractQueryPairAsUrl(url.searchParams, "u");
			}
		}
	};
});
