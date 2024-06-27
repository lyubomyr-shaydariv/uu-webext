import { AbstractToken } from '/dsl/abstract.js';

class ModuleRule
	extends AbstractToken {

}

const MODULE = () => new ModuleRule();

export {
	ModuleRule,
	MODULE
};
