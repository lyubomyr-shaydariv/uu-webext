import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING("guccounter"),
		AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yahoo\.[^.]+$/)
	),
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("soc_src", "soc_trk")
	)
];
