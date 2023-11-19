import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_DOMAIN("facebook.com"),
		__.AT_PATHNAME("/l.php")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "u");
			}
		}
	});
}
{
	const at = __.AT_DOMAIN("facebook.com");
	const filter = __.EXCLUDE("hrc", "refsrc");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const filter = __.EXCLUDE("fbclid", "fb_action_ids", "fb_action_types", "fb_ref", "fb_source");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
