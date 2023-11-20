import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("callback", "spm_id_from"),
	__.AT_DOMAIN("bilibili.com")
));
