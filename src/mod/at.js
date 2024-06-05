import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('at_campaign', /^at_custom.*/, 'at_medium')
];
