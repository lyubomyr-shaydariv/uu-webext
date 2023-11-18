import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AND(
		rules.AT_DOMAIN("google.com"),
		rules.AT_PATHNAME("/url/")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return rules.REDIRECT_FROM_SEARCH_PARAMS(url, "q");
			}
		}
	});
}
{
	const ampPrefix = "/amp/s/";
	const at = rules.AND(
		rules.AT_DOMAIN("google.com"),
		rules.AT_PATHNAME_BY_STARTS_WITH(ampPrefix)
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				const rawAmpUrl = url.pathname.substring(ampPrefix.length);
				if ( rawAmpUrl.startsWith("http://") || rawAmpUrl.startsWith("https://") ) {
					return new URL(rawAmpUrl);
				}
				try {
					// assuming that the URL is always open for HTTPS
					return new URL("https://" + rawAmpUrl);
				} catch ( ex ) {
					return rules.REDIRECT_CONFIRMATION_URL(url);
				}
			}
		}
	});
}
{
	const at = rules.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?google\.[^.]+$/);
	const filter = rules.EXCLUDE("ei", "gs_gbg", "gs_lcp", "gs_mss", "gs_rn", "gws_rd", "sei", "ved");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const filter = rules.AND(
		rules.EXCLUDE("_ga", "dclid", "gclid", "gclsrc", "gs_l"),
		rules.EXCLUDE_BY_STARTS_WITH("ga_")
	);
	registry.addRule({
		redirect: (url) => {
			rules.FILTER_ENTRIES(url, filter);
		}
	});
}
