import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING("itm_campaign", "itm_medium", "itm_source", "itm_content", "itm_term")
));
