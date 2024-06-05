import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('hmb_campaign', 'hmb_medium', 'hmb_source')
	)
];
