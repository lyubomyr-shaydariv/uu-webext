addRule((function() {
	const filter = EXCLUDE("spJobID", "spMailingID", "spReportId", "spUserID");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
