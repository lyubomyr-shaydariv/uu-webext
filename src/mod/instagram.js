import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('igshid', 'ig_cache_key', 'ig_mid', 'ig_rid', 'ig_share_sheet'),
	RULE()
		.AT().DOMAIN('instagram.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL(),
	RULE()
		.AT().DOMAIN('l.instagram.com')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];
