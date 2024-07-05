import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('cell.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_returnURL')
];
