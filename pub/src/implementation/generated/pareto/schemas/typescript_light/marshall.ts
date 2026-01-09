import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/typescript_light/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const String_Literal: _i_signatures._T_String_Literal = ($, $p) => ['verbose group', _p.dictionary.literal({
    'delimiter': _p.deprecated_cc($['delimiter'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'quote': return _p.ss($, ($) => ({
                'state': "quote",
                'value': ['nothing', null],
            }))
            case 'apostrophe': return _p.ss($, ($) => ({
                'state': "apostrophe",
                'value': ['nothing', null],
            }))
            default: return _p.au($[0])
        }
    })]),
    'value': _p.deprecated_cc($['value'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Statements: _i_signatures._T_Statements = ($, $p) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'import': return _p.ss($, ($) => ({
            'state': "import",
            'value': ['verbose group', _p.dictionary.literal({
                'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'namespace': return _p.ss($, ($) => ({
                            'state': "namespace",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })],
                        }))
                        case 'named': return _p.ss($, ($) => ({
                            'state': "named",
                            'value': ['verbose group', _p.dictionary.literal({
                                'specifiers': _p.deprecated_cc($['specifiers'], ($) => ['dictionary', $.map(($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })])]),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
                'from': _p.deprecated_cc($['from'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'module declaration': return _p.ss($, ($) => ({
            'state': "module declaration",
            'value': ['verbose group', _p.dictionary.literal({
                'export': _p.deprecated_cc($['export'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'block': _p.deprecated_cc($['block'], ($) => Statements(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'type alias declaration': return _p.ss($, ($) => ({
            'state': "type alias declaration",
            'value': ['verbose group', _p.dictionary.literal({
                'export': _p.deprecated_cc($['export'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'parameters': _p.deprecated_cc($['parameters'], ($) => ['list', $.map(($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })])]),
                'type': _p.deprecated_cc($['type'], ($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'variable': return _p.ss($, ($) => ({
            'state': "variable",
            'value': ['verbose group', _p.dictionary.literal({
                'export': _p.deprecated_cc($['export'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'const': _p.deprecated_cc($['const'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'type': _p.deprecated_cc($['type'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Type(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
                'expression': _p.deprecated_cc($['expression'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Expression(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
            })],
        }))
        default: return _p.au($[0])
    }
})])]
export const Expression: _i_signatures._T_Expression = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'number literal': return _p.ss($, ($) => ({
            'state': "number literal",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['default number'](
                    $,
                    null
                ),
            })],
        }))
        case 'true': return _p.ss($, ($) => ({
            'state': "true",
            'value': ['nothing', null],
        }))
        case 'false': return _p.ss($, ($) => ({
            'state': "false",
            'value': ['nothing', null],
        }))
        case 'null': return _p.ss($, ($) => ({
            'state': "null",
            'value': ['nothing', null],
        }))
        case 'string literal': return _p.ss($, ($) => ({
            'state': "string literal",
            'value': String_Literal(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'object literal': return _p.ss($, ($) => ({
            'state': "object literal",
            'value': ['verbose group', _p.dictionary.literal({
                'properties': _p.deprecated_cc($['properties'], ($) => ['dictionary', $.map(($) => Expression(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
            })],
        }))
        case 'array literal': return _p.ss($, ($) => ({
            'state': "array literal",
            'value': ['list', $.map(($) => Expression(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'arrow function': return _p.ss($, ($) => ({
            'state': "arrow function",
            'value': ['verbose group', _p.dictionary.literal({
                'parameters': _p.deprecated_cc($['parameters'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                    'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'type': _p.deprecated_cc($['type'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                })])]),
                'return type': _p.deprecated_cc($['return type'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', Type(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
                'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'block': return _p.ss($, ($) => ({
                            'state': "block",
                            'value': Statements(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        case 'expression': return _p.ss($, ($) => ({
                            'state': "expression",
                            'value': Expression(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })],
        }))
        case 'call': return _p.ss($, ($) => ({
            'state': "call",
            'value': ['verbose group', _p.dictionary.literal({
                'function selection': _p.deprecated_cc($['function selection'], ($) => Expression(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'arguments': _p.deprecated_cc($['arguments'], ($) => ['list', $.map(($) => Expression(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
            })],
        }))
        default: return _p.au($[0])
    }
})]
export const Type: _i_signatures._T_Type = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => ({
            'state': "boolean",
            'value': ['nothing', null],
        }))
        case 'function': return _p.ss($, ($) => ({
            'state': "function",
            'value': ['verbose group', _p.dictionary.literal({
                'type parameters': _p.deprecated_cc($['type parameters'], ($) => ['list', $.map(($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })])]),
                'parameters': _p.deprecated_cc($['parameters'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                    'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'type': _p.deprecated_cc($['type'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                })])]),
                'return': _p.deprecated_cc($['return'], ($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'literal type': return _p.ss($, ($) => ({
            'state': "literal type",
            'value': String_Literal(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'null': return _p.ss($, ($) => ({
            'state': "null",
            'value': ['nothing', null],
        }))
        case 'number': return _p.ss($, ($) => ({
            'state': "number",
            'value': ['nothing', null],
        }))
        case 'string': return _p.ss($, ($) => ({
            'state': "string",
            'value': ['nothing', null],
        }))
        case 'tuple': return _p.ss($, ($) => ({
            'state': "tuple",
            'value': ['verbose group', _p.dictionary.literal({
                'readonly': _p.deprecated_cc($['readonly'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'elements': _p.deprecated_cc($['elements'], ($) => ['list', $.map(($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
            })],
        }))
        case 'type literal': return _p.ss($, ($) => ({
            'state': "type literal",
            'value': ['verbose group', _p.dictionary.literal({
                'properties': _p.deprecated_cc($['properties'], ($) => ['dictionary', $.map(($) => ['verbose group', _p.dictionary.literal({
                    'readonly': _p.deprecated_cc($['readonly'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['boolean'](
                            $,
                            null
                        ),
                    })]),
                    'type': _p.deprecated_cc($['type'], ($) => Type(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])]),
            })],
        }))
        case 'type reference': return _p.ss($, ($) => ({
            'state': "type reference",
            'value': ['verbose group', _p.dictionary.literal({
                'start': _p.deprecated_cc($['start'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'tail': _p.deprecated_cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })])]),
                'type arguments': _p.deprecated_cc($['type arguments'], ($) => ['list', $.map(($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
            })],
        }))
        case 'union': return _p.ss($, ($) => ({
            'state': "union",
            'value': ['list', $.map(($) => Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'void': return _p.ss($, ($) => ({
            'state': "void",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Group: _i_signatures._T_Group = ($, $p) => ['list', $.map(($) => Group_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Block: _i_signatures._T_Block = ($, $p) => ['list', $.map(($) => Block_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'nested block': return _p.ss($, ($) => ({
            'state': "nested block",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'block': return _p.ss($, ($) => ({
            'state': "block",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'sub group': return _p.ss($, ($) => ({
            'state': "sub group",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'optional': return _p.ss($, ($) => ({
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
        case 'nothing': return _p.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'snippet': return _p.ss($, ($) => ({
            'state': "snippet",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'indent': return _p.ss($, ($) => ({
            'state': "indent",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'sub block': return _p.ss($, ($) => ({
            'state': "sub block",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'optional': return _p.ss($, ($) => ({
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
        case 'nothing': return _p.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Lines: _i_signatures._T_Lines = ($, $p) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
    'indentation': _p.deprecated_cc($['indentation'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
    'text': _p.deprecated_cc($['text'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})])]
export const Directory: _i_signatures._T_Directory = ($, $p) => ['dictionary', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ({
            'state': "file",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'directory': return _p.ss($, ($) => ({
            'state': "directory",
            'value': Directory(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _p.au($[0])
    }
})])]
