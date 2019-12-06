registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "utm_campaign" && k !== "utm_cid" && k !== "utm_content" && k !== "utm_medium" && k !== "utm_name" && k != "utm_nooverride" && k !== "utm_reader" && k !== "utm_referrer" && k !== "utm_source" && k !== "utm_term";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
