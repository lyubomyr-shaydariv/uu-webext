import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("guccounter"),
	__.AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?yahoo\.[^.]+$/)
));

registry.addRule(__.RULE.MUTATE_ENTRIES(
	__.JUST.EXCLUDING("soc_src", "soc_trk")
));
