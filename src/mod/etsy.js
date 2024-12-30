import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('etsy.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('click_key', 'click_sum', 'organic_search_click', 'ref')
];
