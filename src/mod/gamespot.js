import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('gamespot.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ftag', 'PostType', 'ServiceType', 'TheTime', 'UniqueID')
];
