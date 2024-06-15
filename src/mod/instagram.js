import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('igshid', 'ig_rid'),
	RULE()
		.AT().DOMAIN('instagram.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('e', 'g', 'igsh', /^saved[-_]by$/), // TODO is it `saved-by` or `saved_by`?
	RULE()
		.AT().DOMAIN('l.instagram.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];
