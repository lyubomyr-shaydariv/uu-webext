import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('app.instapage.com').PATHNAME(/^\/route\/[0-9]+/)
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').REPLACE_STRING(/^(?:[a-z]+:\/\/)?(.+)$/, 'https://$1').TO_URL()
		.DO().REDIRECT()
];
