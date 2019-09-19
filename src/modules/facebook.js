registerModule(function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "www.facebook.com" || url.hostname === "facebook.com") && url.pathname === "/l.php" ) {
				return extractQueryPairAsUrl(url.searchParams, "u");
			}
		}
	};
});
