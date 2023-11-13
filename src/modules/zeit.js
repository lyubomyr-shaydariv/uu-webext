addRule((function() {
	const filter = EXCLUDE("wt_mc", "wt_zmc");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
