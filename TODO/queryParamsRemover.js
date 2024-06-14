'use strict';
/**
 *  Remove fbclid, utm_*, ref_* and some other query params 
 * @param {{url: string}} request
 * @returns {{redirectUrl?: string, cancel?: boolean}}
 */
function stripBadQueryParams(request) {
	// console.log('Intercepting this request: ', JSON.stringify(request));
	
	const newUrl = new URL(request.url);
	const removeQueryParam = (/** @type {string} */ name) => newUrl.searchParams.delete(name);
	const isHostname = (/** @type {string} */ hostname) => newUrl.hostname.endsWith(hostname);
	
	// if hostname ends with altinn.no or booking.com don't redirect
	if (['booking.com', 'difi.no', 'altinn.no', 'idporten.no', 'linkedin.com', 'lufthansa.com', 'austrian.com', 'swiss.com', 'eurowings.com', 'brusselsairlines.com', 'thy.com', 'turkishairlines.com', 'wizzair.com', 'ryanair.com'].some(e => isHostname(e))) return {cancel: false};
	
	const targetQueryParams = ['campaignid','adid','pp'];
	targetQueryParams.forEach(removeQueryParam);
	
	// if hostname ends with klix.ba also remove 'widget' query param
	if (isHostname('klix.ba')) removeQueryParam('widget');
	
	// return the stripped URL if URLs are not equal, pass the URL on otherwise as normal ({cancel: false})
	return request.url !== newUrl.href ? {redirectUrl: newUrl.href} : {cancel: false};
}
