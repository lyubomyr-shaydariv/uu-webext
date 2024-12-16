import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('stealthgram.com').PATHNAME('/api/download-image', '/api/download-image/', '/api/download-video', '/api/download-video/', '/api/stream-video', '/api/stream-video/', '/download-image', '/download-image/', '/download-video', '/download-video/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
