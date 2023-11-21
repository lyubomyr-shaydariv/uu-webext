import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.OP.AND(
			__.JUST.EXCLUDING("at_campaign", "at_medium"),
			__.JUST.EXCLUDING_BY_STARTS_WITH("at_custom")
		)
	)
];
