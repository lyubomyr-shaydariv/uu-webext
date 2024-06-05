import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('sc_campaign', 'sc_channel', 'sc_content', 'sc_country', 'sc_geo', 'sc_medium', 'sc_outcome')
];
