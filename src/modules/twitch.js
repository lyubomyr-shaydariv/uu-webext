addRule((function() {
	function filter(k, vs) {
		return k !== "tt_content" && k !== "tt_medium";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
