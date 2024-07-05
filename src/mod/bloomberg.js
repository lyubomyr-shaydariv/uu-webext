import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bloomberg.com', 'bloomberglaw.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('in_source', 'leadSource', 'srnd', 'trk')
];
