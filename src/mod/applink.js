import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('app.link')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('$android_deeplink_path', '$deeplink_path', '$og_redirect', 'adblock', 'base_url', 'campaign', 'channel', 'cjevent', 'click_id', 'compact_view', 'dnt', 'domain', 'geoip_country', 'keyword', 'referrer_domain', 'referrer_url', 'tags', 'user_agent')
];
