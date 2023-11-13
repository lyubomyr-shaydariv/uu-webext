addRule((function() {
	const filter = EXCLUDE("_from", "_trkparms", "_trksid", "amdata", "epid", "hash", "var");
	return {
		redirect: function(url) {
			if ( /^(?:[^.]+\.)?ebay\.[^.]+$/.test(url.hostname) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
