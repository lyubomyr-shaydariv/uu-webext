import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('tokopedia.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('extParam')
];
