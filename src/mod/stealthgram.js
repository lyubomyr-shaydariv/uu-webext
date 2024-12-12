import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('stealthgram.com').PATHNAME('/api/download-image/', '/api/download-video/', '/download-image/', '/download-video/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
