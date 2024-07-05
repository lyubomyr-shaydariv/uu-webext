import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('at_campaign', 'at_campaign_type', 'at_channel', 'at_creation', /^at_custom.*/, 'at_detail_placement', 'at_emailtype', 'at_format', 'at_format', 'at_general_placement', 'at_identifier', 'at_link', 'at_link_id', 'at_link_origin', 'at_link_type', 'at_medium', 'at_network', 'at_platform', 'at_ptr_name', 'at_recipient_id', 'at_recipient_list', 'at_send_date', 'at_term', 'at_type', 'at_variant')
];
