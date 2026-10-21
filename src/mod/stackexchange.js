import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('askubuntu.com', 'serverfault.com', 'stackexchange.com', 'stackoverflow.com', 'superuser.com')
		.FROM().PATHNAME(/^\/[aq]\/\d+\/\d+$/)
		.DO().SUBSTITUTE(/^(\/[aq]\/\d+)\/\d+$/, '$1')
];
