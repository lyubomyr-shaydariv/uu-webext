import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.REDIRECT_AT(
	__.OP.PIPE(
		{
			onError: __.BLOCK.CONFIRM
		},
		__.MAP.EXTRACT_SEARCH_PARAMS(),
		__.MAP.PROPERTY_AT("to"),
		__.MAP.TO_URL()
	),
	__.OP.AND(
		__.AT.DOMAIN("vk.com"),
		__.AT.PATHNAME("/away.php")
	)
));
