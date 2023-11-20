import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_DOMAIN("facebook.com"),
		__.AT_PATHNAME("/l.php")
	);
	const pipeline = __.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("u"),
		__.MAP_TO_URL()
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return pipeline(url);
			}
		}
	});
}
{
	const at = __.AT_DOMAIN("facebook.com");
	const excluding = __.EXCLUDING("hrc", "refsrc");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
{
	const excluding = __.EXCLUDING("fbclid", "fb_action_ids", "fb_action_types", "fb_ref", "fb_source");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
