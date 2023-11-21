import { AT, BLOCK, JUST, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			{onError: BLOCK.CONFIRM},
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT("u"),
			MAP.TO_URL()
		),
		OP.AND(
			AT.DOMAIN("facebook.com"),
			AT.PATHNAME("/l.php")
		)
	),
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING("hrc", "refsrc"),
		AT.DOMAIN("facebook.com")
	),
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("fbclid", "fb_action_ids", "fb_action_types", "fb_ref", "fb_source")
	)
];
