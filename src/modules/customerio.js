import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.REDIRECT_AT(
	__.OP.PIPE(
		{
			onError: __.BLOCK.CONFIRM
		},
		__.MAP.EXTRACT_PATHNAME(),
		__.MAP.PARSE_REGEXP(/^\/e\/c\/(.*)/),
		__.MAP.ELEMENT_AT(1),
		__.MAP.DECODE_BASE64(),
		__.MAP.PARSE_JSON(),
		__.MAP.PROPERTY_AT("href"),
		__.MAP.TO_URL()
	),
	__.AT.HOSTNAME("e.customeriomail.com")
));
