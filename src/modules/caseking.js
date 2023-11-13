addRule((function() {
	const filter = EXCLUDE("campaign", "sPartner");
	return {
		redirect: function(url) {
			if ( url.hostname === "caseking.de" || url.hostname.endsWith(".caseking.de") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
