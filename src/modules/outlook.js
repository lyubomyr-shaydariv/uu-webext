addRule((function() {
	const at = AT_DOMAIN("safelinks.protection.outlook.com");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	};
})());
