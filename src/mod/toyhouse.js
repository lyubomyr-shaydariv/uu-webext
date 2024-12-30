import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('toyhou.se').PATHNAME('/~r')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('q').TO_URL()
		.DO().REDIRECT()
];
