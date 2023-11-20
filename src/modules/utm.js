import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES(
	__.JUST.EXCLUDING("utm_campaign", "utm_cid", "utm_content", "utm_medium", "utm_name", "utm_nooverride", "utm_reader", "utm_referrer", "utm_source", "utm_term", "nr_email_referer")
));
