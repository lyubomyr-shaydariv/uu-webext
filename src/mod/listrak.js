import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('trk_contact', 'trk_module', 'trk_msg', 'trk_sid')
];
