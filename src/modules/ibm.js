import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const filter = rules.EXCLUDE("spJobID", "spMailingID", "spReportId", "spUserID");
	registry.addRule({
		redirect: (url) => {
			rules.FILTER_ENTRIES(url, filter);
		}
	});
}
