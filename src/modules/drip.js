registerModule(function() {
	function filter(k, v) {
		return k !== "__s";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
