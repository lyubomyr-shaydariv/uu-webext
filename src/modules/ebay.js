addRule((function() {
	const filter = createFilterByConstantKeys("_from", "_trkparms", "_trksid", "amdata", "epid", "hash", "var");
	const domainRx = /^(?:[^.]+\.)?ebay\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
