import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING('c_id', 'campaign_id', 'cmpid', 'mbid', 'ncid', 'rb_clickid', 's_cid', 'var', 'ymid')
	)
];
