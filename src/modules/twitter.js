import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_REDIRECT_AT(
	__.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("ref_url"),
		__.MAP_TO_URL(),
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("type"),
		__.MAP_PARSE_REGEXP(/twitterurl=(https?.*?\/\d+)/gm),
		__.MAP_ELEMENT_AT(1),
		__.MAP_REPLACE("3A", ":"),
		__.MAP_TO_URL()
	),
	__.AND(
		__.AT_DOMAIN("twitter.com"),
		__.AT_SEARCH_PARAMS_HAS_KEY("ref_url")
	)
));

{
	const at = __.AT_DOMAIN("twitter.com");
	const excluding = __.AND(
		__.EXCLUDING("cxt", "s", "t"),
		__.EXCLUDING_BY_STARTS_WITH("ref_")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
{
	const excluding = __.EXCLUDING("twclid");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
