import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('trk', 'trkCampaign'),
	RULE()
		.AT().HOSTNAME(/^(www\.)?amazon.(ac|ca|cn|com|co\.jp|co\.uk|de|eg|es|fr|in|it|nl|pl|sg)$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('_encoding', '__mk_de_DE', 'aaxitk', 'adgrpid', 'ascsubtag', 'camp', 'colid', 'coliid', 'content-id', 'creative', 'creativeASIN', 'crid', 'dchild', 'dib', 'dib_tag', 'field-lbr_brands_browse-bin', 'hsa_cr_id', 'hvadid', 'hvbmt', 'hvdev', 'hvdvcmdl', 'hvlocint', 'hvlocphy', 'hvnetw', 'hvpone', 'hvpos', 'hvptwo', 'hvrand', 'hvtargid', 'hydadcr', 'ingress', 'initialIssue', 'keywords', 'linkCode', 'linkId', 'lp_asins', 'lp_query', 'lp_slot', 'ms3_c', 'nc2', 'nc1', 'qu', 'pd_rd_i', 'pd_rd_plhdr', 'pd_rd_r', 'pd_rd_w', 'pd_rd_wg', 'pf', 'pf_rd_i', 'pf_rd_m', 'pf_rd_p', 'pf_rd_r', 'pf_rd_s', 'pf_rd_t', 'pf_rd_w', 'plattr', 'psc', 'qid', 'qualifier', 'rdc', 'ref', 'refRID', 'ref_', 'rnid', 's', 'sbo', 'sc_campaign', 'sc_channel', 'sc_country', 'sc_geo', 'sc_icampaign', 'sc_ichannel', 'sc_icontent', 'sc_iplace', 'sc_outcome', 'smid', 'social_share', 'spIA', 'spLa', 'sp_csd', 'sprefix', 's_prefix', 'sr', 'store_ref', 'tag', 'th', 'ts_id', 'ufe', 'visitId', 'vtr'),
	RULE()
		.AT().HOSTNAME(/^(www\.)?amazon.(ac|ca|cn|com|co\.jp|co\.uk|de|eg|es|fr|in|it|nl|pl|sg)$/).PATHNAME('/gp/redirect.html')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('location').TO_URL()
		.DO().REDIRECT()
];
