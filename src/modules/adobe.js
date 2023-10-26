addRule((function() {
	const filter = createFilterByConstantKeys("sc_cid", "mkt_tok", "s_cid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
