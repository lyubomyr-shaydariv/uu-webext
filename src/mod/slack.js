import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('slack-redir.net').PATHNAME('/link')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
