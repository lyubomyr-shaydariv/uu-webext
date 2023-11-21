import { AT, JUST, OP, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		OP.AND(
			JUST.EXCLUDING("ref_"),
			JUST.EXCLUDING_BY_STARTS_WITH("pf_rd_")
		),
		AT.DOMAIN("imdb.com")
	)
];
