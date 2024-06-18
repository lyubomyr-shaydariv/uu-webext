/*global browser*/

import * as registry from '/registry.js';
import normalizeUrl from '/lib/normalize-url-8.0.0/index.js';

const MAX_LOOPS = 10;
const ALL_RULES = Array.from(registry.getRules());

const doNormalizeUrl = (url) => {
	const denormalizedUrl = url.href;
	const normalizedUrl = normalizeUrl(denormalizedUrl, {
		normalizeProtocol: false,
		removeDirectoryIndex: false,
		removeExplicitPort: false,
		removeQueryParameters: false,
		removeTrailingSlash: false,
		removeSingleSlash: false,
		sortQueryParameters: true,
		stripAuthentication: false,
		stripHash: false,
		stripProtocol: false,
		stripTextFragment: false,
		stripWWW: false
	});
	if ( denormalizedUrl !== normalizedUrl ) {
		return new URL(normalizedUrl);
	}
	return url;
};

const redirect = (url) => {
	const beginTimestamp = Date.now();
	let redirectUrl = new URL(url); // clone the url
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
	if ( timeElapsed >= 10 ) {
		console.warn(`SLOWDOWN! Processing ${url.href} took ${timeElapsed} ms`);
	} else if ( timeElapsed >= 5 ) {
		console.warn(`Slowdown! Processing ${url.href} took ${timeElapsed} ms`);
	}
	if ( redirectUrl.href !== url.href ) {
		console.log(`Redirected from ${url.href} to ${redirectUrl.href}`);
		return doNormalizeUrl(redirectUrl);
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
	{
		urls: [
			'<all_urls>'
		],
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
		]
	},
	['blocking']
);
