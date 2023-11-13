addRule((function() {
	const at = AND(
		AT_HOSTNAME("www.evernote.com"),
		AT_PATHNAME("/OutboundRedirect.action")
	);
	return {
		redirect: function(url) {
			if ( at(url) ) {
				return REDIRECT_FROM_SEARCH_PARAMS(url, "dest");
			}
		}
	};
})());
