import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_REDIRECT_AT(
	__.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("z"),
		__.MAP_TO_URL()
	),
	__.AND(
		__.AT_HOSTNAME("t.umblr.com"),
		__.AT_PATHNAME("/redirect")
	)
));
