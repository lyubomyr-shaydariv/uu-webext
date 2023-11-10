addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "safelinks.protection.outlook.com" || url.hostname.startsWith(".safelinks.protection.outlook.com") ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
})());
