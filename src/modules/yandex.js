import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("lr", "redircnt"),
		__.AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yandex\.[^.]+$/)
	),
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("yclid", "_openstat")
	)
];
