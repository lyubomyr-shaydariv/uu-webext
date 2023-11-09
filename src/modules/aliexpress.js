addRule((function() {
	const filter = createFilterByConstantKeys("af", "aff_request_id", "algo_expid", "algo_pvid", "btsid", "cv", "dp", "expid", "gps-id", "initiative_id", "mall_affr", "scm_id", "sk", "spm", "terminal_id", "ws_ab_test");
	const domainRx = /^(?:[^.]+\.)?aliexpress\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	function filter(k, vs) {
		return k !== "aff_platform" && k !== "aff_trace_key";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
