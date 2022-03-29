registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "_hsenc" && k !== "_hsmi" && k !== "__hssc" && k !== "__hstc" && k !== "hsCtaTracking";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
