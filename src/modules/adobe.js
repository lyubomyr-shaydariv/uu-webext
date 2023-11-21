import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("sc_cid", "mkt_tok", "s_cid")
	)
];
