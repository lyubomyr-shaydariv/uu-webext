import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("c_id", "campaign_id", "cmpid", "mbid", "ncid", "rb_clickid")
	)
];
