import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES(
	__.JUST.EXCLUDING("c_id", "campaign_id", "cmpid", "mbid", "ncid", "rb_clickid")
));
