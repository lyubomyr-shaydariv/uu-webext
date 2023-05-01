registerModule(function() {
	function filter(k, v) {
		return k !== "utm_campaign" && k !== "utm_cid" && k !== "utm_content" && k !== "utm_medium" && k !== "utm_name" && k != "utm_nooverride" && k !== "utm_reader" && k !== "utm_referrer" && k !== "utm_source" && k !== "utm_term" && k != "nr_email_referer";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
});
