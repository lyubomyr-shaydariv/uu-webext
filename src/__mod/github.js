import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('email_source', 'email_token'),
		AT.DOMAIN('github.com')
	)
];
