/*global chrome*/

import * as registry from '/registry.js';

const MAX_LOOPS = 10;

const redirect = (url) => {
	let redirectUrl = new URL(url);
main:
	for ( let i = 0; i < MAX_LOOPS; i++ ) {
		for ( const rule of registry.getRules() ) {
			const newRedirectUrl = rule(redirectUrl);
			if ( newRedirectUrl ) {
				redirectUrl = newRedirectUrl;
				continue main;
			}
		}
		break main;
	}
	if ( redirectUrl.toString() !== url.toString() ) {
		console.info(`Redirected from ${url} to ${redirectUrl}`);
		return redirectUrl;
	}
};

const EXTENSION_URL_PREFIX = chrome.runtime.getURL('');

chrome.webRequest.onBeforeRequest.addListener((e) => {
	if ( e.initiator && e.initiator.startsWith(EXTENSION_URL_PREFIX) ) {
		return;
	}
	const redirectUrl = redirect(new URL(e.url));
	if ( !redirectUrl ) {
		return;
	}
	return {
		redirectUrl: redirectUrl.toString()
	};
},
	{urls: ['<all_urls>'], types: ['main_frame', 'sub_frame', 'stylesheet', 'script', 'image', 'font', 'object', 'xmlhttprequest', 'ping', 'csp_report', 'media', 'websocket', 'other']},
	['blocking']
);
