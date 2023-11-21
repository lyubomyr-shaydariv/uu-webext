import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("_hsenc", "_hsmi", "__hsfp", "__hssc", "__hstc", "hsCtaTracking")
	)
];
