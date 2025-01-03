import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME(/^(?:[a-z].\.)?eventbrite(?:\.[a-z]+)*$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('aff', 'can_id', 'email_referrer', 'email_subject', 'link_id', 'ref', 'source')
];
