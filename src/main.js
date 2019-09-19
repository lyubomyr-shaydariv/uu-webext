(function() {

	const MAX_LOOPS = 10;

	const filter = {
		urls: chrome.runtime.getManifest()
			.permissions
			.filter(permission => {
				try {
					new URL(permission);
					return true;
				} catch ( err ) {
					return false;
				}
			}),
		types: [
			"main_frame"
		]
	};

	function redirect(url) {
		let redirectUrl = new URL(url);
main:
		for ( let i = 0; i < MAX_LOOPS; i++ ) {
			const thisLoopRedirectUrl = redirectUrl.toString();
			for ( const module of getModules() ) {
				const maybeRedirectUrl = module.redirect(redirectUrl);
				if ( maybeRedirectUrl ) {
					redirectUrl = maybeRedirectUrl;
				}
			}
			if ( thisLoopRedirectUrl === redirectUrl.toString() ) {
				break main;
			}
		}
		if ( redirectUrl.toString() !== url.toString() ) {
			console.log("REDIRECT: " + url + " => " + redirectUrl, url, redirectUrl);
			return redirectUrl;
		}
	}

	chrome.webRequest.onBeforeRequest.addListener(function(details) {
		const url = new URL(details.url);
		const redirectUrl = redirect(url);
		if ( redirectUrl ) {
			return { redirectUrl: redirectUrl.toString() };
		}
	}, filter, ["blocking"]);

})();
