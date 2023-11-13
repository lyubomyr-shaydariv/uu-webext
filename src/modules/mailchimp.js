addRule((function() {
	const filter = EXCLUDE("mc_cid", "mc_eid");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
