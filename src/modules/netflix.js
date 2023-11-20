import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("tctx", "trackId"),
	__.AT.DOMAIN("netflix.com")
));
