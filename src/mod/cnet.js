import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('cnet.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ftag')
];
