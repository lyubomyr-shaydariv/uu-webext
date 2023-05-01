registerModule(function() {
	function filter(k, v) {
		return k !== "wt_mc" && k !== "wt_zmc";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
