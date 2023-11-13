addRule((function() {
	const at = AT_DOMAIN("linkedin.com");
	const filter = EXCLUDE("eBP", "lgCta", "lgTemp", "lipi", "midSig", "midToken", "recommendedFlavor", "refId", "trackingId", "trk", "trkEmail");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const at = AT_DOMAIN("linkedin.com");
	return {
		redirect: function(url) {
			if ( at(url) && url.pathname === "/safety/go" ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	};
})());
