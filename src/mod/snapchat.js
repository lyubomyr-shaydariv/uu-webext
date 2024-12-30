import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('snapchat.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('sc_referrer', 'sc_ua', 'ScCid')
];
