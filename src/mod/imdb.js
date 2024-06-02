import { AT, JUST, OP, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING(/^pf_rd_.*/, 'ref_'),
		AT.DOMAIN('imdb.com')
	)
];
