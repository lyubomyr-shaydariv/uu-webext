import { AT, JUST, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT('u'),
			MAP.TO_URL()
		),
		AT.HOSTNAME('l.instagram.com')
	),
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('igshid', 'ig_rid')
	),
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('e', 'g'),
		AT.HOSTNAME('www.instagram.com')
	)
];
