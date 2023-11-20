import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("$3p", "$deep_link", "$original_link", "_branch_match_id", "correlation_id", "ref_campaign", "ref_source"),
	__.AT.DOMAIN("reddit.com")
));

registry.addRule(__.RULE.REDIRECT_AT(
	__.OP.PIPE(
		{
			onError: __.BLOCK.CONFIRM
		},
		__.MAP.EXTRACT_SEARCH_PARAMS(),
		__.MAP.PROPERTY_AT("url"),
		__.MAP.TO_URL()
	),
	__.OP.AND(
		__.AT.HOSTNAME("out.reddit.com"),
		__.AT.PATHNAME_BY_REGEXP(/^\/[^/]+$/)
	)
));
