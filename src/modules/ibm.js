addRule((function() {
	const filter = EXCLUDE("spJobID", "spMailingID", "spReportId", "spUserID");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
