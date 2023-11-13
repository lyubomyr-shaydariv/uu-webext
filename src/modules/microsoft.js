addRule((function() {
	const filter = EXCLUDE("msclkid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
