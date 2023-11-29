import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('guest', 'recruited_by_id', 'recruiter', 'short_display_name', 'source_location'),
		AT.DOMAIN('change.org')
	)
];
