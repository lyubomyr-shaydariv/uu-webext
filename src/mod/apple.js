import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('app', /ign-itsc[a-z]+/),
		AT.DOMAIN('apple.com')
	)
];
