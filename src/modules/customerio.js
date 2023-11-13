addRule((function() {
	const at = AT_HOSTNAME("e.customeriomail.com");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				const pathnameExec = /^\/e\/c\/([^/]+)\/.*/.exec(url.pathname);
				if ( pathnameExec ) {
					const encodedBlob = pathnameExec[1];
					try {
						return new URL(JSON.parse(atob(encodedBlob)).href);
					} catch ( ignored ) {
						return REDIRECT_CONFIRMATION_URL(url);
					}
				}
			}
		}
	};
})());
