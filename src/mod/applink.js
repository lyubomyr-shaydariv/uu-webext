import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('app.link')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('cjevent', 'click_id')
];
