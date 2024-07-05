import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('seek.com.au', 'seek.co.nz')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('tracking')
];
