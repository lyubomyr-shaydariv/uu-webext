registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "mandrillapp.com" && url.pathname.startsWith("/track/click/") ) {
				return getRedirectToWarningPage(url);
			}
		}
	};
});
