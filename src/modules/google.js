addRule((function() {
	const ampPrefix = "/amp/s/";
	return {
		redirect: function(url) {
			if ( url.hostname === "www.google.com" || url.hostname.endsWith(".google.com") ) {
				if ( url.pathname === "/url" ) {
					return extractQueryPairAsUrl(url.searchParams, "q");
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
	const filter = EXCLUDE("ei", "gs_gbg", "gs_lcp", "gs_mss", "gs_rn", "gws_rd", "sei", "ved");
	return {
		redirect: function(url) {
			if ( /^(?:[^.]+\.)?google\.[^.]+$/.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
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
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
