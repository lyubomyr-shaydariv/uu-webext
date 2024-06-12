import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('href.li')
		.FROM().QUERY()
		.APPLY().SUBSTRING(1).TO_URL()
		.DO().REDIRECT()
];
