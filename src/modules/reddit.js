import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("reddit.com");
	const filter = rules.EXCLUDE("$3p", "$deep_link", "$original_link", "_branch_match_id", "correlation_id", "ref_campaign", "ref_source");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const at = rules.AT_HOSTNAME("out.reddit.com");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) && /^\/[^/]+$/.test(url.pathname) ) {
				return rules.REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	});
}
