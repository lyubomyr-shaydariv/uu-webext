registerModule(function() {
	function filter(k, v) {
		return k !== "mc_cid" && k !== "mc_eid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
