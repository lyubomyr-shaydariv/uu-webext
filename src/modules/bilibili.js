import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("callback", "spm_id_from"),
	__.AT.DOMAIN("bilibili.com")
));
