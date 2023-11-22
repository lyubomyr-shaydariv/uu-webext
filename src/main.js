import * as registry from '/registry.js';

const MAX_LOOPS = 10;

const redirect = (url) => {
	let redirectUrl = new URL(url);
main:
	for ( let i = 0; i < MAX_LOOPS; i++ ) {
		const thisLoopRedirectUrl = redirectUrl.toString();
		for ( const rule of registry.getRules() ) {
			const maybeRedirectUrl = rule(redirectUrl);
			if ( maybeRedirectUrl ) {
				redirectUrl = maybeRedirectUrl;
			}
		}
		if ( thisLoopRedirectUrl === redirectUrl.toString() ) {
			break main;
		}
	}
	if ( redirectUrl.toString() !== url.toString() ) {
		console.info("REDIRECT", `${url} => ${redirectUrl}`);
		return redirectUrl;
	}
}

const EXTENSION_URL_PREFIX = chrome.runtime.getURL("");

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

chrome.contextMenus.create({
	id: "copy-untracked-url",
	contexts: ["link"],
	title: "Copy untracked URL"
});

chrome.contextMenus.onClicked.addListener((e) => {
	switch ( e.menuItemId ) {
	case "copy-untracked-url":
		onCopyUntrackedUrl(e.linkUrl);
		break;
	}
});

chrome.webRequest.onBeforeRequest.addListener((details) => {
	if ( details.initiator && details.initiator.startsWith(EXTENSION_URL_PREFIX) ) {
		return;
	}
	const url = new URL(details.url);
	const redirectUrl = redirect(url);
	if ( !redirectUrl ) {
		return;
	}
	return {
		redirectUrl: redirectUrl.toString()
	};
},
	{urls: ["<all_urls>"], types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]},
	["blocking"]
);
