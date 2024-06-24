class Prefix {

	constructor(prefix) {
		this.prefix = prefix.toString();
	}

	matches(...values) {
		for ( const value of values ) {
			if ( value.startsWith(this.prefix) ) {
				return true;
			}
		}
		return false;
	}

	toString() {
		return this.prefix;
	}

}

const PREFIX = (prefix) => new Prefix(prefix);

export {
	Prefix,
	PREFIX
};
