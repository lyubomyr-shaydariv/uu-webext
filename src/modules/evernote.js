registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "www.evernote.com" && url.pathname === "/OutboundRedirect.action" ) {
				return extractQueryPairAsUrl(url.searchParams, "dest");
			}
		}
	};
});
