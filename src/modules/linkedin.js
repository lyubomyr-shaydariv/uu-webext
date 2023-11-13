addRule((function() {
	const filter = EXCLUDE("eBP", "lgCta", "lgTemp", "lipi", "midSig", "midToken", "recommendedFlavor", "refId", "trackingId", "trk", "trkEmail");
	return {
		redirect: function(url) {
			if ( url.hostname === "linkedin.com" || url.hostname.endsWith(".linkedin.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "linkedin.com" || url.hostname.endsWith(".linkedin.com")) && url.pathname === "/safety/go" ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
})());
