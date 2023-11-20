import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING("sc_campaign", "sc_channel", "sc_content", "sc_country", "sc_geo", "sc_medium", "sc_outcome")
));
