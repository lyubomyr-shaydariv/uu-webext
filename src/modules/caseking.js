addRule((function() {
	const at = AT_DOMAIN("caseking.de");
	const filter = EXCLUDE("campaign", "sPartner");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
