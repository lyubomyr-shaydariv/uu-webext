import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bing.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('cvid', 'form', 'pq', 'qs', 'qp', 'sc', 'sk', 'sp')
];
