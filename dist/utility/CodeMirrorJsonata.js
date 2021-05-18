"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonataMode = void 0;
function jsonataMode(CodeMirror) {
    CodeMirror.defineMode('jsonata', function () {
        var OPERATORS = [
            '.',
            '[',
            ']',
            '{',
            '}',
            '(',
            ')',
            ',',
            '@',
            '#',
            ';',
            ':',
            '?',
            '+',
            '-',
            '*',
            '/',
            '%',
            '|',
            '=',
            '<',
            '>',
            '^',
            '**',
            '..',
            ':=',
            '!=',
            '<=',
            '>=',
            '~>',
            'and',
            'or',
            'in',
            '&',
            '!',
            '~',
        ];
        var KEYWORDS = ['true', 'false', 'null'];
        var BUILTIN_METHODS = [
            'string',
            'length',
            'substring',
            'substringBefore',
            'substringAfter',
            'uppercase',
            'lowercase',
            'trim',
            'pad',
            'contains',
            'split',
            'join',
            'match',
            'replace',
            'now',
            'fromMillis',
            'formatNumber',
            'formatBase',
            'base64encode',
            'base64decode',
            'number',
            'abs',
            'floor',
            'ceil',
            'round',
            'power',
            'sqrt',
            'random',
            'millis',
            'toMillis',
            'sum',
            'max',
            'min',
            'average',
            'boolean',
            'not',
            'exists',
            'count',
            'append',
            'sort',
            'reverse',
            'shuffle',
            'zip',
            'keys',
            'lookup',
            'spread',
            'merge',
            'sift',
            'each',
            'map',
            'filter',
            'reduce',
            'sift',
        ];
        var TOKENS = {
            KEYWORD: 'keyword',
            NUMBER: 'number',
            VARIABLE: 'variable-2',
            OPERATOR: 'operator',
            STRING: 'string',
            BUILTIN: 'builtin',
            ATTRIBUTE: 'attribute',
            ERROR: 'error',
        };
        var WHITESPACE_REGEX = /\s/;
        var ALPHA_REGEX = /[a-zA-Z]/;
        var JSONATA_NUMBER_REGEX = /^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/;
        var JSONATA_VARIABLE_REGEX = /[a-zA-Z0-9_-]/;
        return {
            token: function (stream) {
                var peek = function (n) {
                    if (n === void 0) { n = 0; }
                    return stream.string[stream.pos + n];
                };
                var consume = function (chars) {
                    if (chars === void 0) { chars = ''; }
                    return chars.split('').every(function (char) { return stream.eat(char); });
                };
                if (stream.eol()) {
                    return null;
                }
                while (!stream.eol() && WHITESPACE_REGEX.test(peek())) {
                    consume(peek());
                }
                if (peek() === '.' && peek(1) === '.') {
                    consume('..');
                    return TOKENS.OPERATOR;
                }
                if (peek() === ':' && peek(1) === '=') {
                    consume(':=');
                    return TOKENS.OPERATOR;
                }
                if (peek() === '!' && peek(1) === '=') {
                    consume('!=');
                    return TOKENS.OPERATOR;
                }
                if (peek() === '>' && peek(1) === '=') {
                    consume('>=');
                    return TOKENS.OPERATOR;
                }
                if (peek() === '<' && peek(1) === '=') {
                    consume('<=');
                    return TOKENS.OPERATOR;
                }
                if (peek() === '*' && peek(1) === '*') {
                    consume('**');
                    return TOKENS.OPERATOR;
                }
                if (peek() === '~' && peek(1) === '>') {
                    consume('~>');
                    return TOKENS.OPERATOR;
                }
                if (OPERATORS.includes(peek())) {
                    consume(peek());
                    return TOKENS.OPERATOR;
                }
                if (peek() === '"' || peek() === "'") {
                    var quoteType = peek();
                    consume(quoteType);
                    while (!stream.eol()) {
                        var char = peek();
                        if (char === quoteType) {
                            consume(quoteType);
                            return TOKENS.STRING;
                        }
                        consume(char);
                    }
                    return TOKENS.STRING + " " + TOKENS.ERROR;
                }
                if (JSONATA_NUMBER_REGEX.test(peek())) {
                    var number = peek();
                    consume(number);
                    while (!stream.eol() && JSONATA_NUMBER_REGEX.test(peek())) {
                        number += peek();
                        consume(peek());
                    }
                    number = parseFloat(number);
                    if (!isNaN(number) && isFinite(number)) {
                        return TOKENS.NUMBER;
                    }
                    else {
                        return TOKENS.NUMBER + " " + TOKENS.ERROR;
                    }
                }
                if (peek() === '`') {
                    consume(peek());
                    while (!stream.eol()) {
                        if (peek() === '`') {
                            consume(peek());
                            return TOKENS.STRING;
                        }
                        consume(peek());
                    }
                    return TOKENS.STRING + " " + TOKENS.ERROR;
                }
                if (peek() === '$' && peek(1) === '$') {
                    consume('$$');
                    return TOKENS.BUILTIN;
                }
                if (peek() === '$') {
                    consume(peek());
                    var name_1 = '';
                    while (!stream.eol() && JSONATA_VARIABLE_REGEX.test(peek())) {
                        name_1 += peek();
                        consume(peek());
                    }
                    if (!name_1) {
                        return TOKENS.BUILTIN;
                    }
                    if (BUILTIN_METHODS.includes(name_1)) {
                        return TOKENS.BUILTIN;
                    }
                    return TOKENS.VARIABLE;
                }
                if (ALPHA_REGEX.test(peek())) {
                    var name_2 = peek();
                    consume(name_2);
                    while (!stream.eol() && ALPHA_REGEX.test(peek())) {
                        name_2 += peek();
                        consume(peek());
                    }
                    if (OPERATORS.includes(name_2)) {
                        return TOKENS.OPERATOR;
                    }
                    if (KEYWORDS.includes(name_2)) {
                        return TOKENS.KEYWORD;
                    }
                    return TOKENS.ATTRIBUTE;
                }
                consume(peek());
                return TOKENS.KEYWORD + " " + TOKENS.ERROR;
            },
        };
    });
}
exports.jsonataMode = jsonataMode;
//# sourceMappingURL=CodeMirrorJsonata.js.map