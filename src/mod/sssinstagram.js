import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('media.sssinstagram.com').PATHNAME('/get')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('uri').TO_URL()
		.DO().REDIRECT()
];
