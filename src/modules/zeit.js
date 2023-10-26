addRule((function() {
	const filter = createFilterByConstantKeys("wt_mc", "wt_zmc");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
