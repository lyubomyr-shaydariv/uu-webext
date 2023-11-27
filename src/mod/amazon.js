import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING("_encoding", "aaxitk", "ascsubtag", "camp", "content-id", "creative", "creativeASIN", "crid", "dchild", "field-lbr_brands_browse-bin", "hsa_cr_id", "keywords", "linkCode", "ms3_c", "pd_rd_r", "pd_rd_w", "pd_rd_wg", "pf_rd_i", "pf_rd_m", "pf_rd_p", "pf_rd_r", "pf_rd_s", "pf_rd_t", "pf", "pf_rd_i", "pf_rd_m", "pf_rd_p", "pf_rd_r", "pf_rd_s", "pf_rd_t", "psc", "qid", "qualifier", "ref_", "refRID", "rnid", "s", "smid", "spIA", "sprefix", "sr", "tag", "th"),
		AT.HOSTNAME_BY_REGEXP(/^www.amazon.(ac|ca|cn|com|co\.jp|co\.uk|de|eg|es|fr|in|it|nl|pl|sg)$/)
	),
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("trk", "trkCampaign")
	)
];
