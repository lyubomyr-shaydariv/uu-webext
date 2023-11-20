import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE.MUTATE_ENTRIES_AT(
	__.JUST.EXCLUDING("guest", "recruited_by_id", "recruiter", "short_display_name", "source_location"),
	__.AT.DOMAIN("change.org")
));
