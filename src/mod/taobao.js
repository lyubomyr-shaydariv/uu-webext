import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('taobao.com', 'tmall.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().RETAIN('id')
];
