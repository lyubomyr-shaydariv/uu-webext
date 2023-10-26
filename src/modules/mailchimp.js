addRule((function() {
	const filter = createFilterByConstantKeys("mc_cid", "mc_eid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
