(function(global) {

	const modules = [];

	global.getModules = function* () {
		for ( const module of modules ) {
			yield module;
		}
	};

	global.registerModule = function(createModule) {
		modules.push(createModule());
	};

	global.extractQueryPairAsUrl = function(query, key) {
		const value = query.get(key);
		if ( value ) {
			return new URL(value);
		}
	};

	global.removeHashPair = function(hash, filter) {
		if ( hash && hash !== "#" ) {
			hash = hash.replace(/([#&]([^=&]+)(?:=([^#&]*))?)/g, function(match, _, k, v) {
				return filter(k, v) ? match : "";
			});
			if ( hash.startsWith("&") ) {
				hash = "#" + hash.substring(1);
			}
		}
		return hash;
	};

	global.removeSearchPair = function(search, filter) {
		if ( search && search !== "?" ) {
			search = search.replace(/([?&]([^=&]+)(?:=([^?&]*))?)/g, function(match, _, k, v) {
				return filter(k, v) ? match : "";
			});
			if ( search.startsWith("&") ) {
				search = "?" + search.substring(1);
			}
		}
		return search;
	};

})(this);
