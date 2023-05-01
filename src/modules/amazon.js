registerModule(function() {
	function filter(k, vs) {
		return k !== "_encoding" && k !== "ascsubtag" && k !== "pd_rd_*" && k !== "pf" && k !== "pf_rd_*" && k !== "psc" && k !== "ref_" && k !== "tag";
	};
	const domainRx = /^(?:[^.]+\.)?amazon\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	const keysToRemove = ["trk", "trkCampaign"];
	return {
		redirect: function(url) {
			cleanAllSearchAndHashPairs(url, [...keysToRemove]);
		}
	};
});
