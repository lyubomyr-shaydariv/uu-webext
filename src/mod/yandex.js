import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('lr', 'redircnt'),
		AT.HOSTNAME(/^(?:[^.]+\.)?yandex\.[^.]+$/)
	),
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('yclid', '_openstat')
	)
];
