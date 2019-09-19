registerModule(function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "www.vk.com" || url.hostname === "vk.com") && url.pathname === "/away.php" ) {
				return extractQueryPairAsUrl(url.searchParams, "to");
			}
		}
	};
});
