import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AND(
		rules.AT_DOMAIN("twitter.com"),
		rules.AT_SEARCH_PARAMS_HAS_KEY("ref_url")
	);
	const pipeline = rules.PIPE(
		rules.MAP_EXTRACT_SEARCH_PARAMS(),
		rules.MAP_PROPERTY_AT("ref_url"),
		rules.MAP_TO_URL(),
		rules.MAP_EXTRACT_SEARCH_PARAMS(),
		rules.MAP_PROPERTY_AT("type"),
		rules.MAP_PARSE_REGEXP(/twitterurl=(https?.*?\/\d+)/gm),
		rules.MAP_ELEMENT_AT(1),
		rules.MAP_REPLACE("3A", ":"),
		rules.MAP_TO_URL()
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				try {
					return pipeline(url);
				} catch ( err ) {
					console.error(err);
					return rules.REDIRECT_CONFIRMATION_URL(url);
				}
			}
		}
	});
}
{
	const at = rules.AT_DOMAIN("twitter.com");
	const filter = rules.AND(
		rules.EXCLUDE("cxt", "s", "t"),
		rules.EXCLUDE_BY_STARTS_WITH("ref_")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const filter = rules.EXCLUDE("twclid");
	registry.addRule({
		redirect: (url) => {
			rules.FILTER_ENTRIES(url, filter);
		}
	});
}
