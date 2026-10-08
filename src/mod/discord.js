import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('discord.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ref', 'source')
];
