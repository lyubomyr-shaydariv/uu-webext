import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING_BY_STARTS_WITH("stm_")
));
