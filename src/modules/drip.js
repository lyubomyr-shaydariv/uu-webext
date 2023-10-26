addRule((function() {
	const filter = createFilterByConstantKeys("__s");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
