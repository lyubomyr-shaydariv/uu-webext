import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('spotify.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('context', 'si')
];
