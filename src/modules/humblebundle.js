import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("hmb_campaign", "hmb_medium", "hmb_source")
	)
];
