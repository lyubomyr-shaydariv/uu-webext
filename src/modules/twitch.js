import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("tt_content", "tt_medium")
	)
];
