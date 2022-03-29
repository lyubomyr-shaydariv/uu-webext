registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !==  "c_id" && k !==  "campaign_id" && k !==  "cmpid" && k !==  "mbid" && k !==  "ncid";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
