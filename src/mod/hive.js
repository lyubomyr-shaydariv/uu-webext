import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN().EXCEPT('app.hive.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('h_sid', 'h_slt'),
	RULE()
		.AT().DOMAIN('app.hive.co').PATHNAME_PREFIX('/email/')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('h_sid', 'h_slt')
];
