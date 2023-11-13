addRule((function() {
	const filter = EXCLUDE_BY_STARTS_WITH("mtm_", "pk_");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
