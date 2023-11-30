import { AT, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			MAP.EXTRACT_PATHNAME(),
			MAP.PARSE_REGEXP(/^\/e\/c\/(.*)/),
			MAP.ELEMENT_AT(1),
			MAP.DECODE_BASE64(),
			MAP.PARSE_JSON(),
			MAP.PROPERTY_AT('href'),
			MAP.TO_URL()
		),
		AT.HOSTNAME('e.customeriomail.com')
	)
];
