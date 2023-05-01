registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "campaign" && k !== "sPartner";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "caseking.de" || url.hostname === "www.caseking.de" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
