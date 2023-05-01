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

	global.cleanSearchPairs = function(search, filter) {
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

	global.cleanHashPairs = function(hash, filter) {
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

})(this);

(function(global) {

	global.cleanSearchAndHashPairs = function(url, filter) {
		url.search = cleanSearchPairs(url.search, filter);
		url.hash = cleanHashPairs(url.hash, filter);
	};

})(this);
