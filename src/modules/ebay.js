registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "_trkparms" && k !== "_trksid" && k !== "amdata" && k !== "epid" && k !== "hash" && k !== "var";
	};
	const domainRx = /^(?:[^.]+\.)?ebay\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
