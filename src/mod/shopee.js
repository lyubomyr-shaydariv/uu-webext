import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)*shopee(?:\.[^.]+)+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE_ALL()
];
