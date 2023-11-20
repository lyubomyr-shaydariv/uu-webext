import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES(
	__.JUST.EXCLUDING("sc_cid", "mkt_tok", "s_cid")
));
