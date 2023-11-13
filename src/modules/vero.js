addRule((function() {
	const filter = EXCLUDE("vero_conv", "vero_id");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
