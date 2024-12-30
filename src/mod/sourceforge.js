import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('sourceforge.net')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('position', 'source')
];
