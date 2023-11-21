import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("tctx", "trackId"),
		__.AT.DOMAIN("netflix.com")
	)
];
