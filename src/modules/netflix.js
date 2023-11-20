import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("tctx", "trackId"),
	__.AT_DOMAIN("netflix.com")
));
