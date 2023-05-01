registerModule(function() {
	function filter(k, v) {
		return k !== "campaign" && k !== "sPartner";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "caseking.de" || url.hostname === "www.caseking.de" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
