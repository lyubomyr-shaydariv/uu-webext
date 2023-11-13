addRule((function() {
	const filter = EXCLUDE("_hsenc", "_hsmi", "__hsfp", "__hssc", "__hstc", "hsCtaTracking");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
