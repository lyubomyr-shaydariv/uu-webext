import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('elqTrack', 'elqTrackId'),
	RULE() // how broad is this rule?
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('assetId', 'assetType', 'campaignId', 'recipientId', 'siteId')
];
