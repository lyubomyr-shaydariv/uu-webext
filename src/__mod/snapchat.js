import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('sc_referrer', 'sc_ua'),
		AT.DOMAIN('snapchat.com')
	)
];
