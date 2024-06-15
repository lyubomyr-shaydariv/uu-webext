import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('unicorn_click_id'),
	RULE()
		.AT().HOSTNAME('app.adjust.com').PATHNAME('/jsr')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().HOSTNAME('bhpz.adj.st').PATHNAME('/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('adjust_redirect').TO_URL()
		.DO().REDIRECT()
];
