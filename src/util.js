//--------------------------------------------------------------------------------------------------
// general object functions
//--------------------------------------------------------------------------------------------------

const areStrictlyEqual = (o1, o2) => {
	if ( o1 === undefined || o2 === undefined ) {
		return false;
	}
	if ( o1 === null && o2 === null ) {
		return true;
	}
	if ( Array.isArray(o1) && Array.isArray(o2) ) {
		if ( o1.length !== o2.length ) {
			return false;
		}
		for ( let i = 0; i < o1.length; i++ ) {
			if ( !areStrictlyEqual(o1[i], o2[i]) ) {
				return false;
			}
		}
		return true;
	}
	const v1 = o1 !== null ? o1.valueOf() : null;
	const v2 = o2 !== null ? o2.valueOf() : null;
	return v1 === v2;
};

//--------------------------------------------------------------------------------------------------
// general string functions
//--------------------------------------------------------------------------------------------------

const unsafeHtmlCharactersRegExp = /([&<>"'])/g;

const unsafeHtmlCharToSafeHtmlChar = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&apos;'
};

const sanitizeHtml = (html) => html.replace(unsafeHtmlCharactersRegExp, (match, unsafeChar) => unsafeHtmlCharToSafeHtmlChar[unsafeChar]);

//--------------------------------------------------------------------------------------------------
// stupid simple template engine
//--------------------------------------------------------------------------------------------------

const templatePropertyRegExp = /(?<propertyToken>\${(?<propertyName>[0-9a-zA-Z]+)})/g;

const createTemplate = (templateText) => {
	const render = (properties, finalize) => templateText.replace(templatePropertyRegExp, (match, propertyToken, propertyName) => {
		const propertyValue = properties[propertyName];
		if ( propertyValue === undefined || propertyValue === null ) {
			return propertyValue;
		}
		return finalize(propertyValue);
	});
	const renderSanitizedHTML = (properties) => render(properties, sanitizeHtml);
	return {
		renderSanitizedHTML
	};
};

export {
	areStrictlyEqual,
	createTemplate
};
