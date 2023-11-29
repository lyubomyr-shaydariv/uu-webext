import { AT, BLOCK, JUST, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			{onError: BLOCK.CONFIRM()},
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT('ref_url'),
			MAP.TO_URL(),
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT('type'),
			MAP.PARSE_REGEXP(/twitterurl=(https?.*?\/\d+)/gm),
			MAP.ELEMENT_AT(1),
			MAP.REPLACE('3A', ':'),
			MAP.TO_URL()
		),
		OP.AND(
			AT.DOMAIN('twitter.com'),
			AT.SEARCH_PARAMS_HAS_KEY('ref_url')
		)
	),
	RULE.MUTATE_ENTRIES_AT(
		OP.AND(
			JUST.EXCLUDING('cxt', 's', 't'),
			JUST.EXCLUDING_BY_STARTS_WITH('ref_')
		),
		AT.DOMAIN('twitter.com')
	),
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('twclid')
	)
];
