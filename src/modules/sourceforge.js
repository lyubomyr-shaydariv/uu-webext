addRule((function() {
	const filter = EXCLUDE("position", "source");
	return {
		redirect: function(url) {
			if ( url.hostname === "sourceforge.net" || url.hostname.endsWith(".sourceforge.net") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
