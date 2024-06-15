import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('deref-gmx.net').PATHNAME(/^\/mail\/client\/[0-9a-z]+\/dereferrer\/?$/)
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('redirectUrl').TO_URL()
		.DO().REDIRECT()
];
