import { RULE } from '/rules.js';

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
		.AT().DOMAIN('redd.it')
		.FROM().PATHNAME()
		.APPLY().GET_PROPERTY(0).REPLACE_STRING(/(.*)/, 'https://www.reddit.com/tb/$1').TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().HOSTNAME('click.redditmail.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
