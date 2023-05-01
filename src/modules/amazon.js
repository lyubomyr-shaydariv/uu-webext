registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "_encoding" && k !== "ascsubtag" && k !== "pd_rd_*" && k !== "pf" && k !== "pf_rd_*" && k !== "psc" && k !== "ref_" && k !== "tag";
	};
	const domainRx = /^(?:[^.]+\.)?amazon\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				url.search = removeSearchPair(url.search, isSafeKeyPair);
				url.hash = removeHashPair(url.hash, isSafeKeyPair);
			}
		}
	};
});
