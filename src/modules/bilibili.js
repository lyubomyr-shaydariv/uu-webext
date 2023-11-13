addRule((function() {
	const filter = EXCLUDE("callback", "spm_id_from");
	return {
		redirect: function(url) {
			if ( url.hostname === "bilibili.com" || url.hostname.endsWith(".bilibili.com") ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
