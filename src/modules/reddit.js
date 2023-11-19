import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("reddit.com");
	const filter = __.EXCLUDE("$3p", "$deep_link", "$original_link", "_branch_match_id", "correlation_id", "ref_campaign", "ref_source");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const at = __.AND(
		__.AT_HOSTNAME("out.reddit.com"),
		__.AT_PATHNAME_BY_REGEXP(/^\/[^/]+$/)
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	});
}
