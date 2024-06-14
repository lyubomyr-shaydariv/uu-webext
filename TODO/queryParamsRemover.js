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
	
	const targetQueryParams = ['icid','ef_id','s_kwcid','_bta_tid','_bta_c','dm_i','fb_action_ids','fb_action_types','fb_source','fbclid','_ga','gclid','campaignid','adgroupid','adid','_gl','gclsrc','gdfms','gdftrk','gdffi','_ke','trk_contact','trk_msg','trk_module','trk_sid','mc_cid','mc_eid','mkwid','pcrid','mtm_source','mtm_medium','mtm_campaign','mtm_keyword','mtm_cid','mtm_content','msclkid','epik','pp','pk_source','pk_medium','pk_campaign','pk_keyword','pk_cid','pk_content','redirect_log_mongo_id','redirect_mongo_id','sb_referer_host'];
	targetQueryParams.forEach(removeQueryParam);
	
	// if hostname ends with klix.ba also remove 'widget' query param
	if (isHostname('klix.ba')) removeQueryParam('widget');

	if (isHostname('youtube.com') || isHostname('youtu.be')) removeQueryParam('si');
	
	// remove ref_* and utm_* params
	// @ts-expect-error
	const currentParams = Object.fromEntries(newUrl.searchParams);
	Object.keys(currentParams).filter(name => name.startsWith('ref_') || name.startsWith('utm_') || name.startsWith('ig_')).forEach(removeQueryParam);
	
	// return the stripped URL if URLs are not equal, pass the URL on otherwise as normal ({cancel: false})
	return request.url !== newUrl.href ? {redirectUrl: newUrl.href} : {cancel: false};
}
