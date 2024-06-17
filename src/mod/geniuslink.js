import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('target.georiot.com').PATHNAME('/Proxy.ashx')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('GR_URL').TO_URL()
		.DO().REDIRECT()
];
