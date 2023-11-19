import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME("medium.com");
	const filter = __.EXCLUDE("_branch_match_id", "source");
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
		__.AT_HOSTNAME("medium.com"),
		__.AT_PATHNAME("/r/")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	});
}
