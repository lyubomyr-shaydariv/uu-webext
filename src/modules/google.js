import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_DOMAIN("google.com"),
		__.AT_PATHNAME("/url/")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return __.REDIRECT_FROM_SEARCH_PARAMS(url, "q");
			}
		}
	});
}
{
	const ampPrefix = "/amp/s/";
	const at = __.AND(
		__.AT_DOMAIN("google.com"),
		__.AT_PATHNAME_BY_STARTS_WITH(ampPrefix)
	);
	const pipeline = __.PIPE(
		__.MAP_EXTRACT_PATHNAME(),
		__.MAP_SUBSTRING(ampPrefix.length),
		__.MAP_TO_URL()
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				try {
					return pipeline(url);
				} catch ( err ) {
					console.error(err);
					return __.REDIRECT_CONFIRMATION_URL(url);
				}
			}
		}
	});
}
{
	const at = __.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?google\.[^.]+$/);
	const filter = __.EXCLUDE("ei", "gs_gbg", "gs_lcp", "gs_mss", "gs_rn", "gws_rd", "sei", "ved");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const filter = __.AND(
		__.EXCLUDE("_ga", "dclid", "gclid", "gclsrc", "gs_l"),
		__.EXCLUDE_BY_STARTS_WITH("ga_")
	);
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
