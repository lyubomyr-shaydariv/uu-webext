import { AT, BLOCK, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			{onError: BLOCK.CONFIRM()},
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT("dest"),
			MAP.TO_URL()
		),
		OP.AND(
			AT.HOSTNAME("www.evernote.com"),
			AT.PATHNAME("/OutboundRedirect.action")
		)
	)
];
