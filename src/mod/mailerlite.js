import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('ml_subscriber', 'ml_subscriber_hash')
	)
];
