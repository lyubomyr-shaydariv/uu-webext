import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('apple.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('app', /ign-itsc[a-z]+/),
	RULE()
		.AT().DOMAIN('music.apple.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('i')
];
