import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('spJobID', 'spMailingID', 'spReportId', 'spUserID')
];
