import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('trk', 'trkCampaign'),
	RULE()
		.AT().TLD('amazon')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('_encoding', /^__mk_[a-zA-Z]{1,3}_[a-zA-Z]{1,3}$/, 'aaxitk', 'adgrpid', 'ascsubtag', 'camp', 'colid', 'coliid', 'content-id', 'creative', 'creativeASIN', 'crid', /^cv_ct_[a-z]+$/, 'dchild', 'dib', 'dib_tag', /^field[-_]lbr[-_]brands[-_]browse[-_]bin$/, 'hsa_cr_id', 'hvadid', 'hvbmt', 'hvdev', 'hvdvcmdl', 'hvlocint', 'hvlocphy', 'hvnetw', 'hvpone', 'hvpos', 'hvptwo', 'hvrand', 'hvtargid', 'hydadcr', 'ingress', 'initialIssue', 'keywords', 'linkCode', 'linkId', 'lp_asins', 'lp_query', 'lp_slot', 'ms3_c', 'nc2', 'nc1', 'qu', /^pd_rd_[a-z]+$/, 'pf', /^pf_rd_[a-z]+$/, 'plattr', 'psc', 'qid', 'qualifier', 'rdc', 'ref', 'refRID', 'ref_', 'rnid', 's', /^sb-ci-[a-z]+$/, 'sbo', 'sc_campaign', 'sc_channel', 'sc_country', 'sc_geo', 'sc_icampaign', 'sc_ichannel', 'sc_icontent', 'sc_iplace', 'sc_outcome', 'skipTwisterOG', 'smid', 'social_share', 'spIA', 'spLa', 'sp_csd', 'sprefix', 's_prefix', 'sr', 'srs', 'starsLeft', 'store_ref', 'tag', 'th', 'ts_id', 'ufe', 'visitId', 'vtr'),
	RULE()
		.AT().TLD('amazon').PATHNAME('/gp/redirect.html')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('location').TO_URL()
		.DO().REDIRECT()
];
