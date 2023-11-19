import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_HOSTNAME("t.umblr.com"),
		__.AT_PATHNAME("/redirect")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "z");
			}
		}
	});
}
