import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_REDIRECT_AT(
	__.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("u"),
		__.MAP_TO_URL()
	),
	__.AND(
		__.AT_DOMAIN("facebook.com"),
		__.AT_PATHNAME("/l.php")
	)
));

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

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING("fbclid", "fb_action_ids", "fb_action_types", "fb_ref", "fb_source")
));
