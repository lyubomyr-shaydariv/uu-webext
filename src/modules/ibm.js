registerModule(function() {
	function filter(k, v) {
		return k !== "spJobID" && k !== "spMailingID" && k !== "spReportId" && k !== "spUserID";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
