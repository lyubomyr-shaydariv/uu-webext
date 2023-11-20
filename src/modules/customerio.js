import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_REDIRECT_AT(
	__.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_PATHNAME(),
		__.MAP_PARSE_REGEXP(/^\/e\/c\/(.*)/),
		__.MAP_ELEMENT_AT(1),
		__.MAP_DECODE_BASE64(),
		__.MAP_PARSE_JSON(),
		__.MAP_PROPERTY_AT("href"),
		__.MAP_TO_URL()
	),
	__.AT_HOSTNAME("e.customeriomail.com")
));
