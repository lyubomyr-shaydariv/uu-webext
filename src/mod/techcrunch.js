import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('techcrunch.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('guccounter', PREFIX('guce_referrer_'), 'ncid', 'sr', 'sr_share', 'tpcc')
];
