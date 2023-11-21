import * as __ from '/rules.js';

export default [
	__.RULE.REDIRECT_AT(
		__.OP.PIPE(
			{
				onError: __.BLOCK.CONFIRM
			},
			__.MAP.EXTRACT_SEARCH_PARAMS(),
			__.MAP.PROPERTY_AT("ref_url"),
			__.MAP.TO_URL(),
			__.MAP.EXTRACT_SEARCH_PARAMS(),
			__.MAP.PROPERTY_AT("type"),
			__.MAP.PARSE_REGEXP(/twitterurl=(https?.*?\/\d+)/gm),
			__.MAP.ELEMENT_AT(1),
			__.MAP.REPLACE("3A", ":"),
			__.MAP.TO_URL()
		),
		__.OP.AND(
			__.AT.DOMAIN("twitter.com"),
			__.AT.SEARCH_PARAMS_HAS_KEY("ref_url")
		)
	),
	__.RULE.MUTATE_ENTRIES_AT(
		__.OP.AND(
			__.JUST.EXCLUDING("cxt", "s", "t"),
			__.JUST.EXCLUDING_BY_STARTS_WITH("ref_")
		),
		__.AT.DOMAIN("twitter.com")
	),
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("twclid")
	)
];
