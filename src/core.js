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

})(this);

(function(global) {

	global.getRedirectToWarningPage = function(url) {
		return new URL("chrome-extension://" + chrome.runtime.id + "/warn.html?url=" + encodeURIComponent(url));
	};

	global.extractQueryPairAsUrl = function(query, key) {
		const value = query.get(key);
		if ( value ) {
			return new URL(value);
		}
	};

	global.cleanSearchParams = function(searchParams, filter) {
		if ( !searchParams || !filter ) {
			return;
		}
		const keysToDelete = new Set();
		for ( const key of searchParams.keys() ) {
			const values = searchParams.getAll(key);
			if ( !filter(key, values) ) {
				keysToDelete.add(key);
			}
		}
		for ( const keyToDelete of keysToDelete ) {
			searchParams.delete(keyToDelete);
		}
	};

	global.cleanHashPairs = function(hash, filter) {
		if ( hash && hash !== "#" ) {
			hash = hash.replace(/([#&]([^=&]+)(?:=([^#&]*))?)/g, function(match, _, k, v) {
				return filter(k, [v]) ? match : "";
			});
			if ( hash.startsWith("&") ) {
				hash = "#" + hash.substring(1);
			}
		}
		return hash;
	};

})(this);

(function(global) {

	global.cleanSearchAndHashPairs = function(url, filter) {
		cleanSearchParams(url.searchParams, filter);
		url.hash = cleanHashPairs(url.hash, filter);
	};

})(this);
