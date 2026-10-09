import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('piwik_campaign', 'piwik_cid', 'piwik_content', 'piwik_cpn', 'piwik_keyword', 'piwik_kwd', 'piwik_medium', 'piwik_source', 'pk_campaign', 'pk_cid', 'pk_content', 'pk_cpn', 'pk_keyword', 'pk_kwd', 'pk_medium', 'pk_source')
];
