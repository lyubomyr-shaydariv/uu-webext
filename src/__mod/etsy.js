import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('click_key', 'click_sum', 'organic_search_click', 'ref'),
		AT.DOMAIN('etsy.com')
	)
];
