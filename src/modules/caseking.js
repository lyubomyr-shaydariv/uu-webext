addRule((function() {
	const filter = createFilterByConstantKeys("campaign", "sPartner");
	return {
		redirect: function(url) {
			if ( url.hostname === "caseking.de" || url.hostname.endsWith(".caseking.de") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
