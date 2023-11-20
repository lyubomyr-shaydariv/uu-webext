import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME("medium.com");
	const excluding = __.EXCLUDING("_branch_match_id", "source");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}

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
		__.AT_HOSTNAME("medium.com"),
		__.AT_PATHNAME("/r/")
	)
));
