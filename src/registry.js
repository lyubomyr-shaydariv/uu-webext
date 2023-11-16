const rules = [];

const addRule = (rule) => {
	rules.push(rule);
};

const getRules = function* () {
	for ( const rule of rules ) {
		yield rule;
	}
};

export {
	addRule,
	getRules
};
