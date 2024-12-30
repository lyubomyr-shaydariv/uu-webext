import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('gog.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('link_id', 'track_click')
];
