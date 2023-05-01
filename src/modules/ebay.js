registerModule(function() {
	function filter(k, vs) {
		return k !== "_trkparms" && k !== "_trksid" && k !== "amdata" && k !== "epid" && k !== "hash" && k !== "var";
	};
	const domainRx = /^(?:[^.]+\.)?ebay\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
