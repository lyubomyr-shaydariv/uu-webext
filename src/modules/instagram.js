import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_HOSTNAME("l.instagram.com");
	registry.addRule({
		redirect: (url) => {
			if ( at(url)  ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "u");
			}
		}
	});
}
{
	const filter = __.EXCLUDE("igshid");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
