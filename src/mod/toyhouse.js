import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('toyhou.se').PATHNAME('/~r')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('q').TO_URL()
		.DO().REDIRECT()
];
