import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('brave-campaign-id', 'brave-creative-id', 'brave-creative-set-id')
];
