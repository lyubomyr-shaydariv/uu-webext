import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('static.teams.cdn.office.net').PATHNAME('/evergreen-assets/safelinks/1/atp-safelinks.html')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
