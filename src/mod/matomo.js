import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('matomo_campaign', 'matomo_cid', 'matomo_content', 'matomo_group', 'matomo_keyword', 'matomo_medium', 'matomo_placement', 'matomo_source', /^mtm_.*/, /^pk_.*/, 'piwik_campaign', 'piwik_keyword', 'piwik_kwd')
];
