import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('cell.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('_returnURL')
];
