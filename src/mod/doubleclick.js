/* eslint-disable no-magic-numbers */
import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().TLD('doubleclick')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('tag_for_child_directed_treatment').SUBSTRING(2).TO_URL()
		.DO().REDIRECT(),
	RULE()
		.AT().HOSTNAME('ad.doubleclick.net').PATHNAME(PREFIX('/clk;'))
		.FROM().QUERY()
		.APPLY().SUBSTRING(1).TO_URL()
		.DO().REDIRECT()
];
