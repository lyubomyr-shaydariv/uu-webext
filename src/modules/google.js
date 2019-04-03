registerModule(function() {
	return {
		redirect: function(url) {
			if ( url.hostname === "www.google.com" && url.pathname === "/url" ) {
				const q = url.searchParams.get("q");
				if ( q ) {
					return new URL(q);
				}
			}
		}
	};
});
