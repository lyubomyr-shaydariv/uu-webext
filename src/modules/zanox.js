addRule((function() {
	const filter = createFilterByConstantKeys("zanpid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
