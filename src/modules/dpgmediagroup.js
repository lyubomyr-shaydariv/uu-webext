import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING_BY_STARTS_WITH("dpg_")
	)
];
