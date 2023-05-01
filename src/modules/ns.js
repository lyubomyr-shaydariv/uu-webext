registerModule(function() {
	function filter(k, v) {
		return !k.startsWith("ns_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
