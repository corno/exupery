import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/typescript_light/unconstrained"
import * as _i_signatures from "../../../interface/schemas/typescript_light/migration_boilerplate"


export const Expression: _i_signatures._T_Expression = ($) => _pa.cc($, ($): _i_out._T_Expression => {
    switch ($[0]) {
        case 'array literal': return _pa.ss($, ($) => ['array literal', $.map(($) => Expression(
            $,
            null
        ))])
        case 'arrow function': return _pa.ss($, ($) => ['arrow function', ({
            'parameters': _pa.cc($['parameters'], ($) => $.map(($) => ({
                'name': _pa.cc($['name'], ($) => $),
                'type': _pa.cc($['type'], ($) => $.map(($) => Type(
                    $,
                    null
                ))),
            }))),
            'return type': _pa.cc($['return type'], ($) => $.map(($) => Type(
                $,
                null
            ))),
            'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Expression.SG.arrow_function._type => {
                switch ($[0]) {
                    case 'block': return _pa.ss($, ($) => ['block', Statements(
                        $,
                        null
                    )])
                    case 'expression': return _pa.ss($, ($) => ['expression', Expression(
                        $,
                        null
                    )])
                    default: return _pa.au($[0])
                }
            })),
        })])
        case 'call': return _pa.ss($, ($) => ['call', ({
            'arguments': _pa.cc($['arguments'], ($) => $.map(($) => Expression(
                $,
                null
            ))),
            'function selection': _pa.cc($['function selection'], ($) => Expression(
                $,
                null
            )),
        })])
        case 'false': return _pa.ss($, ($) => ['false', null])
        case 'null': return _pa.ss($, ($) => ['null', null])
        case 'number literal': return _pa.ss($, ($) => ['number literal', $])
        case 'object literal': return _pa.ss($, ($) => ['object literal', ({
            'properties': _pa.cc($['properties'], ($) => $.map(($) => Expression(
                $,
                null
            ))),
        })])
        case 'string literal': return _pa.ss($, ($) => ['string literal', String_Literal(
            $,
            null
        )])
        case 'true': return _pa.ss($, ($) => ['true', null])
        default: return _pa.au($[0])
    }
})
export const Statements: _i_signatures._T_Statements = ($) => $.map(($) => _pa.cc($, ($): _i_out._T_Statements.L => {
    switch ($[0]) {
        case 'import': return _pa.ss($, ($) => ['import', ({
            'from': _pa.cc($['from'], ($) => $),
            'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Statements.L.SG._import._type => {
                switch ($[0]) {
                    case 'named': return _pa.ss($, ($) => ['named', ({
                        'specifiers': _pa.cc($['specifiers'], ($) => $.map(($) => $)),
                    })])
                    case 'namespace': return _pa.ss($, ($) => ['namespace', $])
                    default: return _pa.au($[0])
                }
            })),
        })])
        case 'module declaration': return _pa.ss($, ($) => ['module declaration', ({
            'block': _pa.cc($['block'], ($) => Statements(
                $,
                null
            )),
            'export': _pa.cc($['export'], ($) => $),
            'name': _pa.cc($['name'], ($) => $),
        })])
        case 'type alias declaration': return _pa.ss($, ($) => ['type alias declaration', ({
            'export': _pa.cc($['export'], ($) => $),
            'name': _pa.cc($['name'], ($) => $),
            'parameters': _pa.cc($['parameters'], ($) => $.map(($) => $)),
            'type': _pa.cc($['type'], ($) => Type(
                $,
                null
            )),
        })])
        case 'variable': return _pa.ss($, ($) => ['variable', ({
            'const': _pa.cc($['const'], ($) => $),
            'export': _pa.cc($['export'], ($) => $),
            'expression': _pa.cc($['expression'], ($) => $.map(($) => Expression(
                $,
                null
            ))),
            'name': _pa.cc($['name'], ($) => $),
            'type': _pa.cc($['type'], ($) => $.map(($) => Type(
                $,
                null
            ))),
        })])
        default: return _pa.au($[0])
    }
}))
export const String_Literal: _i_signatures._T_String_Literal = ($) => ({
    'delimiter': _pa.cc($['delimiter'], ($) => _pa.cc($, ($): _i_out._T_String_Literal.delimiter => {
        switch ($[0]) {
            case 'apostrophe': return _pa.ss($, ($) => ['apostrophe', null])
            case 'quote': return _pa.ss($, ($) => ['quote', null])
            default: return _pa.au($[0])
        }
    })),
    'value': _pa.cc($['value'], ($) => $),
})
export const Type: _i_signatures._T_Type = ($) => _pa.cc($, ($): _i_out._T_Type => {
    switch ($[0]) {
        case 'boolean': return _pa.ss($, ($) => ['boolean', null])
        case 'function': return _pa.ss($, ($) => ['function', ({
            'parameters': _pa.cc($['parameters'], ($) => $.map(($) => ({
                'name': _pa.cc($['name'], ($) => $),
                'type': _pa.cc($['type'], ($) => $.map(($) => Type(
                    $,
                    null
                ))),
            }))),
            'return': _pa.cc($['return'], ($) => Type(
                $,
                null
            )),
            'type parameters': _pa.cc($['type parameters'], ($) => $.map(($) => $)),
        })])
        case 'literal type': return _pa.ss($, ($) => ['literal type', String_Literal(
            $,
            null
        )])
        case 'null': return _pa.ss($, ($) => ['null', null])
        case 'number': return _pa.ss($, ($) => ['number', null])
        case 'string': return _pa.ss($, ($) => ['string', null])
        case 'tuple': return _pa.ss($, ($) => ['tuple', ({
            'elements': _pa.cc($['elements'], ($) => $.map(($) => Type(
                $,
                null
            ))),
            'readonly': _pa.cc($['readonly'], ($) => $),
        })])
        case 'type literal': return _pa.ss($, ($) => ['type literal', ({
            'properties': _pa.cc($['properties'], ($) => $.map(($) => ({
                'readonly': _pa.cc($['readonly'], ($) => $),
                'type': _pa.cc($['type'], ($) => Type(
                    $,
                    null
                )),
            }))),
        })])
        case 'type reference': return _pa.ss($, ($) => ['type reference', ({
            'start': _pa.cc($['start'], ($) => $),
            'tail': _pa.cc($['tail'], ($) => $.map(($) => $)),
            'type arguments': _pa.cc($['type arguments'], ($) => $.map(($) => Type(
                $,
                null
            ))),
        })])
        case 'union': return _pa.ss($, ($) => ['union', $.map(($) => Type(
            $,
            null
        ))])
        case 'void': return _pa.ss($, ($) => ['void', null])
        default: return _pa.au($[0])
    }
})
