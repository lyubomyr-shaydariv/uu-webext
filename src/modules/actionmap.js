import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("action_object_map", "action_ref_map", "action_type_map")
	)
];
