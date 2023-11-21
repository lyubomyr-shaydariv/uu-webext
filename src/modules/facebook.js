import * as __ from '/rules.js';

export default [
	__.RULE.REDIRECT_AT(
		__.OP.PIPE(
			{
				onError: __.BLOCK.CONFIRM
			},
			__.MAP.EXTRACT_SEARCH_PARAMS(),
			__.MAP.PROPERTY_AT("u"),
			__.MAP.TO_URL()
		),
		__.OP.AND(
			__.AT.DOMAIN("facebook.com"),
			__.AT.PATHNAME("/l.php")
		)
	),
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("hrc", "refsrc"),
		__.AT.DOMAIN("facebook.com")
	),
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("fbclid", "fb_action_ids", "fb_action_types", "fb_ref", "fb_source")
	)
];
