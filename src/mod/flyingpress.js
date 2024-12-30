import {RULE} from '/rules.js';

/*
The WordFlyingPress plugin for WordPress declares the following parameters to be safely removed:

- _ga, _gl, _ke,
- adgroupid, adid, age-verified, ao_noptimize,
- btac, btatid,
- cache_bust, campaignid, cn-reloaded,
- dm_i,
- ef_id, epik,
- fb_action_ids, fb_action_types, fb_source, fbclid,
- gclid, gclsrc, gdffi, gdfms, gdftrk,
- mc_cid, mc_eid, mkwid, msclkid, mtm_campaign, mtm_cid, mtm_content, mtm_keyword, mtm_medium, mtm_source,
- pcrid, pk_campaign, pk_cid, pk_content, pk_keyword, pk_medium, pk_source, pp,
- redirect_log_mongo_id, redirect_mongo_id, ref,
- s_kwcid, sb_referer_host, sscid,
- trk_contact, trk_module, trk_msg, trk_sid,
- usqp, utm_campaign, utm_content, utm_expid, utm_id, utm_medium, utm_source, utm_term

The parameters below are declared right here because the rest of the parameters are declared in other modules.
*/

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('adid', 'age-verified', 'ao_noptimize', 'cache_bust', 'campaignid', 'cn-reloaded')
];
