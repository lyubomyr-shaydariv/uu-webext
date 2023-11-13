addRule((function() {
	const ampPrefix = "/amp/s/";
	const at = AT_DOMAIN("google.com");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				if ( url.pathname === "/url" ) {
					return REDIRECT_FROM_SEARCH_PARAMS(url, "q");
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
	};
})());
addRule((function() {
	const at = AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?google\.[^.]+$/);
	const filter = EXCLUDE("ei", "gs_gbg", "gs_lcp", "gs_mss", "gs_rn", "gws_rd", "sei", "ved");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = AND(
		EXCLUDE("_ga", "dclid", "gclid", "gclsrc", "gs_l"),
		EXCLUDE_BY_STARTS_WITH("ga_")
	);
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
