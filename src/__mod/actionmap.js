import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('action_object_map', 'action_ref_map', 'action_type_map')
	)
];
