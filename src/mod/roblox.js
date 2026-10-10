import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('roblox.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('refPageId')
];
