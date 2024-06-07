import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('soc_src', 'soc_trk'),
	RULE()
		.AT().HOSTNAME(/^(?:[^.]+\.)?yahoo\.[^.]+$/)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('guccounter')
];
