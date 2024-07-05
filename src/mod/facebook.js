import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('fbclid', 'fb_action_ids', 'fb_action_types', 'fb_comment_id', 'fb_ref', 'fb_source'),
	RULE()
		.AT().DOMAIN('facebook.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('fref', 'hrc', 'refsrc'),
	RULE()
		.AT().DOMAIN('facebook.com').PATHNAME('/l.php', '/flx/warn/')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];
