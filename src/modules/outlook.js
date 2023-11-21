import * as __ from '/rules.js';

export default [
	__.RULE.REDIRECT_AT(
		__.OP.PIPE(
			{
				onError: __.BLOCK.CONFIRM
			},
			__.MAP.EXTRACT_SEARCH_PARAMS(),
			__.MAP.PROPERTY_AT("url"),
			__.MAP.TO_URL()
		),
		__.AT.DOMAIN("safelinks.protection.outlook.com")
	)
];
