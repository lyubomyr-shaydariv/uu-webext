addRule((function() {
	const filter = createFilterByConstantKeys("vero_conv", "vero_id");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
