import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const excluding = __.EXCLUDING("spJobID", "spMailingID", "spReportId", "spUserID");
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, excluding);
		}
	});
}
