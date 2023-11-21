import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("campaign", "sPartner"),
		__.AT.DOMAIN("caseking.de")
	)
];
