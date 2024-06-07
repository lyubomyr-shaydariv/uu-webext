import { RULE } from '/rules.js';

// This is Magento stuff
export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('itm_campaign', 'itm_content', 'itm_medium', 'itm_source', 'itm_term')
];
