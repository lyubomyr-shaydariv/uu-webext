import { AT, JUST, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.REDIRECT_AT(
		OP.PIPE(
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT('q'),
			MAP.TO_URL()
		),
		OP.AND(
			AT.DOMAIN('google.com'),
			AT.PATHNAME('/url/')
		)
	),
	RULE.REDIRECT_AT(
		OP.PIPE(
			MAP.EXTRACT_PATHNAME(),
			MAP.SUBSTRING(7), // '/amp/s/'.length
			MAP.TO_URL()
		),
		OP.AND(
			AT.DOMAIN('google.com'),
			AT.PATHNAME_BY_STARTS_WITH('/amp/s/')
		)
	),
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('ei', 'gs_gbg', 'gs_lcp', 'gs_mss', 'gs_rn', 'gws_rd', 'sei', 'ved'),
		AT.HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)*google(?:\.[^.]+)+$/)
	),
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('rd', 'ref_topic', 'sjid', 'visit_id'),
		AT.DOMAIN('support.google.com')
	),
	RULE.MUTATE_ENTRIES(
		OP.AND(
			JUST.EXCLUDING('_ga', 'dclid', 'gclid', 'gclsrc', 'gs_l', 'srsltid'),
			JUST.EXCLUDING_BY_STARTS_WITH('ga_')
		)
	)
];
