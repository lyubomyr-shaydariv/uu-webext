addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "www.evernote.com" && url.pathname === "/OutboundRedirect.action" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "dest");
			}
		}
	};
})());
