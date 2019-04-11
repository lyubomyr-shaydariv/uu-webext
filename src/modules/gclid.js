registerModule(function() {
	const urlParameters = new Set(["gclid"]);
	return {
		redirect: function(url) {
			url.search = parseSearchFromUrl(url)
				.filter(e => !urlParameters.has(e[0]))
				.reduce(toSearchForUrl(), "");
		}
	};
});
