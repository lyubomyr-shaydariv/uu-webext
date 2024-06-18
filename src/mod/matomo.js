import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE(/^mtm_.*/, /^pk_.*/, 'piwik_campaign', 'piwik_kwd')
];
