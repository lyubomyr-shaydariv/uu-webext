import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('matomo_campaign', 'matomo_cid', 'matomo_content', 'matomo_group', 'matomo_keyword', 'matomo_medium', 'matomo_placement', 'matomo_source', 'mtm_campaign', 'mtm_cid', 'mtm_content', 'mtm_group', 'mtm_keyword', 'mtm_medium', 'mtm_placement', 'mtm_source', 'pk_campaign', 'pk_keyword', 'pk_kwd', 'piwik_campaign', 'piwik_keyword', 'piwik_kwd')
];
