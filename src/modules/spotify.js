import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("context", "si"),
		__.AT.HOSTNAME("open.spotify.com")
	)
];
