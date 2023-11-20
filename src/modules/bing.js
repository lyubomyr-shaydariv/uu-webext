import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("cvid", "form", "pq", "qs", "qp", "sc", "sk", "sp"),
	__.AT_DOMAIN("bing.com")
));
