import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('elq', 'elqat', 'elqaid', 'elqCampaignId', 'elqTrack', 'elqTrackId'),
	// how broad is this rule?
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('assetId', 'assetType', 'campaignId', 'recipientId', 'siteId')
];
