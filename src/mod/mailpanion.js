import { AT, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT('destination'),
			MAP.TO_URL()
		),
		AT.DOMAIN('mailpanion.com')
	)
];
