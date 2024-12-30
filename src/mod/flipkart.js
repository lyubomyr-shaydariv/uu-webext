import {PREFIX} from '/literals.js';
import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('flipkart.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE(PREFIX('affExtParam'), 'affid', /[cilp]id/, 'collection-tab-name', 'fm', 'marketplace', PREFIX('otracker'), /p\[\]/, 'pageUID', 'ppn', 'ppt', 'pwsvid', '_redIf', /sattr\[\]/, 'srno', 'ssid', 'st', 'store')
];
