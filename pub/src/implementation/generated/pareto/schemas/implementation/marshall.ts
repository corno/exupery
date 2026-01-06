import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_interface from "../interface/marshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/implementation/marshall"


export const Initialization: _i_signatures._T_Initialization = ($, $p) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'block': return _pa.ss($, ($) => ({
            'state': "block",
            'value': ['verbose group', _pa.dictionary.literal({
                'initialization': _pa.deprecated_cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'temp ordered variables': _pa.deprecated_cc($['temp ordered variables'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
                    'initialization': _pa.deprecated_cc($['initialization'], ($) => Initialization(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'name': _pa.deprecated_cc($['name'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'type': _pa.deprecated_cc($['type'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                })])]),
                'variables': _pa.deprecated_cc($['variables'], ($) => Variables(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'change context': return _pa.ss($, ($) => ({
            'state': "change context",
            'value': ['verbose group', _pa.dictionary.literal({
                'initialization': _pa.deprecated_cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'new context': _pa.deprecated_cc($['new context'], ($) => Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'literal': return _pa.ss($, ($) => ({
            'state': "literal",
            'value': ['verbose group', _pa.dictionary.literal({
                'value': _pa.deprecated_cc($['value'], ($) => Literal(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'selection': return _pa.ss($, ($) => ({
            'state': "selection",
            'value': Selection(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'transformation': return _pa.ss($, ($) => ({
            'state': "transformation",
            'value': ['verbose group', _pa.dictionary.literal({
                'source': _pa.deprecated_cc($['source'], ($) => Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'array': return _pa.ss($, ($) => ({
                            'state': "array",
                            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'map': return _pa.ss($, ($) => ({
                                        'state': "map",
                                        'value': Initialization(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })],
                        }))
                        case 'boolean': return _pa.ss($, ($) => ({
                            'state': "boolean",
                            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'not': return _pa.ss($, ($) => ({
                                        'state': "not",
                                        'value': ['nothing', null],
                                    }))
                                    case 'transform': return _pa.ss($, ($) => ({
                                        'state': "transform",
                                        'value': ['verbose group', _pa.dictionary.literal({
                                            'if false': _pa.deprecated_cc($['if false'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'if true': _pa.deprecated_cc($['if true'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                        })],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })],
                        }))
                        case 'dictionary': return _pa.ss($, ($) => ({
                            'state': "dictionary",
                            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'map': return _pa.ss($, ($) => ({
                                        'state': "map",
                                        'value': Initialization(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })],
                        }))
                        case 'function': return _pa.ss($, ($) => ({
                            'state': "function",
                            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'call': return _pa.ss($, ($) => ({
                                        'state': "call",
                                        'value': ['verbose group', _pa.dictionary.literal({
                                            'arguments': _pa.deprecated_cc($['arguments'], ($) => ['optional', $.transform(
                                                ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.map(($) => Initialization(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                ))]],
                                                () => ['not set', null]
                                            )]),
                                            'context': _pa.deprecated_cc($['context'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                        })],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })],
                        }))
                        case 'optional': return _pa.ss($, ($) => ({
                            'state': "optional",
                            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'map': return _pa.ss($, ($) => ({
                                        'state': "map",
                                        'value': Initialization(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    case 'transform': return _pa.ss($, ($) => ({
                                        'state': "transform",
                                        'value': ['verbose group', _pa.dictionary.literal({
                                            'if not set': _pa.deprecated_cc($['if not set'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'if set': _pa.deprecated_cc($['if set'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'temp resulting node': _pa.deprecated_cc($['temp resulting node'], ($) => ['optional', $.transform(
                                                ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
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
                            })],
                        }))
                        case 'tagged union': return _pa.ss($, ($) => ({
                            'state': "tagged union",
                            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'switch': return _pa.ss($, ($) => ({
                                        'state': "switch",
                                        'value': ['verbose group', _pa.dictionary.literal({
                                            'temp resulting node': _pa.deprecated_cc($['temp resulting node'], ($) => ['optional', $.transform(
                                                ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                )],
                                                () => ['not set', null]
                                            )]),
                                            'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                                switch ($[0]) {
                                                    case 'full': return _pa.ss($, ($) => ({
                                                        'state': "full",
                                                        'value': ['verbose group', _pa.dictionary.literal({
                                                            'cases': _pa.deprecated_cc($['cases'], ($) => ['dictionary', $.map(($) => Initialization(
                                                                $,
                                                                {
                                                                    'value serializers': $p['value serializers'],
                                                                }
                                                            ))]),
                                                        })],
                                                    }))
                                                    case 'partial': return _pa.ss($, ($) => ({
                                                        'state': "partial",
                                                        'value': ['verbose group', _pa.dictionary.literal({
                                                            'cases': _pa.deprecated_cc($['cases'], ($) => ['dictionary', $.map(($) => Initialization(
                                                                $,
                                                                {
                                                                    'value serializers': $p['value serializers'],
                                                                }
                                                            ))]),
                                                            'default': _pa.deprecated_cc($['default'], ($) => Initialization(
                                                                $,
                                                                {
                                                                    'value serializers': $p['value serializers'],
                                                                }
                                                            )),
                                                        })],
                                                    }))
                                                    default: return _pa.au($[0])
                                                }
                                            })]),
                                        })],
                                    }))
                                    default: return _pa.au($[0])
                                }
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Literal: _i_signatures._T_Literal = ($, $p) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'array': return _pa.ss($, ($) => ({
            'state': "array",
            'value': ['list', $.map(($) => Initialization(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'boolean': return _pa.ss($, ($) => ({
            'state': "boolean",
            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'false': return _pa.ss($, ($) => ({
                        'state': "false",
                        'value': ['nothing', null],
                    }))
                    case 'true': return _pa.ss($, ($) => ({
                        'state': "true",
                        'value': ['nothing', null],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'dictionary': return _pa.ss($, ($) => ({
            'state': "dictionary",
            'value': ['dictionary', $.map(($) => Initialization(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'function': return _pa.ss($, ($) => ({
            'state': "function",
            'value': ['verbose group', _pa.dictionary.literal({
                'initialization': _pa.deprecated_cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'temp has parameters': _pa.deprecated_cc($['temp has parameters'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'temp resulting node': _pa.deprecated_cc($['temp resulting node'], ($) => ['optional', $.transform(
                    ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )],
                    () => ['not set', null]
                )]),
            })],
        }))
        case 'group': return _pa.ss($, ($) => ({
            'state': "group",
            'value': ['dictionary', $.map(($) => Initialization(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'null': return _pa.ss($, ($) => ({
            'state': "null",
            'value': ['nothing', null],
        }))
        case 'number': return _pa.ss($, ($) => ({
            'state': "number",
            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'floting point': return _pa.ss($, ($) => ({
                        'state': "floting point",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })],
                    }))
                    case 'integer': return _pa.ss($, ($) => ({
                        'state': "integer",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })],
                    }))
                    case 'signed integer': return _pa.ss($, ($) => ({
                        'state': "signed integer",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'not set': return _pa.ss($, ($) => ({
                        'state': "not set",
                        'value': ['nothing', null],
                    }))
                    case 'set': return _pa.ss($, ($) => ({
                        'state': "set",
                        'value': Initialization(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ),
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['verbose group', _pa.dictionary.literal({
                'delimiter': _pa.deprecated_cc($['delimiter'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'backtick': return _pa.ss($, ($) => ({
                            'state': "backtick",
                            'value': ['nothing', null],
                        }))
                        case 'quote': return _pa.ss($, ($) => ({
                            'state': "quote",
                            'value': ['nothing', null],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
                'value': _pa.deprecated_cc($['value'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'tagged union': return _pa.ss($, ($) => ({
            'state': "tagged union",
            'value': ['verbose group', _pa.dictionary.literal({
                'case': _pa.deprecated_cc($['case'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'value': _pa.deprecated_cc($['value'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Module: _i_signatures._T_Module = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'type imports': _pa.deprecated_cc($['type imports'], ($) => _i_r_interface.Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'variable imports': _pa.deprecated_cc($['variable imports'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'tail': _pa.deprecated_cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'ancestor': return _pa.ss($, ($) => ({
                    'state': "ancestor",
                    'value': ['verbose group', _pa.dictionary.literal({
                        'dependency': _pa.deprecated_cc($['dependency'], ($) => ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]),
                        'number of steps': _pa.deprecated_cc($['number of steps'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })]),
                    })],
                }))
                case 'external': return _pa.ss($, ($) => ({
                    'state': "external",
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
                case 'sibling': return _pa.ss($, ($) => ({
                    'state': "sibling",
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
    'variables': _pa.deprecated_cc($['variables'], ($) => Variables(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Module_Set: _i_signatures._T_Module_Set = ($, $p) => ['dictionary', $.map(($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'module': return _pa.ss($, ($) => ({
            'state': "module",
            'value': Module(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'set': return _pa.ss($, ($) => ({
            'state': "set",
            'value': Module_Set(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
export const Selection: _i_signatures._T_Selection = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'start': _pa.deprecated_cc($['start'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'abort': return _pa.ss($, ($) => ({
                'state': "abort",
                'value': ['nothing', null],
            }))
            case 'argument': return _pa.ss($, ($) => ({
                'state': "argument",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'call': return _pa.ss($, ($) => ({
                'state': "call",
                'value': ['verbose group', _pa.dictionary.literal({
                    'arguments': _pa.deprecated_cc($['arguments'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.map(($) => Initialization(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ))]],
                        () => ['not set', null]
                    )]),
                    'context': _pa.deprecated_cc($['context'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'source': _pa.deprecated_cc($['source'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'context': return _pa.ss($, ($) => ({
                'state': "context",
                'value': ['nothing', null],
            }))
            case 'implement me': return _pa.ss($, ($) => ({
                'state': "implement me",
                'value': ['nothing', null],
            }))
            case 'imported variable': return _pa.ss($, ($) => ({
                'state': "imported variable",
                'value': ['verbose group', _pa.dictionary.literal({
                    'import': _pa.deprecated_cc($['import'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'variable': _pa.deprecated_cc($['variable'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })],
            }))
            case 'parameter': return _pa.ss($, ($) => ({
                'state': "parameter",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'transform optional value': return _pa.ss($, ($) => ({
                'state': "transform optional value",
                'value': ['verbose group', _pa.dictionary.literal({
                    'if not set': _pa.deprecated_cc($['if not set'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'if set': _pa.deprecated_cc($['if set'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'source': _pa.deprecated_cc($['source'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'variable': return _pa.ss($, ($) => ({
                'state': "variable",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'tail': _pa.deprecated_cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => ['dictionary', $.map(($) => ['nothing', null])]
export const Variables: _i_signatures._T_Variables = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary.literal({
    'initialization': _pa.deprecated_cc($['initialization'], ($) => Initialization(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.deprecated_cc($['type'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]),
})])]
