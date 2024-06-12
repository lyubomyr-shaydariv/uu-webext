import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('static.teams.cdn.office.net').PATHNAME('/evergreen-assets/safelinks/1/atp-safelinks.html')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
