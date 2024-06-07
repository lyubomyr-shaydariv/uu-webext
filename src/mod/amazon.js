import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('trk', 'trkCampaign'),
	RULE()
		.AT().HOSTNAME(/^www.amazon.(ac|ca|cn|com|co\.jp|co\.uk|de|eg|es|fr|in|it|nl|pl|sg)$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_encoding', 'aaxitk', 'ascsubtag', 'camp', 'content-id', 'creative', 'creativeASIN', 'crid', 'dchild', 'field-lbr_brands_browse-bin', 'hsa_cr_id', 'keywords', 'linkCode', 'ms3_c', 'pd_rd_r', 'pd_rd_w', 'pd_rd_wg', 'pf_rd_i', 'pf_rd_m', 'pf_rd_p', 'pf_rd_r', 'pf_rd_s', 'pf_rd_t', 'pf', 'pf_rd_i', 'pf_rd_m', 'pf_rd_p', 'pf_rd_r', 'pf_rd_s', 'pf_rd_t', 'psc', 'qid', 'qualifier', 'ref_', 'refRID', 'rnid', 's', 'smid', 'spIA', 'sprefix', 'sr', 'tag', 'th')
];
