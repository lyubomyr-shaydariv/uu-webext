import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('change.org')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('guest', 'psf_variant', 'recruited_by_id', 'recruiter', 'share_intent', 'short_display_name', 'source_location')
];
