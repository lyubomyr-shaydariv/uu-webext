import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('outgoing.prod.mozaws.net', 'prod.outgoing.prod.webservices.mozgcp.net')
		.FROM().PATHNAME()
		.APPLY().FROM_URI_COMPONENT().EXECUTE_REGEXP(/^\/v[^/]+\/[0-9a-f]+\/(.*)$/).GET_PROPERTY(1).TO_URL()
		.DO().REDIRECT()
];
