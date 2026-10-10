import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('mozilla.org')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('as', 'platform', 'redirect_source', 'src'),
	RULE()
		.AT().DOMAIN('firefox.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('entrypoint', 'form_type'),
	RULE()
		.AT().DOMAIN('mozillazine.org')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('sid'),
	RULE()
		.AT().HOSTNAME('outgoing.prod.mozaws.net', 'prod.outgoing.prod.webservices.mozgcp.net')
		.FROM().PATHNAME()
		.APPLY().FROM_URI_COMPONENT().EXECUTE_REGEXP(/^\/v[^/]+\/[0-9a-f]+\/(.*)$/).GET_PROPERTY(1).TO_URL()
		.DO().REDIRECT()
];
