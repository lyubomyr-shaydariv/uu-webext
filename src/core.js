(function(global) {

	const modules = [];

	function* getModules() {
		for ( const module of modules ) {
			yield module;
		}
	}

	function parseHashFromUrl(url) {
		return url.hash.split(/[\#\&]/g)
			.filter(kv => kv.length > 0)
			.map(kv => kv.split(/=/));
	}

	function registerModule(createModule) {
		modules.push(createModule());
	}

	function toHashForUrl() {
		return (a, e) => {
			if ( typeof(e[1]) === "undefined" ) {
				return `${a}${a.length === 0 ? "#" : "&"}${e[0]}`;
			}
			return `${a}${a.length === 0 ? "#" : "&"}${e[0]}=${e[1]}`;
		};
	}

	global.getModules = getModules;
	global.parseHashFromUrl = parseHashFromUrl;
	global.registerModule = registerModule;
	global.toHashForUrl = toHashForUrl;

})(this);
