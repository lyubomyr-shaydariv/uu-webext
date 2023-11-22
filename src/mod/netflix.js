import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING("tctx", "trackId"),
		AT.DOMAIN("netflix.com")
	)
];
