import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('int_campaign', 'int_cmp_creative', 'int_cmp_id', 'int_cmp_name', 'int_content', 'int_medium', 'int_source', PREFIX('utm_'))
];
