import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("sc_cid", "mkt_tok", "s_cid")
	)
];
