(function() {

	const utmParameters = [
		"mc_cid",
		"mc_eid"
	];

	modules.push({
		redirect: function(url) {
			for ( const utmParameter of utmParameters ) {
				url.searchParams.delete(utmParameter);
			}
		}
	});

})();
