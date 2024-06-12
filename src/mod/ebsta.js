import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('console.ebsta.com').PATHNAME('/linktracking/track.aspx')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('linkuri').TO_URL()
		.DO().REDIRECT()
];
