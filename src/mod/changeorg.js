import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('change.org')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('guest', 'recruited_by_id', 'recruiter', 'short_display_name', 'source_location')
];
