registerModule(function() {
	function filter(k, vs) {
		return k !== "hmb_campaign" && k !== "hmb_medium" && k !== "hmb_source";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
