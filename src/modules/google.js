registerModule(function() {
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
});
registerModule(function() {
	function filter(k, vs) {
		return k !== "ei" && k !== "gs_gbg" && k !== "gs_lcp" && k !== "gs_mss" && k !== "gs_rn" && k !== "gws_rd" && k !== "sei" && k !== "ved";
	};
	const domainRx = /^(?:[^.]+\.)?google\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	function filter(k, vs) {
		return k !== "_ga" && k !== "gclid" && k !== "dclid" && k !== "gs_l" && !k.startsWith("ga_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
