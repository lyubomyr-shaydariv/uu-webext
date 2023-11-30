import { AT, JUST, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('_branch_match_id', 'source'),
		AT.HOSTNAME('medium.com')
	),
	RULE.REDIRECT_AT(
		OP.PIPE(
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT('url'),
			MAP.TO_URL()
		),
		OP.AND(
			AT.HOSTNAME('medium.com'),
			AT.PATHNAME('/r/')
		)
	)
];
