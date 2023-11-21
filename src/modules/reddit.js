import { AT, BLOCK, JUST, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING("$3p", "$deep_link", "$original_link", "_branch_match_id", "correlation_id", "ref_campaign", "ref_source"),
		AT.DOMAIN("reddit.com")
	),
	RULE.REDIRECT_AT(
		OP.PIPE(
			{onError: BLOCK.CONFIRM},
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT("url"),
			MAP.TO_URL()
		),
		OP.AND(
			AT.HOSTNAME("out.reddit.com"),
			AT.PATHNAME_BY_REGEXP(/^\/[^/]+$/)
		)
	)
];
