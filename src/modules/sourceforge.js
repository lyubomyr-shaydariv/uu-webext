import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("position", "source"),
	__.AT_DOMAIN("sourceforge.net")
));
