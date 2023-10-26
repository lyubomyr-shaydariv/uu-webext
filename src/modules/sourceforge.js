addRule((function() {
	const filter = createFilterByConstantKeys("position", "source");
	return {
		redirect: function(url) {
			if ( url.hostname === "sourceforge.net" || url.hostname.endsWith(".sourceforge.net") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
