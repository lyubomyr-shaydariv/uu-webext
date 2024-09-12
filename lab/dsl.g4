grammar dsl;

//--------------------------------------------------------------------------------------------------
// literals
//--------------------------------------------------------------------------------------------------
literal: atomLiteral | specificLiteral;
atomLiteral: subsetLiteral | primitiveLiteral;
primitiveLiteral: stringLiteral | prefixLiteral | suffixLiteral | prefixSplitLiteral | suffixSplitLiteral | regExpLiteral;
stringLiteral: STRING_LITERAL;
prefixLiteral: PREFIX_LITERAL;
suffixLiteral: SUFFIX_LITERAL;
prefixSplitLiteral: PREFIX_SPLIT_LITERAL;
suffixSplitLiteral: SUFFIX_SPLIT_LITERAL;
regExpLiteral: REG_EXP_LITERAL;
/* TODO */ subsetLiteral: primitiveLiteral ('&' primitiveLiteral)*;
/* TODO */ specificLiteral: domainLiteral | tldLiteral;
/* TODO */ domainLiteral: DOMAIN_LITERAL;
/* TODO */ tldLiteral: TLD_LITERAL;
/* TODO */ numberLiteral: NUMBER_LITERAL;

//--------------------------------------------------------------------------------------------------
// modules
//--------------------------------------------------------------------------------------------------
/* TODO */ module: 'MODULE' STRING_LITERAL ('DESCRIPTION' STRING_LITERAL)? ('ICON' urlLiteral) rule*;

//--------------------------------------------------------------------------------------------------
// rules
//--------------------------------------------------------------------------------------------------
/* TODO */ rule: ignored? ('AT' at)+ ('FROM' from ('APPLY' apply+)?) 'DO' do;
/* TODO */ ignored: 'IGNORED';
/* TODO */ at: at_anywhere | at_urlPattern | at_matching;
/* TODO */ at_anywhere: 'ANYWHERE';
/* TODO */ at_urlPattern: 'URL' 'PATTERN' urlLiteral*;
/* TODO */ at_matching: 'MATCHING' at_scheme? at_port? at_hostname? at_pathname? at_queryEntries? at_fragment?;
/* TODO */ at_scheme: 'SCHEME' atomLiteral*;
/* TODO */ at_port: 'PORT' atomLiteral*;
/* TODO */ at_hostname: 'HOSTNAME' (atomLiteral | domainLiteral| tldLiteral)*;
/* TODO */ at_pathname: 'PATHNAME' atomLiteral*;
/* TODO */ at_queryEntries: 'QUERY ENTRIES' atomLiteral*;
/* TODO */ at_fragment: 'FRAGMENT' atomLiteral*;
/* TODO */ from: from_pathname | from_queryEntries;
/* TODO */ from_pathname: 'PATHNAME';
/* TODO */ from_queryEntries: 'QUERY ENTRIES';
/* TODO */ apply: apply_functionCall+;
/* TODO */ apply_functionCall: apply_functionName (stringLiteral | numberLiteral)*;
/* TODO */ apply_functionName: FUNCTION_NAME;
/* TODO */ do: do_actionRemove | do_actionRemoveAll | do_actionRetain | do_actionRedirect;
/* TODO */ do_actionRemove: 'REMOVE' primitiveLiteral*;
/* TODO */ do_actionRemoveAll: 'REMOVE' 'ALL';
/* TODO */ do_actionRetain: 'RETAIN' primitiveLiteral*;
/* TODO */ do_actionRedirect: 'REDIRECT';

