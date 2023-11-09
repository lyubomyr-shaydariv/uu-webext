addRule((function() {
	const filter = createFilterByConstantKeys("_encoding", "aaxitk", "ascsubtag", "camp", "creative", "creativeASIN", "crid", "dchild", "field-lbr_brands_browse-bin", "hsa_cr_id", "keywords", "linkCode", "ms3_c", "pd_rd_*", "pf", "pf_rd_*", "psc", "qid", "qualifier", "ref_", "refRID", "rnid", "s", "smid", "spIA", "sprefix", "tag", "th");
	const domainRx = /^(?:[^.]+\.)?amazon\.[^.]+$/;
	return {
		redirect: function(url) {
			if ( domainRx.test(url.hostname) ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
addRule((function() {
	const keysToRemove = ["trk", "trkCampaign"];
	return {
		redirect: function(url) {
			cleanAllSearchAndHashPairs(url, [...keysToRemove]);
		}
	};
})());
