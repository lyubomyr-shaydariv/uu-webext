addRule((function() {
	function filter(k, vs) {
		return k !== "__s";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
