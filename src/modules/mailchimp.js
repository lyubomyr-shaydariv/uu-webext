registerModule(function() {
	const utmParameters = [
		"mc_cid",
		"mc_eid"
	];
	return {
		redirect: function(url) {
			for ( const utmParameter of utmParameters ) {
				url.searchParams.delete(utmParameter);
			}
		}
	};
});
