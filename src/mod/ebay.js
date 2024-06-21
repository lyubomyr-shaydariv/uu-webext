import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().QUERY_ENTRIES_HAVING_ALL_OF('campid', 'customid', 'mkcid', 'mkevt', 'mkrid', 'toolid')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('campid', 'customid', 'mkcid', 'mkevt', 'mkrid', 'toolid'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?ebay(?:\.[a-z]+)?\.[a-z]+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_from', '_trkparms', '_trksid', 'amdata', 'epid', 'hash', 'var'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?ebay(?:\.[a-z]+)?\.[a-z]+$/).PATHNAME_PREFIX('/itm/')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE(/^.*$/)
];
