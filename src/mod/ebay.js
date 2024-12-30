import {ALL, PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().QUERY_ENTRY_KEYS(ALL('campid', 'customid', 'mkcid', 'mkevt', 'mkrid', 'toolid'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('campid', 'customid', 'mkcid', 'mkevt', 'mkrid', 'toolid'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?ebay(?:\.[a-z]+)?\.[a-z]+$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('_from', '_trkparms', '_trksid', 'amdata', 'epid', 'hash', 'var'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?ebay(?:\.[a-z]+)?\.[a-z]+$/).PATHNAME(PREFIX('/itm/'))
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL()
];
