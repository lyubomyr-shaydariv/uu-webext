import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('fbclid', 'fb_action_ids', 'fb_action_types', 'fb_ref', 'fb_source'),
	RULE()
		.AT().DOMAIN('facebook.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('hrc', 'refsrc'),
	RULE()
		.AT().DOMAIN('facebook.com').PATHNAME('/l.php')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('u').TO_URL()
		.DO().REDIRECT()
];
