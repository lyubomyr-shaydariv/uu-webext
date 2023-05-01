registerModule(function() {
	function filter(k, v) {
		return k !== "_hsenc" && k !== "_hsmi" && k !== "__hsfp" && k !== "__hssc" && k !== "__hstc" && k !== "hsCtaTracking";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
