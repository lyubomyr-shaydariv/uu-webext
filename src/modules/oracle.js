import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("elqTrack", "elqTrackId")
	),
	__.RULE.MUTATE_ENTRIES(
		__.JUST.EXCLUDING("assetId", "assetType", "campaignId", "recipientId", "siteId")
	)
];
