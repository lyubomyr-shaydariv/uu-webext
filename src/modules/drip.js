addRule((function() {
	const filter = EXCLUDE("__s");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
