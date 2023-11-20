import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.EXCLUDING("utm_campaign", "utm_cid", "utm_content", "utm_medium", "utm_name", "utm_nooverride", "utm_reader", "utm_referrer", "utm_source", "utm_term", "nr_email_referer");
	registry.addRule({
		redirect: (url) => {
			__.MUTATE_ENTRIES(url, excluding);
		}
	});
}
