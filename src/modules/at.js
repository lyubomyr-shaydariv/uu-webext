addRule((function() {
	const filter = AND(
		EXCLUDE("at_campaign", "at_medium"),
		EXCLUDE_BY_STARTS_WITH("at_custom")
	);
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
