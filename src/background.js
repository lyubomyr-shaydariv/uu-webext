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
	if ( url.hostname === "www.evernote.com" && url.pathname === "/OutboundRedirect.action" && url.searchParams.get("dest") ) {
		redirectUrl = url.searchParams.get("dest");
	}
	if ( redirectUrl ) {
		return { redirectUrl };
	}
}, filter, ["blocking"]);

