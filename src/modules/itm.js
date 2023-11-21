import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("itm_campaign", "itm_medium", "itm_source", "itm_content", "itm_term")
	)
];
