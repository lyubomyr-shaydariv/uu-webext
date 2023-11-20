import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("_d", "checksum", "is_copy_url", "is_from_webapp", "language", "preview_pb", "sec_user_id", "sender_device", "sender_web_id", "share_app_id", "share_link_id", "share_item_id", "source", "timestamp", "tt_from", "u_code", "user_id"),
	__.AT.DOMAIN("tiktok.com")
));
