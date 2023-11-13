addRule((function() {
	const filter = EXCLUDE_BY_STARTS_WITH("ns_");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
