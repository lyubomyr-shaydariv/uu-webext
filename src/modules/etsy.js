import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("click_key", "click_sum", "organic_search_click", "ref"),
	__.AT_DOMAIN("etsy.com")
));
