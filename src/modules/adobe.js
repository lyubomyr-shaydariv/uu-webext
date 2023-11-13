addRule((function() {
	const filter = EXCLUDE("sc_cid", "mkt_tok", "s_cid");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
