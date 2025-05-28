import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('carousell.com', 'carousell.com.hk', 'carousell.sg')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('referrer_category_id', 'referrer_page_type', 'referrer_request_id', 'referrer_search_query', 'referrer_search_query_source', 'referrer_sort_by', 'referrer_source', 'tap_index', 't-id', 't-referrer_browse_type', 't-source')
];
