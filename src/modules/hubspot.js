addRule((function() {
	const filter = createFilterByConstantKeys("_hsenc", "_hsmi", "__hsfp", "__hssc", "__hstc", "hsCtaTracking");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
