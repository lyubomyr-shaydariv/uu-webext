addRule((function() {
	const filter = EXCLUDE("guccounter");
	return {
		redirect: function(url) {
			if ( /^(?:[^.]+\.)?yahoo\.[^.]+$/.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("soc_src", "soc_trk");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
