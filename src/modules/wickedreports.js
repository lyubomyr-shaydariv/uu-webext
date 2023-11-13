addRule((function() {
	const filter = EXCLUDE("wickedid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
