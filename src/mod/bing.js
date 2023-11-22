import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING("cvid", "form", "pq", "qs", "qp", "sc", "sk", "sp"),
		AT.DOMAIN("bing.com")
	)
];
