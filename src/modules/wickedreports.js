registerModule(function() {
	function filter(k, v) {
		return k !== "wickedid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
