import * as registry from '/registry.js';

const MAX_LOOPS = 10;

const filter = {
	urls: chrome.runtime.getManifest()
		.permissions
		.filter(permission => {
			try {
				new URL(permission);
				return true;
			} catch ( err ) {
				return false || permission === "<all_urls>";
			}
		}),
	types: [
		"main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"
	]
};

const redirect = (url) => {
	let redirectUrl = new URL(url);
main:
	for ( let i = 0; i < MAX_LOOPS; i++ ) {
		const thisLoopRedirectUrl = redirectUrl.toString();
		for ( const rule of registry.getRules() ) {
			const maybeRedirectUrl = rule.redirect(redirectUrl);
			if ( maybeRedirectUrl ) {
				redirectUrl = maybeRedirectUrl;
			}
		}
		if ( thisLoopRedirectUrl === redirectUrl.toString() ) {
			break main;
		}
	}
	if ( redirectUrl.toString() !== url.toString() ) {
		console.log(`REDIRECT: ${url} => ${redirectUrl}`);
		return redirectUrl;
	}
}

chrome.webRequest.onBeforeRequest.addListener((details) => {
	if ( details.initiator && details.initiator.startsWith(chrome.runtime.getURL("")) ) {
		return;
	}
	const url = new URL(details.url);
	const redirectUrl = redirect(url);
	if ( redirectUrl ) {
		return {
			redirectUrl: redirectUrl.toString()
		};
	}
}, filter, ["blocking"]);
