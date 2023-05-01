registerModule(function() {
	function filter(k, v) {
		return k !== "itm_campaign" && k !== "itm_medium" && k !== "itm_source" && k !== "itm_content" && k !== "itm_term";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
