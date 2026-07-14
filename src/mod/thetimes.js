import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('thetimes.co.uk')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('shareToken')
];
