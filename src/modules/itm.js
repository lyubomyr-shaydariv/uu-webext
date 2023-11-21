import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("itm_campaign", "itm_medium", "itm_source", "itm_content", "itm_term")
	)
];
