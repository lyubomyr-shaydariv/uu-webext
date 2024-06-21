import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('reddit.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL(),
	RULE()
		.AT().HOSTNAME('out.reddit.com').PATHNAME(/^\/[^/]+$/)
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().HOSTNAME('redd.it')
		.FROM().PATHNAME()
		.APPLY().GET_PROPERTY(0).REPLACE_STRING(/(.*)/, 'https://www.reddit.com/tb/$1').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().HOSTNAME('click.redditmail.com')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
