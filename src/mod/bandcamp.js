import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bandcamp.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('from', 'search_item_id', 'search_item_type', 'search_match_part', 'search_page_id', 'search_page_no', 'search_rank', 'search_sig')
];
