registerModule(function() {
	const utmParameters = [
		"utm_campaign",
		"utm_cid",
		"utm_content",
		"utm_medium",
		"utm_name",
		"utm_reader",
		"utm_referrer",
		"utm_source",
		"utm_term"
	];
	return {
		redirect: function(url) {
			for ( const utmParameter of utmParameters ) {
				url.searchParams.delete(utmParameter);
			}
		}
	};
});
