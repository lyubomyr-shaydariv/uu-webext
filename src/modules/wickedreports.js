addRule((function() {
	function filter(k, vs) {
		return k !== "wickedid";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
