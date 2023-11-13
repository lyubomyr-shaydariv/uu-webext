addRule((function() {
	const at = AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?ebay\.[^.]+$/);
	const filter = EXCLUDE("_from", "_trkparms", "_trksid", "amdata", "epid", "hash", "var");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
