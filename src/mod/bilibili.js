import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().DOMAIN('bilibili.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('callback', 'spm_id_from')
];
