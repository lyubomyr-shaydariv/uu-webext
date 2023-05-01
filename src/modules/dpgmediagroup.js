registerModule(function() {
	function filter(k, v) {
		return !k.startsWith("dpg_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
