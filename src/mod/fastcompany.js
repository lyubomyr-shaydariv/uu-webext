import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('fastcompany.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE_ALL()
];
