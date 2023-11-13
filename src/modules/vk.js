addRule((function() {
	const at = AT_DOMAIN("vk.com");
	return {
		redirect: function(url) {
			if ( at(url) && url.pathname === "/away.php" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "to");
			}
		}
	};
})());
