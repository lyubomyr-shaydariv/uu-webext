registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "sc_campaign" && k !== "sc_channel" && k !== "sc_content" && k !== "sc_country" && k !== "sc_geo" && k !== "sc_medium" && k !== "sc_outcome";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
