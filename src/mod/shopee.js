import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('shopee.co.id', 'shopee.com.br', 'shopee.cl', 'shopee.com.co', 'shopee.com.mx', 'shopee.com.my', 'shopee.co.vn', 'shopee.com', 'shopee.ph', 'shopee.sg', 'shopee.tw', 'shopee.vn')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('af_click_lookback', 'af_siteid', 'af_reengagement_window', 'af_sub_siteid', 'af_viewthrough_lookback', 'c', 'is_retargeting', 'pid', 'sp_atk', 'xptdk')
];
