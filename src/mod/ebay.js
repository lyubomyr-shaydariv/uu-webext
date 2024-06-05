import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?ebay\.[^.]+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_from', '_trkparms', '_trksid', 'amdata', 'epid', 'hash', 'var')
];
