addRule((function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "e.customeriomail.com" ) {
				const pathnameExec = /^\/e\/c\/([^/]+)\/.*/.exec(url.pathname);
				if ( pathnameExec ) {
					const encodedBlob = pathnameExec[1];
					try {
						return new URL(JSON.parse(atob(encodedBlob)).href);
					} catch ( ignored ) {
						return getRedirectToWarningPage(url);
					}
				}
			}
		}
	};
})());
