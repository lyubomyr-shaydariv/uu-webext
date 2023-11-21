import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("position", "source"),
		__.AT.DOMAIN("sourceforge.net")
	)
];
