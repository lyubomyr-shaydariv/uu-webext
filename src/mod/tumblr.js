import { AT, BLOCK, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			{onError: BLOCK.CONFIRM},
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT("z"),
			MAP.TO_URL()
		),
		OP.AND(
			AT.HOSTNAME("t.umblr.com"),
			AT.PATHNAME("/redirect")
		)
	)
];
