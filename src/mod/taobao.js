import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('taobao.com')
		.FROM().QUERY_ENTRIES()
		.DO().RETAIN('id')
];
