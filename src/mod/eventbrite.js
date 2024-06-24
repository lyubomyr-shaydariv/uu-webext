import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().TLD('eventbrite')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('aff', 'can_id', 'email_referrer', 'email_subject', 'link_id', 'ref', 'source')
];
