registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "algo_expid" && k !== "algo_pvid" && k !== "btsid" && k !== "expid" && k !== "initiative_id" && k !== "scm_id" && k !== "spm" && k !== "ws_ab_test";
	};
	const domainRx = /^(?:[^.]+\.)?aliexpress\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "aff_platform" && k !== "aff_trace_key";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
