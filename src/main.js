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
			'beacon',
			'csp_report',
			'font',
			'image',
			'imageset',
			'main_frame',
			'media',
			'object',
			'object_subrequest',
			'ping',
			'script',
			'speculative',
			'stylesheet',
			'sub_frame',
			'web_manifest',
			'websocket',
			'xml_dtd',
			'xmlhttprequest',
			'xslt',
			'other'
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
