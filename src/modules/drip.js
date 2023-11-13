addRule((function() {
	const filter = EXCLUDE("__s");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
