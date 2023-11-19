import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AT_DOMAIN("youtube.com");
	const filter = __.EXCLUDE("feature", "kw", "si");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const at = __.AT_DOMAIN("youtu.be");
	const filter = __.EXCLUDE("si");
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
		__.AT_DOMAIN("youtube.com"),
		__.AT_PATHNAME("/redirect")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "q");
			}
		}
	});
}
