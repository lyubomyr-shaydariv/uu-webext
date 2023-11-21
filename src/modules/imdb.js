import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.OP.AND(
			__.JUST.EXCLUDING("ref_"),
			__.JUST.EXCLUDING_BY_STARTS_WITH("pf_rd_")
		),
		__.AT.DOMAIN("imdb.com")
	)
];
