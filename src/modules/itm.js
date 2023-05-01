addRule((function() {
	function filter(k, vs) {
		return k !== "itm_campaign" && k !== "itm_medium" && k !== "itm_source" && k !== "itm_content" && k !== "itm_term";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
