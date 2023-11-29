import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('utm_ad', 'utm_affiliate', 'utm_brand', 'utm_campaign', 'utm_campaignid', 'utm_channel', 'utm_cid', 'utm_content', 'utm_creative', 'utm_emcid', 'utm_emmid', 'utm_id', 'utm_id_', 'utm_keyword', 'utm_medium', 'utm_name', 'utm_nooverride', 'utm_place', 'utm_product', 'utm_pubreferrer', 'utm_reader', 'utm_referrer', 'utm_serial', 'utm_session', 'utm_siteid', 'utm_social', 'utm_social-type', 'utm_source', 'utm_supplier', 'utm_swu', 'utm_term', 'utm_umguk', 'utm_userid', 'utm_viz_id', 'nr_email_referer')
	)
];
