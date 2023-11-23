/*global browser*/

import * as registry from '/registry.js';

const MAX_LOOPS = 10;

const redirect = (url) => {
	const beginTimestamp = Date.now();
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
	const timeElapsed = Date.now() - beginTimestamp;
	if ( timeElapsed >= 10 ) {
		console.warn(`SLOWDOWN! Processing ${url} took ${timeElapsed} ms`);
	} else if ( timeElapsed >= 5 ) {
		console.warn(`Slowdown! Processing ${url} took ${timeElapsed} ms`);
	}
	if ( redirectUrl.toString() !== url.toString() ) {
		console.info(`Redirected from ${url} to ${redirectUrl}`);
		return redirectUrl;
	}
};

const EXTENSION_URL_PREFIX = browser.runtime.getURL('');

const onCopyUntrackedUrl = async (url) => {
	const redirectUrl = redirect(url);
	if ( !redirectUrl ) {
		return;
	}
	try {
		await navigator.clipboard.writeText(redirectUrl);
		console.info(`Copied ${redirectUrl} to the clipboard`);
	} catch ( err ) {
		console.error(`Cannot copy ${redirectUrl} to the clipboard`, err);
	}
};

browser.contextMenus.create({
	id: 'copy-untracked-url',
	contexts: ['link'],
	title: 'Copy Untracked Link'
});

browser.contextMenus.onClicked.addListener((e) => {
	switch ( e.menuItemId ) {
	case 'copy-untracked-url':
		onCopyUntrackedUrl(e.linkUrl);
		break;
	}
});

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
