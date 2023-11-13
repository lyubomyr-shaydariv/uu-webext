addRule((function() {
	const at = AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?amazon\.[^.]+$/);
	const filter = EXCLUDE("_encoding", "aaxitk", "ascsubtag", "camp", "creative", "creativeASIN", "crid", "dchild", "field-lbr_brands_browse-bin", "hsa_cr_id", "keywords", "linkCode", "ms3_c", "pf_rd_i", "pf_rd_m", "pf_rd_p", "pf_rd_r", "pf_rd_s", "pf_rd_t", "pf", "pf_rd_i", "pf_rd_m", "pf_rd_p", "pf_rd_r", "pf_rd_s", "pf_rd_t", "psc", "qid", "qualifier", "ref_", "refRID", "rnid", "s", "smid", "spIA", "sprefix", "tag", "th");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
addRule((function() {
	const filter = EXCLUDE("trk", "trkCampaign");
	return {
		redirect: function(url) {
			FILTER_ENTRIES(url, filter);
		}
	};
})());
