registerModule(function() {
	function filter(k, vs) {
		return k !== "campaign" && k !== "sPartner";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "caseking.de" || url.hostname.endsWith(".caseking.de") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
