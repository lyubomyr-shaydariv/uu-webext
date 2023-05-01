registerModule(function() {
	function filter(k, v) {
		return k !== "tt_content" && k !== "tt_medium";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
