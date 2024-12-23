import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('wikipedia.org')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('wprov')
];
