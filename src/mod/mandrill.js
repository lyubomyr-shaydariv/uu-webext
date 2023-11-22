import { AT, BLOCK, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			{onError: BLOCK.CONFIRM},
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT("p"),
			MAP.DECODE_BASE64(),
			MAP.PARSE_JSON(),
			MAP.PROPERTY_AT("p"),
			MAP.PARSE_JSON(),
			MAP.PROPERTY_AT("url"),
			MAP.TO_URL()
		),
		OP.AND(
			AT.HOSTNAME("mandrillapp.com"),
			AT.PATHNAME("/track/click/")
		)
	)
];
