import { AT, JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('itm_campaign', 'itm_medium', 'itm_source', 'itm_term'),
		AT.DOMAIN('magento.com')
	)
];
