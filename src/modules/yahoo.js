addRule((function() {
	const filter = createFilterByConstantKeys("guccounter");
	const domainRx = /^(?:[^.]+\.)?yahoo\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = createFilterByConstantKeys("soc_src", "soc_trk");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
