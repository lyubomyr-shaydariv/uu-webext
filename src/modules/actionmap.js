registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "action_object_map" && k !== "action_ref_map" && k !== "action_type_map";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});
