registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "callback";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "bilibili.com" || url.hostname === "www.bilibili.com" ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
