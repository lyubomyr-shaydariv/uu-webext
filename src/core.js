(function(global) {

	const modules = [];

	function* getModules() {
		for ( const module of modules ) {
			yield module;
		}
	}

	function registerModule(createModule) {
		modules.push(createModule());
	}

	global.getModules = getModules;
	global.registerModule = registerModule;

})(this);
