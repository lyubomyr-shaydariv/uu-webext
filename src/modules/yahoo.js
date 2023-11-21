import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("guccounter"),
		__.AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yahoo\.[^.]+$/)
	),
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("soc_src", "soc_trk")
	)
];
