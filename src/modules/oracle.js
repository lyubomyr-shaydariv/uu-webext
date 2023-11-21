import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("elqTrack", "elqTrackId")
	),
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("assetId", "assetType", "campaignId", "recipientId", "siteId")
	)
];
