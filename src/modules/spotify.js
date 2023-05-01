registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "context" && k !== "si";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "open.spotify.com" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
