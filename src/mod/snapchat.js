import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('snapchat.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('sc_referrer', 'sc_ua', 'ScCid')
];
