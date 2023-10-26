addRule((function() {
	const filter = createFilterByConstantKeys("action_object_map", "action_ref_map", "action_type_map");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
