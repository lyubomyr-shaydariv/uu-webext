addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "mandrillapp.com" && url.pathname.startsWith("/track/click/") ) {
				try {
					return new URL(JSON.parse(JSON.parse(atob(url.searchParams.get("p"))).p).url);
				} catch ( ignored ) {
					return getRedirectToWarningPage(url);
				}
			}
		}
	};
})());
