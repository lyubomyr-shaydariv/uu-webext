import { JUST, OP, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		OP.AND(
			JUST.EXCLUDING("at_campaign", "at_medium"),
			JUST.EXCLUDING_BY_STARTS_WITH("at_custom")
		)
	)
];
