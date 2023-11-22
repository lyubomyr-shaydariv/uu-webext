import { AT, BLOCK, JUST, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING("eBP", "lgCta", "lgTemp", "lipi", "midSig", "midToken", "recommendedFlavor", "refId", "trackingId", "trk", "trkEmail"),
		AT.DOMAIN("linkedin.com")
	),
	RULE.REDIRECT_AT(
		OP.PIPE(
			{onError: BLOCK.CONFIRM()},
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT("url"),
			MAP.TO_URL()
		),
		OP.AND(
			AT.DOMAIN("linkedin.com"),
			AT.PATHNAME("/safety/go")
		)
	)
];
