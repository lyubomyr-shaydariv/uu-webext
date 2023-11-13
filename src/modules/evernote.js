addRule((function() {
	const at = AT_HOSTNAME("www.evernote.com");
	return {
		redirect: function(url) {
			if ( at(url) && url.pathname === "/OutboundRedirect.action" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "dest");
			}
		}
	};
})());
