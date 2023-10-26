addRule((function() {
	const filter = createFilterByConstantKeys("tt_content", "tt_medium");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
