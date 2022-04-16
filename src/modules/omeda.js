registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "oly_anon_id" && k !== "oly_enc_id";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
