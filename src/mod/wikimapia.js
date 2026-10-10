import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('wikimapia.org').PATHNAME('/external_link')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
