import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('oft_c', 'oft_ck', 'oft_d', 'oft_id', 'oft_ids', 'oft_k', 'oft_lk', 'oft_sk')
];
