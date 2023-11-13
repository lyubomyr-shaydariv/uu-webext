addRule((function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "vk.com" || url.hostname.endsWith(".vk.com")) && url.pathname === "/away.php" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "to");
			}
		}
	};
})());
