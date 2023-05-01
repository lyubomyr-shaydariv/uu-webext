registerModule(function() {
	function filter(k, vs) {
		return k !== "eBP" && k !== "lgCta" && k !== "lgTemp" && k !== "lipi" && k !== "midSig" && k !== "midToken" && k !== "recommendedFlavor" && k !== "refId" && k !== "trackingId" && k !== "trk" && k !== "trkEmail";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "linkedin.com" || url.hostname.endsWith(".linkedin.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "linkedin.com" || url.hostname.endsWith(".linkedin.com")) && url.pathname === "/safety/go" ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
});
