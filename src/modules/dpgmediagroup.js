addRule((function() {
	const filter = EXCLUDE_BY_STARTS_WITH("dpg_");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
