import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('meetup.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('eventOrigin', 'recId', 'recSource', 'searchId')
];
