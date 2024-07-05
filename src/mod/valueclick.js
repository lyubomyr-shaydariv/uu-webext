import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('www.anrdoezrs.net', 'www.dpbolvw.net', 'www.tkqlhce.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
