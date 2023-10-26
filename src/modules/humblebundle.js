addRule((function() {
	const filter = createFilterByConstantKeys("hmb_campaign", "hmb_medium", "hmb_source");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
