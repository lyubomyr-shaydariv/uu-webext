addRule((function() {
	const filter = EXCLUDE("zanpid");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
