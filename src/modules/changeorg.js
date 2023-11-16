import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("change.org");
	const filter = rules.EXCLUDE("guest", "recruited_by_id", "recruiter", "short_display_name", "source_location");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
