import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("_hsenc", "_hsmi", "__hsfp", "__hssc", "__hstc", "hsCtaTracking")
	)
];
