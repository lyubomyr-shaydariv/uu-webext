addRule((function() {
	const filter = EXCLUDE("_d", "checksum", "is_copy_url", "is_from_webapp", "language", "preview_pb", "sec_user_id", "sender_device", "sender_web_id", "share_app_id", "share_link_id", "share_item_id", "source", "timestamp", "tt_from", "u_code", "user_id");
	return {
		redirect: function(url) {
			if ( url.hostname === "tiktok.com" || url.hostname.endsWith(".tiktok.com") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
