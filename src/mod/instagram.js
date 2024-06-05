import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('igshid', 'ig_rid'),
	RULE()
		.AT().DOMAIN('instagram.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('e', 'g', 'igsh'),
	RULE()
		.AT().DOMAIN('l.instagram.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];
