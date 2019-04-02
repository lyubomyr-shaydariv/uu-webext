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

chrome.webRequest.onBeforeRequest.addListener(function(details) {
	const url = new URL(details.url);
	let redirectUrl = null;
	if ( redirectUrl ) {
		return { redirectUrl };
	}
}, filter, ["blocking"]);

