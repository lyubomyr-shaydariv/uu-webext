import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bloomberg.com', 'bloomberglaw.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('in_source', 'leadSource', 'srnd', 'trk')
];
