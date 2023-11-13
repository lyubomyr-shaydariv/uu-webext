addRule((function() {
	const filter = EXCLUDE("wickedid");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
