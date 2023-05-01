addRule((function() {
	function filter(k, vs) {
		return k !== "at_campaign" && k !== "at_medium" && !k.startsWith("at_custom");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
