registerModule(function() {
	function filter(k, v) {
		return !k.startsWith("mtm_") && !k.startsWith("pk_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
