import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_VALUES()
		.DO().REMOVE('twclid')
];
