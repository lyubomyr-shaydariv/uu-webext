/* eslint-disable no-magic-numbers */
import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('e.customeriomail.com')
		.FROM().PATHNAME()
		.APPLY().GET_PROPERTY(2).FROM_URI_COMPONENT().FROM_BASE64().FROM_JSON().GET_PROPERTY('href').TO_URL()
		.DO().REDIRECT()
];
