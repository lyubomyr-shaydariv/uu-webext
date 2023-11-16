import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_HOSTNAME("l.instagram.com");
	registry.addRule({
		redirect: (url) => {
			if ( at(url)  ) {
				return rules.REDIRECT_FROM_SEARCH_PARAMS(url, "u");
			}
		}
	});
}
{
	const filter = rules.EXCLUDE("igshid");
	registry.addRule({
		redirect: (url) => {
			rules.FILTER_ENTRIES(url, filter);
		}
	});
}
