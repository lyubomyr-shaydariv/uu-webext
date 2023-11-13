addRule((function() {
	const filter = EXCLUDE("feature", "kw", "si");
	return {
		redirect: function(url) {
			if ( url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("si");
	return {
		redirect: function(url) {
			if ( url.hostname === "youtu.be" ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	return {
		redirect: function(url) {
			if ( (url.hostname === "youtube.com" || url.hostname.endsWith(".youtube.com")) && url.pathname === "/redirect" ) {
				return extractQueryPairAsUrl(url.searchParams, "q");
			}
		}
	};
})());
