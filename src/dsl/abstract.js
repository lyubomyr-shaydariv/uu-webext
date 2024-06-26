class AbstractToken {

	constructor() {
		if ( this.constructor === AbstractToken ) {
			throw new Error(`abstract class cannot be instantiated: ${this.constructor.name}`);
		}
	}

	// eslint-disable-next-line no-unused-vars
	combine(...literals) {
		throw new Error('cannot invoke an abstract method in ' + this.constructor.name);
	}

	// eslint-disable-next-line no-unused-vars
	matches(...values) {
		throw new Error('cannot invoke an abstract method in ' + this.constructor.name);
	}

	// eslint-disable-next-line no-unused-vars, require-yield
	*filter(...values) {
		throw new Error('cannot invoke an abstract method in ' + this.constructor.name);
	}

	toKey() {
		throw new Error('cannot invoke an abstract method in ' + this.constructor.name);
	}

	toString() {
		throw new Error('cannot invoke an abstract method in ' + this.constructor.name);
	}

	// eslint-disable-next-line no-unused-vars
	toExpression(separator) {
		throw new Error('cannot invoke an abstract method in ' + this.constructor.name);
	}

}

export {
	AbstractToken
};
