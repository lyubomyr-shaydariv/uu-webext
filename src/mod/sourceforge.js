import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('sourceforge.net')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('position', 'source')
];
