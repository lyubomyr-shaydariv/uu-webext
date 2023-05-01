registerModule(function() {
	function filter(k, v) {
		return k !== "at_campaign" && k !== "at_medium" && !k.startsWith("at_custom");
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
