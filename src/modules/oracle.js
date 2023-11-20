import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING("elqTrack", "elqTrackId")
));

registry.addRule(__.RULE_MUTATE_ENTRIES(
	__.EXCLUDING("assetId", "assetType", "campaignId", "recipientId", "siteId")
));
