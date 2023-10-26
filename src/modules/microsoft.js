addRule((function() {
	const filter = createFilterByConstantKeys("msclkid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
