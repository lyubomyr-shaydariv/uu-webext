import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("guccounter"),
	__.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yahoo\.[^.]+$/)
));

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING("soc_src", "soc_trk")
));
