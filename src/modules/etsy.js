import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("click_key", "click_sum", "organic_search_click", "ref"),
		__.AT.DOMAIN("etsy.com")
	)
];
