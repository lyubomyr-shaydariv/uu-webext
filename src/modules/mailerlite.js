import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("ml_subscriber", "ml_subscriber_hash")
	)
];
