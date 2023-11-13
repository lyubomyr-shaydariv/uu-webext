addRule((function() {
	const filter = EXCLUDE("mc_cid", "mc_eid");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
