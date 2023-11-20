import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.AND(
		__.EXCLUDING("at_campaign", "at_medium"),
		__.EXCLUDING_BY_STARTS_WITH("at_custom")
	)
));
