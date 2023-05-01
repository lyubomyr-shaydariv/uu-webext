addRule((function() {
	function filter(k, vs) {
		return k !== "sc_campaign" && k !== "sc_channel" && k !== "sc_content" && k !== "sc_country" && k !== "sc_geo" && k !== "sc_medium" && k !== "sc_outcome";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
