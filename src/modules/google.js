import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const ampPrefix = "/amp/s/";
	const at = rules.AT_DOMAIN("google.com");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				if ( url.pathname === "/url" ) {
					return rules.REDIRECT_FROM_SEARCH_PARAMS(url, "q");
				}
				if ( url.pathname.startsWith(ampPrefix) ) {
					const rawAmpUrl = url.pathname.substring(ampPrefix.length);
					// does Google insert schemes to the AMPed pages?
					if ( rawAmpUrl.startsWith("http://") || rawAmpUrl.startsWith("https://") ) {
						return new URL(rawAmpUrl);
					}
					// assuming that the URL is always open for HTTP possibly redirecting to HTTPS itself
					const schemedAmpUrl = "http://" + rawAmpUrl;
					try {
						return new URL(schemedAmpUrl);
					} catch ( ex ) {
						console.error(ex);
						// pass
					}
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
