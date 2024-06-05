import { AT, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT('to'),
			MAP.TO_URL()
		),
		OP.AND(
			AT.DOMAIN('vk.com'),
			AT.PATHNAME('/away.php')
		)
	)
];
