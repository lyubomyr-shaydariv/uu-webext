registerModule(function() {
	function filter(k, v) {
		return !k.startsWith("stm_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
