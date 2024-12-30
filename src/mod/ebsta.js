import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('console.ebsta.com').PATHNAME('/linktracking/track.aspx')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('linkuri').TO_URL()
		.DO().REDIRECT()
];
