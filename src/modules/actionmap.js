addRule((function() {
	function filter(k, vs) {
		return k !== "action_object_map" && k !== "action_ref_map" && k !== "action_type_map";
	};
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
