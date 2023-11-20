import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.REDIRECT_AT(
	__.OP.PIPE(
		{
			onError: __.BLOCK.CONFIRM
		},
		__.MAP.EXTRACT_SEARCH_PARAMS(),
		__.MAP.PROPERTY_AT("q"),
		__.MAP.TO_URL()
	),
	__.OP.AND(
		__.AT.DOMAIN("google.com"),
		__.AT.PATHNAME("/url/")
	)
));

registry.addRule(__.RULE.REDIRECT_AT(
	__.OP.PIPE(
		{
			onError: __.BLOCK.CONFIRM
		},
		__.MAP.EXTRACT_PATHNAME(),
		__.MAP.SUBSTRING(7), // "/amp/s/".length
		__.MAP.TO_URL()
	),
	__.OP.AND(
		__.AT.DOMAIN("google.com"),
		__.AT.PATHNAME_BY_STARTS_WITH("/amp/s/")
	)
));

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("ei", "gs_gbg", "gs_lcp", "gs_mss", "gs_rn", "gws_rd", "sei", "ved"),
	__.AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?google\.[^.]+$/)
));

registry.addRule(__.RULE.MUTATE_ENTRIES(
	__.OP.AND(
		__.JUST.EXCLUDING("_ga", "dclid", "gclid", "gclsrc", "gs_l"),
		__.JUST.EXCLUDING_BY_STARTS_WITH("ga_")
	)
));
