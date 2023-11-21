import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("mc_cid", "mc_eid")
	)
];
