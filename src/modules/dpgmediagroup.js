addRule((function() {
	function filter(k, vs) {
		return !k.startsWith("dpg_");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
