import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/typescript_light/marshall"


export const Block: _i_signatures._T_Block = ($, $p) => ['list', $.map(($) => Block_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'indent': return _pa.ss($, ($) => ({
            'state': "indent",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'nothing': return _pa.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': ['optional', $.transform(
                ($): _i_out._T_Value.SG.optional => ['set', Block_Part(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )],
                () => ['not set', null]
            )],
        }))
        case 'snippet': return _pa.ss($, ($) => ({
            'state': "snippet",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'sub block': return _pa.ss($, ($) => ({
            'state': "sub block",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const Directory: _i_signatures._T_Directory = ($, $p) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory': return _pa.ss($, ($) => ({
            'state': "directory",
            'value': Directory(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'file': return _pa.ss($, ($) => ({
            'state': "file",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
export const Expression: _i_signatures._T_Expression = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'array literal': return _pa.ss($, ($) => ({
            'state': "array literal",
            'value': ['list', $.map(($) => Expression(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'arrow function': return _pa.ss($, ($) => ({
            'state': "arrow function",
            'value': ['verbose group', _pa.dictionary_literal({
                'parameters': _pa.cc($['parameters'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'name': _pa.cc($['name'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'type': _pa.cc($['type'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                })])]),
                'return type': _pa.cc($['return type'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Type(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
                'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'block': return _pa.ss($, ($) => ({
                            'state': "block",
                            'value': Statements(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        case 'expression': return _pa.ss($, ($) => ({
                            'state': "expression",
                            'value': Expression(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })],
        }))
        case 'call': return _pa.ss($, ($) => ({
            'state': "call",
            'value': ['verbose group', _pa.dictionary_literal({
                'arguments': _pa.cc($['arguments'], ($) => ['list', $.map(($) => Expression(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
                'function selection': _pa.cc($['function selection'], ($) => Expression(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'false': return _pa.ss($, ($) => ({
            'state': "false",
            'value': ['nothing', null],
        }))
        case 'null': return _pa.ss($, ($) => ({
            'state': "null",
            'value': ['nothing', null],
        }))
        case 'number literal': return _pa.ss($, ($) => ({
            'state': "number literal",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'object literal': return _pa.ss($, ($) => ({
            'state': "object literal",
            'value': ['verbose group', _pa.dictionary_literal({
                'properties': _pa.cc($['properties'], ($) => ['dictionary', $.map(($) => Expression(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
            })],
        }))
        case 'string literal': return _pa.ss($, ($) => ({
            'state': "string literal",
            'value': String_Literal(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'true': return _pa.ss($, ($) => ({
            'state': "true",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Group: _i_signatures._T_Group = ($, $p) => ['list', $.map(($) => Group_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'block': return _pa.ss($, ($) => ({
            'state': "block",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'nested block': return _pa.ss($, ($) => ({
            'state': "nested block",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'nothing': return _pa.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': ['optional', $.transform(
                ($): _i_out._T_Value.SG.optional => ['set', Group_Part(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )],
                () => ['not set', null]
            )],
        }))
        case 'sub group': return _pa.ss($, ($) => ({
            'state': "sub group",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const Lines: _i_signatures._T_Lines = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'indentation': _pa.cc($['indentation'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
    'text': _pa.cc($['text'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})])]
export const Statements: _i_signatures._T_Statements = ($, $p) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'import': return _pa.ss($, ($) => ({
            'state': "import",
            'value': ['verbose group', _pa.dictionary_literal({
                'from': _pa.cc($['from'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'named': return _pa.ss($, ($) => ({
                            'state': "named",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'specifiers': _pa.cc($['specifiers'], ($) => ['dictionary', $.map(($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })])]),
                            })],
                        }))
                        case 'namespace': return _pa.ss($, ($) => ({
                            'state': "namespace",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })],
        }))
        case 'module declaration': return _pa.ss($, ($) => ({
            'state': "module declaration",
            'value': ['verbose group', _pa.dictionary_literal({
                'block': _pa.cc($['block'], ($) => Statements(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'export': _pa.cc($['export'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'name': _pa.cc($['name'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'type alias declaration': return _pa.ss($, ($) => ({
            'state': "type alias declaration",
            'value': ['verbose group', _pa.dictionary_literal({
                'export': _pa.cc($['export'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'name': _pa.cc($['name'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'parameters': _pa.cc($['parameters'], ($) => ['list', $.map(($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })])]),
                'type': _pa.cc($['type'], ($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'variable': return _pa.ss($, ($) => ({
            'state': "variable",
            'value': ['verbose group', _pa.dictionary_literal({
                'const': _pa.cc($['const'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'export': _pa.cc($['export'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'expression': _pa.cc($['expression'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Expression(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
                'name': _pa.cc($['name'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'type': _pa.cc($['type'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Type(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
            })],
        }))
        default: return _pa.au($[0])
    }
})])]
export const String_Literal: _i_signatures._T_String_Literal = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'delimiter': _pa.cc($['delimiter'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'apostrophe': return _pa.ss($, ($) => ({
                'state': "apostrophe",
                'value': ['nothing', null],
            }))
            case 'quote': return _pa.ss($, ($) => ({
                'state': "quote",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'value': _pa.cc($['value'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Type: _i_signatures._T_Type = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'boolean': return _pa.ss($, ($) => ({
            'state': "boolean",
            'value': ['nothing', null],
        }))
        case 'function': return _pa.ss($, ($) => ({
            'state': "function",
            'value': ['verbose group', _pa.dictionary_literal({
                'parameters': _pa.cc($['parameters'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'name': _pa.cc($['name'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'type': _pa.cc($['type'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                })])]),
                'return': _pa.cc($['return'], ($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type parameters': _pa.cc($['type parameters'], ($) => ['list', $.map(($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })])]),
            })],
        }))
        case 'literal type': return _pa.ss($, ($) => ({
            'state': "literal type",
            'value': String_Literal(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'null': return _pa.ss($, ($) => ({
            'state': "null",
            'value': ['nothing', null],
        }))
        case 'number': return _pa.ss($, ($) => ({
            'state': "number",
            'value': ['nothing', null],
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['nothing', null],
        }))
        case 'tuple': return _pa.ss($, ($) => ({
            'state': "tuple",
            'value': ['verbose group', _pa.dictionary_literal({
                'elements': _pa.cc($['elements'], ($) => ['list', $.map(($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
                'readonly': _pa.cc($['readonly'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
            })],
        }))
        case 'type literal': return _pa.ss($, ($) => ({
            'state': "type literal",
            'value': ['verbose group', _pa.dictionary_literal({
                'properties': _pa.cc($['properties'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'readonly': _pa.cc($['readonly'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['boolean'](
                            $,
                            null
                        ),
                    })]),
                    'type': _pa.cc($['type'], ($) => Type(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])]),
            })],
        }))
        case 'type reference': return _pa.ss($, ($) => ({
            'state': "type reference",
            'value': ['verbose group', _pa.dictionary_literal({
                'start': _pa.cc($['start'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'tail': _pa.cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })])]),
                'type arguments': _pa.cc($['type arguments'], ($) => ['list', $.map(($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
            })],
        }))
        case 'union': return _pa.ss($, ($) => ({
            'state': "union",
            'value': ['list', $.map(($) => Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'void': return _pa.ss($, ($) => ({
            'state': "void",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
