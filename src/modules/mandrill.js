addRule((function() {
	const at = AT_HOSTNAME("mandrillapp.com");
	return {
		redirect: function(url) {
			if ( at(url)  && url.pathname.startsWith("/track/click/") ) {
				try {
					return new URL(JSON.parse(JSON.parse(atob(url.searchParams.get("p"))).p).url);
				} catch ( ignored ) {
					return REDIRECT_CONFIRMATION_URL(url);
				}
			}
		}
	};
})());
