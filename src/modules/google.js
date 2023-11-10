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
	const filter = createFilterByConstantKeys("ei", "gs_gbg", "gs_lcp", "gs_mss", "gs_rn", "gws_rd", "sei", "ved");
	const domainRx = /^(?:[^.]+\.)?google\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	function filter(k, vs) {
		return k !== "_ga" && k !== "dclid" && !k.startsWith("ga_") && k !== "gclid" && k !== "gclsrc" && k !== "gs_l";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
