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
	createTemplate
};
