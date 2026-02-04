import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE('ttclid'),
	RULE()
		.AT().DOMAIN('tiktok.com')
		.FROM().QUERY_ENTRY_KEYS()
		.DO().REMOVE(/^_[a-z]$/, 'checksum', 'embed_source', 'enter_method', 'is_copy_url', 'is_from_webapp', 'language', 'preview_pb', 'q', 'refer', 'referer_url', 'referer_video_id', 'sec_u_id', 'sec_uid', 'sec_user_id', 'sender_device', 'sender_web_id', 'share_app_id', 'share_app_name', 'share_author_id', 'share_iid', 'share_link_id', 'share_item_id', 'share_source', 'source', 't', 'timestamp', 'tt_content', 'tt_from', 'u_code', 'u_id', 'ugbiz_name', 'user_id', 'web_id'),
	RULE()
		.AT().DOMAIN('tiktok.com').PATHNAME('/link/v2')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('target').TO_URL()
		.DO().REDIRECT()
];
