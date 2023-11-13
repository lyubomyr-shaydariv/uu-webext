addRule((function() {
	const filter = EXCLUDE("af", "aff_request_id", "algo_expid", "algo_pvid", "btsid", "cv", "dp", "expid", "gps-id", "initiative_id", "mall_affr", "scm_id", "sk", "spm", "terminal_id", "ws_ab_test");
	return {
		redirect: function(url) {
			if ( /^(?:[^.]+\.)?aliexpress\.[^.]+$/.test(url.hostname) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("aff_platform", "aff_trace_key");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
