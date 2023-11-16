import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("youtube.com");
	const filter = rules.EXCLUDE("feature", "kw", "si");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const at = rules.AT_DOMAIN("youtu.be");
	const filter = rules.EXCLUDE("si");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const at = rules.AND(
		rules.AT_DOMAIN("youtube.com"),
		rules.AT_PATHNAME("/redirect")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return rules.REDIRECT_FROM_SEARCH_PARAMS(url, "q");
			}
		}
	});
}
