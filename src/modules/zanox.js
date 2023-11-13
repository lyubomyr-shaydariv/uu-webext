addRule((function() {
	const filter = EXCLUDE("zanpid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
