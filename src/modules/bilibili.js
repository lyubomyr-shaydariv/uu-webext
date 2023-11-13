addRule((function() {
	const at = AT_DOMAIN("bilibili.com");
	const filter = EXCLUDE("callback", "spm_id_from");
	return {
		redirect: function(url) {
			if ( at(url) ) {
				FILTER_ENTRIES(url, filter);
			}
		}
	};
})());
