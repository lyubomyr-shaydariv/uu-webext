import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('ns_campaign', 'ns_fee', 'ns_linkname', 'ns_mchannel', 'ns_source')
];
