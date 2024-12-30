import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('click.icptrack.com').PATHNAME('/icp/relay.php')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('destination').TO_URL()
		.DO().REDIRECT()
];
