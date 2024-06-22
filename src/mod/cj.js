import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().QUERY_ENTRIES_HAVING_ALL_OF('amount', 'cid', 'cjevent', 'currency', 'oid', 'type')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('amount', 'channel', 'channel_ts', 'cid', 'cjevent', 'coupon', 'currency', 'discount', 'oid', 'type')
];
