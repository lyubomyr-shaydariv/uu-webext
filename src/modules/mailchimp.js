addRule((function() {
	function filter(k, vs) {
		return k !== "mc_cid" && k !== "mc_eid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
