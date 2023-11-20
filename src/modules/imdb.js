import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.AND(
		__.EXCLUDING("ref_"),
		__.EXCLUDING_BY_STARTS_WITH("pf_rd_")
	),
	__.AT_DOMAIN("imdb.com")
));
