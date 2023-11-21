import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING_BY_STARTS_WITH("mtm_", "pk_")
	)
];
