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
		__.AT.HOSTNAME("l.instagram.com")
	),
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("igshid")
	)
];
