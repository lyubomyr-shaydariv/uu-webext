/*global browser*/

import * as registry from '/registry.js';

const MAX_LOOPS = 10;
const ALL_RULES = Array.from(registry.getRules());

const redirect = (url) => {
	const beginTimestamp = Date.now();
	let redirectUrl = new URL(url); // clone the url
main:
	for ( let i = 0; i < MAX_LOOPS; i++ ) {
		for ( const rule of ALL_RULES ) {
			const newRedirectUrl = rule(redirectUrl);
			if ( newRedirectUrl ) {
				redirectUrl = newRedirectUrl;
				continue main;
			}
		}
		break main;
	}
	const timeElapsed = Date.now() - beginTimestamp;
	if ( timeElapsed >= 10 ) {
		console.warn(`SLOWDOWN! Processing ${url.href} took ${timeElapsed} ms`);
	} else if ( timeElapsed >= 5 ) {
		console.warn(`Slowdown! Processing ${url.href} took ${timeElapsed} ms`);
	}
	if ( redirectUrl.href !== url.href ) {
		console.info(`Redirected from ${url.href} to ${redirectUrl.href}`);
		return redirectUrl;
	}
};

const EXTENSION_URL_PREFIX = browser.runtime.getURL('');

browser.webRequest.onBeforeRequest.addListener((e) => {
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
