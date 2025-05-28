import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('shopee.co.id', 'shopee.com.br', 'shopee.cl', 'shopee.com.co', 'shopee.com.mx', 'shopee.com.my', 'shopee.co.vn', 'shopee.com', 'shopee.ph', 'shopee.sg', 'shopee.tw', 'shopee.vn')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('sp_atk', 'xptdk')
];
