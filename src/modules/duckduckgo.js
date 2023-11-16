import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AND(
		rules.AT_HOSTNAME("duckduckgo.com"),
		rules.AT_PATHNAME("/l/")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return rules.REDIRECT_FROM_SEARCH_PARAMS(url, "uddg");
			}
		}
	});
}
