import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('songkick.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('deep_link_campaign', 'deep_link_medium', 'deep_link_source')
];
