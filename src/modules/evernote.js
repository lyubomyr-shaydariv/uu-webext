modules.push({
	redirect: function(url) {
		if ( url.hostname === "www.evernote.com" && url.pathname === "/OutboundRedirect.action" ) {
			const dest = url.searchParams.get("dest");
			if ( dest ) {
				return dest;
			}
		}
	}
});
