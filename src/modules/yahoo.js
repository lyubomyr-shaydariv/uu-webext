registerModule(function() {
	function filter(k, v) {
		return k !== "guccounter";
	};
	const domainRx = /^(?:[^.]+\.)?yahoo\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	function filter(k, v) {
		return k !== "soc_src" && k !== "soc_trk";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
