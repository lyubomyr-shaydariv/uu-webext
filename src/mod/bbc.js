import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bbc.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('facebook_page', 'ns_campaign', 'ns_fee', 'ns_mchannel', 'ns_linkname', 'ns_source', 'ocid', 'xtor', /^at_[a-z_]+/)
];
