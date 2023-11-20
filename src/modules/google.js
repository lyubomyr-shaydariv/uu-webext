import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_REDIRECT_AT(
	__.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("q"),
		__.MAP_TO_URL()
	),
	__.AND(
		__.AT_DOMAIN("google.com"),
		__.AT_PATHNAME("/url/")
	)
));

registry.addRule(__.RULE_REDIRECT_AT(
	__.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_PATHNAME(),
		__.MAP_SUBSTRING(7), // "/amp/s/".length
		__.MAP_TO_URL()
	),
	__.AND(
		__.AT_DOMAIN("google.com"),
		__.AT_PATHNAME_BY_STARTS_WITH("/amp/s/")
	)
));

{
	const at = __.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?google\.[^.]+$/);
	const excluding = __.EXCLUDING("ei", "gs_gbg", "gs_lcp", "gs_mss", "gs_rn", "gws_rd", "sei", "ved");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.MUTATE_ENTRIES(url, excluding);
			}
		}
	});
}
{
	const excluding = __.AND(
		__.EXCLUDING("_ga", "dclid", "gclid", "gclsrc", "gs_l"),
		__.EXCLUDING_BY_STARTS_WITH("ga_")
	);
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
