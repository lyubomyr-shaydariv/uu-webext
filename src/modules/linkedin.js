registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "eBP" && k !== "lgCta" && k !== "lgTemp" && k !== "lipi" && k !== "midSig" && k !== "midToken" && k !== "recommendedFlavor" && k !== "refId" && k !== "trackingId" && k !== "trk" && k !== "trkEmail";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "www.linkedin.com" || url.hostname === "linkedin.com" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "www.linkedin.com" && url.pathname === "/safety/go" ) {
				return extractQueryPairAsUrl(url.searchParams, "url");
			}
		}
	};
});
