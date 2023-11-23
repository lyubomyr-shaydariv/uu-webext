/* global browser */

import * as registry from '/registry.js';

const MAX_LOOPS = 10;
const ALL_RULES = Array.from(registry.getRules());
const MIN_SLOWDOWN_THRESHOLD = 5;
const MAX_SLOWDOWN_THRESHOLD = 10;

const redirect = (url) => {
	const beginTimestamp = Date.now();
	// clone the url
	let redirectUrl = new URL(url);
	for ( let i = 0; i < MAX_LOOPS; i++ ) {
		let isModified = false;
		for ( const rule of ALL_RULES ) {
			const ruleResult = rule(redirectUrl);
			if ( ruleResult === true ) {
				isModified = true;
			} else if ( ruleResult instanceof URL ) {
				isModified = true;
				redirectUrl = ruleResult;
			}
		}
		if ( !isModified ) {
			break;
		}
	}
	const timeElapsed = Date.now() - beginTimestamp;
	if ( timeElapsed >= MAX_SLOWDOWN_THRESHOLD ) {
		console.warn(`SLOWDOWN! Processing ${url.href} took ${timeElapsed} ms`);
	} else if ( timeElapsed >= MIN_SLOWDOWN_THRESHOLD ) {
		console.warn(`Slowdown! Processing ${url.href} took ${timeElapsed} ms`);
	}
	if ( redirectUrl.href !== url.href ) {
		console.log(`Redirected from ${url.href} to ${redirectUrl.href}`);
		return redirectUrl;
	}
	return undefined;
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
		return undefined;
	}
	const redirectUrl = redirect(new URL(e.url));
	if ( !redirectUrl ) {
		return undefined;
	}
	return {
		redirectUrl: redirectUrl.toString()
	};
},
	{
		types: [
			// 'beacon', // TODO unlock
			// 'csp_report', // TODO unlock
			// 'font', // TODO unlock
			// 'image', // TODO unlock
			// 'imageset', // TODO unlock
			'main_frame', // TODO unlock
			// 'media', // TODO unlock
			// 'object', // TODO unlock
			// 'object_subrequest', // TODO unlock
			// 'ping', // TODO unlock
			// 'script', // TODO unlock
			// 'speculative', // TODO unlock
			// 'stylesheet', // TODO unlock
			'sub_frame', // TODO unlock
			// 'web_manifest', // TODO unlock
			// 'websocket', // TODO unlock
			// 'xml_dtd', // TODO unlock
			// 'xmlhttprequest', // TODO unlock
			// 'xslt', // TODO unlock
			// 'other' // TODO unlock
		],
		urls: [
			'<all_urls>'
		]
	},
	['blocking']
);

export {
	redirect
};
