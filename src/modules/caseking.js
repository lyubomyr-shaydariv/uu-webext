addRule((function() {
	const filter = EXCLUDE("campaign", "sPartner");
	return {
		redirect: function(url) {
			if ( url.hostname === "caseking.de" || url.hostname.endsWith(".caseking.de") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
