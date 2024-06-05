import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().DOMAIN('reddit.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('$3p', '$deep_link', '$original_link', '_branch_match_id', 'correlation_id', 'rdt', 'ref_campaign', 'ref_source'),
	RULE()
		.AT().HOSTNAME('out.reddit.com').PATHNAME(/^\/[^/]+$/)
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().HOSTNAME('click.redditmail.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
