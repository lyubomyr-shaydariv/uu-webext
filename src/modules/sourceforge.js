registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "position" && k !== "source";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "sourceforge.net" || url.hostname === "www.sourceforge.net" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
