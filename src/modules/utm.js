registerModule(function() {
	const urlParameters = new Set([["utm_campaign", "utm_cid", "utm_content", "utm_medium", "utm_name", "utm_reader", "utm_referrer", "utm_source", "utm_term"]]);
	return {
		redirect: function(url) {
			url.search = parseSearchFromUrl(url)
				.filter(e => !urlParameters.has(e[0]))
				.reduce(toSearchForUrl(), "");
			url.hash = parseHashFromUrl(url)
				.filter(e => !urlParameters.has(e[0]))
				.reduce(toHashForUrl(), "");
		}
	};
});
