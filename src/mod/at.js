import { JUST, OP, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('at_campaign', /^at_custom.*/, 'at_medium')
	)
];
