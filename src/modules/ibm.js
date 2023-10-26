addRule((function() {
	const filter = createFilterByConstantKeys("spJobID", "spMailingID", "spReportId", "spUserID");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
