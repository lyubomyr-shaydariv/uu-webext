registerModule(function() {
	function filter(k, vs) {
		return k !== "algo_expid" && k !== "algo_pvid" && k !== "btsid" && k !== "expid" && k !== "initiative_id" && k !== "scm_id" && k !== "spm" && k !== "ws_ab_test";
	};
	const domainRx = /^(?:[^.]+\.)?aliexpress\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
registerModule(function() {
	function filter(k, vs) {
		return k !== "aff_platform" && k !== "aff_trace_key";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
