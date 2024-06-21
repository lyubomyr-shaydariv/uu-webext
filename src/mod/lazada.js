import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)*lazada(?:\.[^.]+)+$/)
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE_ALL()
];
