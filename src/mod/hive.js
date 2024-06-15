import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('app.hive.co').PATHNAME(/^\/email\//)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('h_sid', 'h_slt')
];
