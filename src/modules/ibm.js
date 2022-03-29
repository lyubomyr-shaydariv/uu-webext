registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "spJobID" && k !== "spMailingID" && k !== "spReportId" && k !== "spUserID";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
