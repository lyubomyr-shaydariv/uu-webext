import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?ebay(?:\.[a-z]+)?\.[a-z]+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_from', '_trkparms', '_trksid', 'amdata', 'epid', 'hash', 'var')
];
