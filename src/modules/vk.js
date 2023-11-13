addRule((function() {
	const at = AND(
		AT_DOMAIN("vk.com"),
		AT_PATHNAME("/away.php")
	);
	return {
		redirect: function(url) {
			if ( at(url) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "to");
			}
		}
	};
})());
