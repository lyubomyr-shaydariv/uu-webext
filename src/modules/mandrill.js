import * as __ from '/rules.js';

export default [
	__.RULE.REDIRECT_AT(
		__.OP.PIPE(
			{onError: __.BLOCK.CONFIRM},
			__.MAP.EXTRACT_SEARCH_PARAMS(),
			__.MAP.PROPERTY_AT("p"),
			__.MAP.DECODE_BASE64(),
			__.MAP.PARSE_JSON(),
			__.MAP.PROPERTY_AT("p"),
			__.MAP.PARSE_JSON(),
			__.MAP.PROPERTY_AT("url"),
			__.MAP.TO_URL()
		),
		__.OP.AND(
			__.AT.HOSTNAME("mandrillapp.com"),
			__.AT.PATHNAME("/track/click/")
		)
	)
];
