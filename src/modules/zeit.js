addRule((function() {
	const filter = EXCLUDE("wt_mc", "wt_zmc");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
