(function() {

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
		for ( const module of modules ) {
			const redirectUrl = module.redirect(url);
			if ( redirectUrl ) {
				return redirectUrl;
			}
		}
	}

	chrome.webRequest.onBeforeRequest.addListener(function(details) {
		const url = new URL(details.url);
		const redirectUrl = redirect(url);
		if ( redirectUrl ) {
			return { redirectUrl };
		}
	}, filter, ["blocking"]);

})();
