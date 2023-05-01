addRule((function() {
	function filter(k, vs) {
		return k !== "spJobID" && k !== "spMailingID" && k !== "spReportId" && k !== "spUserID";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
