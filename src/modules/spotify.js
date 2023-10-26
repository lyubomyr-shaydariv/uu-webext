addRule((function() {
	const filter = createFilterByConstantKeys("context", "si");
	return {
		redirect: function(url) {
			if ( url.hostname === "open.spotify.com" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
