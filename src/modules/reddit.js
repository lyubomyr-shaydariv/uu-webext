import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("$3p", "$deep_link", "$original_link", "_branch_match_id", "correlation_id", "ref_campaign", "ref_source"),
	__.AT_DOMAIN("reddit.com")
));

registry.addRule(__.RULE_REDIRECT_AT(
	__.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("url"),
		__.MAP_TO_URL()
	),
	__.AND(
		__.AT_HOSTNAME("out.reddit.com"),
		__.AT_PATHNAME_BY_REGEXP(/^\/[^/]+$/)
	)
));
