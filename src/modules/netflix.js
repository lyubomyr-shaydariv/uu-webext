addRule((function() {
	const filter = createFilterByConstantKeys("tctx", "trackId");
	return {
		redirect: function(url) {
			if ( url.hostname === "netflix.com" || url.hostname.endsWith(".netflix.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
