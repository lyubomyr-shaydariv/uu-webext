addRule((function() {
	function filter(k, vs) {
		return !k.startsWith("mtm_") && !k.startsWith("pk_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
