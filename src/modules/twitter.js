import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_DOMAIN("twitter.com"),
		__.AT_SEARCH_PARAMS_HAS_KEY("ref_url")
	);
	const pipeline = __.PIPE(
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
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return pipeline(url);
			}
		}
	});
}
{
	const at = __.AT_DOMAIN("twitter.com");
	const filter = __.AND(
		__.EXCLUDE("cxt", "s", "t"),
		__.EXCLUDE_BY_STARTS_WITH("ref_")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const filter = __.EXCLUDE("twclid");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
