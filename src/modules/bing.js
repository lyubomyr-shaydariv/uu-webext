import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("cvid", "form", "pq", "qs", "qp", "sc", "sk", "sp"),
	__.AT.DOMAIN("bing.com")
));
