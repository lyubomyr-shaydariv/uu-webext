import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("_branch_match_id", "source"),
	__.AT.HOSTNAME("medium.com")
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
		__.AT.HOSTNAME("medium.com"),
		__.AT.PATHNAME("/r/")
	)
));
