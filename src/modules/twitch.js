addRule((function() {
	const filter = EXCLUDE("tt_content", "tt_medium");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
