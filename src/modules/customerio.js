addRule((function() {
	const pathRegexp = /^\/e\/c\/([^/]+)\/.*/;
	return {
		redirect: function(url) {
			if ( url.hostname === "e.customeriomail.com" ) {
				const pathnameExec = pathRegexp.exec(url.pathname);
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
