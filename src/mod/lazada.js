import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)*lazada(?:\.[^.]+)+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE_ALL()
];
