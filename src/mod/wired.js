import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('wired.com', 'wired.co.uk')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('intcid', 'mbid')
];