//--------------------------------------------------------------------------------------------------
// strings
//--------------------------------------------------------------------------------------------------
// https://raw.githubusercontent.com/antlr/grammars-v4/master/javascript/ecmascript/ECMAScript.g4
/* TODO */ STRING_LITERAL: '"' DOUBLE_STRING_CHARACTER* '"' | '\'' SINGLE_STRING_CHARACTER* '\'';
fragment SINGLE_STRING_CHARACTER: ~['\\\r\n] | '\\' ESCAPE_SEQUENCE | LINE_CONTINUATION;
fragment DOUBLE_STRING_CHARACTER: ~["\\\r\n] | '\\' ESCAPE_SEQUENCE | LINE_CONTINUATION;
fragment ESCAPE_SEQUENCE: CHARACTER_ESCAPE_SEQUENCE | '0' | HEX_ESCAPE_SEQUENCE | UNICODE_ESCAPE_SEQUENCE;
fragment CHARACTER_ESCAPE_SEQUENCE: SINGLE_ESCAPE_CHARACTER | NO_ESCAPE_CHARACTER;
fragment LINE_CONTINUATION: '\\' LINE_TERMINATOR_SEQUENCE;
fragment LINE_TERMINATOR_SEQUENCE: '\r\n' | LINE_TERMINATOR;
fragment SINGLE_ESCAPE_CHARACTER: ['"\\bfnrtv];
fragment NO_ESCAPE_CHARACTER: ~['"\\bfnrtv0-9xu\r\n];
fragment HEX_DIGIT: [0-9a-fA-F];
fragment HEX_ESCAPE_SEQUENCE: 'x' HEX_DIGIT HEX_DIGIT;
fragment UNICODE_ESCAPE_SEQUENCE: 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT;
LINE_TERMINATOR: [\r\n\u2028\u2029] -> channel(HIDDEN);

//--------------------------------------------------------------------------------------------------
// prefixes
//--------------------------------------------------------------------------------------------------
/* TODO */ PREFIX_LITERAL: '^' STRING_LITERAL;

//--------------------------------------------------------------------------------------------------
// suffixes
//--------------------------------------------------------------------------------------------------
/* TODO */ SUFFIX_LITERAL: STRING_LITERAL '$';

//--------------------------------------------------------------------------------------------------
// prefix splits
//--------------------------------------------------------------------------------------------------
/* TODO */ PREFIX_SPLIT_LITERAL: STRING_LITERAL '^' STRING_LITERAL;

//--------------------------------------------------------------------------------------------------
// suffix splits
//--------------------------------------------------------------------------------------------------
/* TODO */ SUFFIX_SPLIT_LITERAL: STRING_LITERAL '$' STRING_LITERAL;

//--------------------------------------------------------------------------------------------------
// regexps
//--------------------------------------------------------------------------------------------------
// https://raw.githubusercontent.com/antlr/grammars-v4/master/javascript/ecmascript/ECMAScript.g4
/* TODO */ REG_EXP_LITERAL: '/' REG_EXP_BODY '/' REG_EXP_FLAGS;
fragment REG_EXP_BODY: REG_EXP_FIRST_CHAR REG_EXP_CHAR*;
fragment REG_EXP_CHAR: ~[\r\n\u2028\u2029\\/[] | REG_EXP_BACKSLASH_SEQUENCE | REG_EXP_CLASS;
fragment REG_EXP_FIRST_CHAR: ~[\r\n\u2028\u2029*\\/[] | REG_EXP_BACKSLASH_SEQUENCE | REG_EXP_CLASS;
fragment REG_EXP_BACKSLASH_SEQUENCE: '\\' REG_EXP_NON_TERMINATOR;
fragment REG_EXP_NON_TERMINATOR: ~[\r\n\u2028\u2029];
fragment REG_EXP_CLASS: '[' REG_EXP_CLASS_CHAR* ']';
fragment REG_EXP_CLASS_CHAR: ~[\r\n\u2028\u2029\]\\] | REG_EXP_BACKSLASH_SEQUENCE;
fragment REG_EXP_FLAGS: IDENTIFIER_PART*;
fragment IDENTIFIER_PART: IDENTIFIER_START | [\p{Mn}] | [\p{Nd}] | [\p{Pc}] | ZWNJ | ZWJ;
fragment IDENTIFIER_START: [\p{L}] | [$_] | '\\' UNICODE_ESCAPE_SEQUENCE;
fragment ZWNJ: '\u200C';
fragment ZWJ: '\u200D';

//--------------------------------------------------------------------------------------------------
// domains
//--------------------------------------------------------------------------------------------------
/* TODO */ DOMAIN_LITERAL: '*' STRING_LITERAL;

//--------------------------------------------------------------------------------------------------
// domains
//--------------------------------------------------------------------------------------------------
/* TODO */ TLD_LITERAL: STRING_LITERAL '*';

//--------------------------------------------------------------------------------------------------
// urls
//--------------------------------------------------------------------------------------------------
// https://raw.githubusercontent.com/antlr/grammars-v4/master/url/url.g4
/* TODO */ urlLiteral: urlLiteral_uri EOF;
urlLiteral_uri: urlLiteral_scheme '://' urlLiteral_login? urlLiteral_host (':' urlLiteral_port)? ('/' urlLiteral_path?)? urlLiteral_query? urlLiteral_fragment? WS?;
urlLiteral_scheme: urlLiteral_string;
urlLiteral_host: '/'? urlLiteral_hostname;
urlLiteral_hostname: urlLiteral_string | '[' urlLiteral_v6host ']';
urlLiteral_v6host: '::'? (urlLiteral_string | URL_LITERAL_DIGITS) ((':' | '::') (urlLiteral_string | URL_LITERAL_DIGITS))*;
urlLiteral_port: URL_LITERAL_DIGITS;
urlLiteral_path: urlLiteral_string ('/' urlLiteral_string)* '/'?;
urlLiteral_user: urlLiteral_string;
urlLiteral_login: urlLiteral_user (':' urlLiteral_password)? '@';
urlLiteral_password: urlLiteral_string;
urlLiteral_fragment: '#' (urlLiteral_string | URL_LITERAL_DIGITS);
urlLiteral_query: '?' urlLiteral_search;
urlLiteral_search: urlLiteral_searchParameter ('&' urlLiteral_searchParameter)*;
urlLiteral_searchParameter: urlLiteral_string ('=' (urlLiteral_string | URL_LITERAL_DIGITS | URL_LITERAL_HEX))?;
urlLiteral_string: URL_LITERAL_STRING | URL_LITERAL_DIGITS;
URL_LITERAL_DIGITS: [0-9]+;
URL_LITERAL_HEX: ('%' [a-fA-F0-9] [a-fA-F0-9])+;
URL_LITERAL_STRING: ([a-zA-Z~0-9] | URL_LITERAL_HEX) ([a-zA-Z0-9.+-] | URL_LITERAL_HEX)*;

//--------------------------------------------------------------------------------------------------
// numbers
//--------------------------------------------------------------------------------------------------
/* TODO */ NUMBER_LITERAL: [0-9]+;

//--------------------------------------------------------------------------------------------------
// functions
//--------------------------------------------------------------------------------------------------
/* TODO */ FUNCTION_NAME: [a-zA-Z][a-zA-Z]*;

//--------------------------------------------------------------------------------------------------
/* TODO */ WS: [\r\n]+;
