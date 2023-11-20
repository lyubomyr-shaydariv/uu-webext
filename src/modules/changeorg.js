import * as registry from '/registry.js';
import * as __ from '/rules.js';

registry.addRule(__.RULE_MUTATE_ENTRIES_AT(
	__.EXCLUDING("guest", "recruited_by_id", "recruiter", "short_display_name", "source_location"),
	__.AT_DOMAIN("change.org")
));
