import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('github.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('email_source', 'email_token'),
	RULE()
		.AT().DOMAIN('github-redirect.dependabot.com')
		.FROM().PATHNAME()
		.APPLY().REPLACE_STRING('/', 'https://github.com/').TO_URL()
		.DO().REDIRECT()
];
