import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('click.linksynergy.com').PATHNAME('/deeplink')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('murl').TO_URL()
		.DO().REDIRECT()
];
