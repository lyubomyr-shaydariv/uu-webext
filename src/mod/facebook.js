import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('fbclid', 'fb_action_ids', 'fb_action_types', 'fb_comment_id', 'fb_ref', 'fb_source'),
	RULE()
		.AT().DOMAIN('facebook.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('__cft__[0]', '__cft__%5B0%5D', 'extid', 'fref', 'hrc', 'mibextid', '__tn__', 'refsrc', 'sfnsn', 'tracking'),
	RULE()
		.AT().DOMAIN('facebook.com').PATHNAME('/l.php', '/flx/warn/')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];
