import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING(/^mtm_.*/, /^pk_.*/)
	)
];
