import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME('click.pstmrk.it')
		.FROM().PATHNAME()
		.APPLY().GET_PROPERTY(1).FROM_URI_COMPONENT().FROM_URI_COMPONENT().REPLACE_STRING(/(.*)/, 'https://$1').TO_URL()
		.DO().REDIRECT()
];
