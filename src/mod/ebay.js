import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('_from', '_trkparms', '_trksid', 'amdata', 'epid', 'hash', 'var'),
		AT.HOSTNAME(/^(?:[^.]+\.)?ebay\.[^.]+$/)
	)
];
