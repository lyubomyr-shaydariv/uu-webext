import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('apple.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('app', 'at', 'cid', 'ct', /ign-itsc[a-z]+/, 'itscg', 'itsct', 'ls', 'mt', 'pt', 'referrer', 'src', 'uo'),
	RULE()
		.AT().DOMAIN('music.apple.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('cId', 'i', 'lId', 'sr')
];
