import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('spm', 'spmA', 'spmB', 'spmC', 'spmD', 'spmE')
];
