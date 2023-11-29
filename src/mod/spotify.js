import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('context', 'si'),
		AT.HOSTNAME('open.spotify.com')
	)
];
