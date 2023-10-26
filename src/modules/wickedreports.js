addRule((function() {
	const filter = createFilterByConstantKeys("wickedid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
