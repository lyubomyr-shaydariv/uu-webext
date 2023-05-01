addRule((function() {
	function filter(k, vs) {
		return !k.startsWith("ns_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
