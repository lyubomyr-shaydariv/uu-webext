import {ALL} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().QUERY_ENTRY_KEYS(ALL('amount', 'cid', 'cjevent', 'currency', 'oid', 'type'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('amount', 'channel', 'channel_ts', 'cid', 'cjevent', 'coupon', 'currency', 'discount', 'oid', 'type')
];
