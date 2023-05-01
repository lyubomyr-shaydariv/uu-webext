registerModule(function() {
	function filter(k, v) {
		return k !== "_d" && k !== "checksum" && k !== "is_copy_url" && k !== "is_from_webapp" && k !== "language" && k !== "preview_pb" && k !== "sec_user_id" && k !== "sender_device" && k !== "sender_web_id" && k !== "share_app_id" && k !== "share_link_id" && k !== "share_item_id" && k !== "source" && k !== "timestamp" && k !== "tt_from" && k !== "u_code" && k !== "user_id";
	};
	return {
		redirect: function(url) {
			if ( url.hostname === "tiktok.com" || url.hostname.endsWith(".tiktok.com") ) {
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
});
