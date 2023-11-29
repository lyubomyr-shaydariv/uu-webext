import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('callback', 'spm_id_from'),
		AT.DOMAIN('bilibili.com')
	)
];
