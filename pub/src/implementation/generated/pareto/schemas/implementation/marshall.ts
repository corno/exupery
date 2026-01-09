import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/implementation/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_interface from "../interface/marshall"


export const Variables: _i_signatures._T_Variables = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _p.dictionary.literal({
    'type': _p.deprecated_cc($['type'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]),
    'initialization': _p.deprecated_cc($['initialization'], ($) => Initialization(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Module: _i_signatures._T_Module = ($, $p) => ['verbose group', _p.dictionary.literal({
    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'serializer': return _p.ss($, ($) => ({
                'state': "serializer",
                'value': ['nothing', null],
            }))
            case 'deserializer': return _p.ss($, ($) => ({
                'state': "deserializer",
                'value': ['nothing', null],
            }))
            case 'transformer': return _p.ss($, ($) => ({
                'state': "transformer",
                'value': ['nothing', null],
            }))
            case 'refiner': return _p.ss($, ($) => ({
                'state': "refiner",
                'value': ['nothing', null],
            }))
            default: return _p.au($[0])
        }
    })]),
    'type imports': _p.deprecated_cc($['type imports'], ($) => _i_r_interface.Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'variable imports': _p.deprecated_cc($['variable imports'], ($) => ['dictionary', $.map(($) => ['verbose group', _p.dictionary.literal({
        'tail': _p.deprecated_cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'ancestor': return _p.ss($, ($) => ({
                    'state': "ancestor",
                    'value': ['verbose group', _p.dictionary.literal({
                        'dependency': _p.deprecated_cc($['dependency'], ($) => ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]),
                        'number of steps': _p.deprecated_cc($['number of steps'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })]),
                    })],
                }))
                case 'external': return _p.ss($, ($) => ({
                    'state': "external",
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
                case 'sibling': return _p.ss($, ($) => ({
                    'state': "sibling",
                    'value': ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
    })])]),
    'variables': _p.deprecated_cc($['variables'], ($) => Variables(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Module_Set: _i_signatures._T_Module_Set = ($, $p) => ['dictionary', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'module': return _p.ss($, ($) => ({
            'state': "module",
            'value': Module(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'set': return _p.ss($, ($) => ({
            'state': "set",
            'value': Module_Set(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _p.au($[0])
    }
})])]
export const Literal: _i_signatures._T_Literal = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'array': return _p.ss($, ($) => ({
            'state': "array",
            'value': ['list', $.map(($) => Initialization(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'boolean': return _p.ss($, ($) => ({
            'state': "boolean",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'false': return _p.ss($, ($) => ({
                        'state': "false",
                        'value': ['nothing', null],
                    }))
                    case 'true': return _p.ss($, ($) => ({
                        'state': "true",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'dictionary': return _p.ss($, ($) => ({
            'state': "dictionary",
            'value': ['dictionary', $.map(($) => Initialization(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'function': return _p.ss($, ($) => ({
            'state': "function",
            'value': ['verbose group', _p.dictionary.literal({
                'initialization': _p.deprecated_cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'temp has parameters': _p.deprecated_cc($['temp has parameters'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($) => ['optional', $.transform(
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
        case 'group': return _p.ss($, ($) => ({
            'state': "group",
            'value': ['dictionary', $.map(($) => Initialization(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'null': return _p.ss($, ($) => ({
            'state': "null",
            'value': ['nothing', null],
        }))
        case 'number': return _p.ss($, ($) => ({
            'state': "number",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'floting point': return _p.ss($, ($) => ({
                        'state': "floting point",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })],
                    }))
                    case 'integer': return _p.ss($, ($) => ({
                        'state': "integer",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })],
                    }))
                    case 'signed integer': return _p.ss($, ($) => ({
                        'state': "signed integer",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'optional': return _p.ss($, ($) => ({
            'state': "optional",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'not set': return _p.ss($, ($) => ({
                        'state': "not set",
                        'value': ['nothing', null],
                    }))
                    case 'set': return _p.ss($, ($) => ({
                        'state': "set",
                        'value': Initialization(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ),
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'string': return _p.ss($, ($) => ({
            'state': "string",
            'value': ['verbose group', _p.dictionary.literal({
                'delimiter': _p.deprecated_cc($['delimiter'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'backtick': return _p.ss($, ($) => ({
                            'state': "backtick",
                            'value': ['nothing', null],
                        }))
                        case 'quote': return _p.ss($, ($) => ({
                            'state': "quote",
                            'value': ['nothing', null],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
                'value': _p.deprecated_cc($['value'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'tagged union': return _p.ss($, ($) => ({
            'state': "tagged union",
            'value': ['verbose group', _p.dictionary.literal({
                'case': _p.deprecated_cc($['case'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'value': _p.deprecated_cc($['value'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        default: return _p.au($[0])
    }
})]
export const Initialization: _i_signatures._T_Initialization = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'block': return _p.ss($, ($) => ({
            'state': "block",
            'value': ['verbose group', _p.dictionary.literal({
                'variables': _p.deprecated_cc($['variables'], ($) => Variables(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'temp ordered variables': _p.deprecated_cc($['temp ordered variables'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                    'name': _p.deprecated_cc($['name'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'type': _p.deprecated_cc($['type'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                    'initialization': _p.deprecated_cc($['initialization'], ($) => Initialization(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])]),
                'initialization': _p.deprecated_cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'change context': return _p.ss($, ($) => ({
            'state': "change context",
            'value': ['verbose group', _p.dictionary.literal({
                'new context': _p.deprecated_cc($['new context'], ($) => Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'initialization': _p.deprecated_cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'literal': return _p.ss($, ($) => ({
            'state': "literal",
            'value': ['verbose group', _p.dictionary.literal({
                'value': _p.deprecated_cc($['value'], ($) => Literal(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'selection': return _p.ss($, ($) => ({
            'state': "selection",
            'value': Selection(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'transformation': return _p.ss($, ($) => ({
            'state': "transformation",
            'value': ['verbose group', _p.dictionary.literal({
                'source': _p.deprecated_cc($['source'], ($) => Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'array': return _p.ss($, ($) => ({
                            'state': "array",
                            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'map': return _p.ss($, ($) => ({
                                        'state': "map",
                                        'value': Initialization(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    default: return _p.au($[0])
                                }
                            })],
                        }))
                        case 'boolean': return _p.ss($, ($) => ({
                            'state': "boolean",
                            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'not': return _p.ss($, ($) => ({
                                        'state': "not",
                                        'value': ['nothing', null],
                                    }))
                                    case 'transform': return _p.ss($, ($) => ({
                                        'state': "transform",
                                        'value': ['verbose group', _p.dictionary.literal({
                                            'if false': _p.deprecated_cc($['if false'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'if true': _p.deprecated_cc($['if true'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                        })],
                                    }))
                                    default: return _p.au($[0])
                                }
                            })],
                        }))
                        case 'dictionary': return _p.ss($, ($) => ({
                            'state': "dictionary",
                            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'map': return _p.ss($, ($) => ({
                                        'state': "map",
                                        'value': Initialization(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    default: return _p.au($[0])
                                }
                            })],
                        }))
                        case 'function': return _p.ss($, ($) => ({
                            'state': "function",
                            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'call': return _p.ss($, ($) => ({
                                        'state': "call",
                                        'value': ['verbose group', _p.dictionary.literal({
                                            'context': _p.deprecated_cc($['context'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'arguments': _p.deprecated_cc($['arguments'], ($) => ['optional', $.transform(
                                                ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.map(($) => Initialization(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                ))]],
                                                () => ['not set', null]
                                            )]),
                                        })],
                                    }))
                                    default: return _p.au($[0])
                                }
                            })],
                        }))
                        case 'optional': return _p.ss($, ($) => ({
                            'state': "optional",
                            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'map': return _p.ss($, ($) => ({
                                        'state': "map",
                                        'value': Initialization(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        ),
                                    }))
                                    case 'transform': return _p.ss($, ($) => ({
                                        'state': "transform",
                                        'value': ['verbose group', _p.dictionary.literal({
                                            'if not set': _p.deprecated_cc($['if not set'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'if set': _p.deprecated_cc($['if set'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($) => ['optional', $.transform(
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
                                    default: return _p.au($[0])
                                }
                            })],
                        }))
                        case 'tagged union': return _p.ss($, ($) => ({
                            'state': "tagged union",
                            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'switch': return _p.ss($, ($) => ({
                                        'state': "switch",
                                        'value': ['verbose group', _p.dictionary.literal({
                                            'temp resulting node': _p.deprecated_cc($['temp resulting node'], ($) => ['optional', $.transform(
                                                ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                )],
                                                () => ['not set', null]
                                            )]),
                                            'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                                                switch ($[0]) {
                                                    case 'partial': return _p.ss($, ($) => ({
                                                        'state': "partial",
                                                        'value': ['verbose group', _p.dictionary.literal({
                                                            'cases': _p.deprecated_cc($['cases'], ($) => ['dictionary', $.map(($) => Initialization(
                                                                $,
                                                                {
                                                                    'value serializers': $p['value serializers'],
                                                                }
                                                            ))]),
                                                            'default': _p.deprecated_cc($['default'], ($) => Initialization(
                                                                $,
                                                                {
                                                                    'value serializers': $p['value serializers'],
                                                                }
                                                            )),
                                                        })],
                                                    }))
                                                    case 'full': return _p.ss($, ($) => ({
                                                        'state': "full",
                                                        'value': ['verbose group', _p.dictionary.literal({
                                                            'cases': _p.deprecated_cc($['cases'], ($) => ['dictionary', $.map(($) => Initialization(
                                                                $,
                                                                {
                                                                    'value serializers': $p['value serializers'],
                                                                }
                                                            ))]),
                                                        })],
                                                    }))
                                                    default: return _p.au($[0])
                                                }
                                            })]),
                                        })],
                                    }))
                                    default: return _p.au($[0])
                                }
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })],
        }))
        default: return _p.au($[0])
    }
})]
export const Selection: _i_signatures._T_Selection = ($, $p) => ['verbose group', _p.dictionary.literal({
    'start': _p.deprecated_cc($['start'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'abort': return _p.ss($, ($) => ({
                'state': "abort",
                'value': ['nothing', null],
            }))
            case 'transform optional value': return _p.ss($, ($) => ({
                'state': "transform optional value",
                'value': ['verbose group', _p.dictionary.literal({
                    'source': _p.deprecated_cc($['source'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'if not set': _p.deprecated_cc($['if not set'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'if set': _p.deprecated_cc($['if set'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'call': return _p.ss($, ($) => ({
                'state': "call",
                'value': ['verbose group', _p.dictionary.literal({
                    'source': _p.deprecated_cc($['source'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'context': _p.deprecated_cc($['context'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'arguments': _p.deprecated_cc($['arguments'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.map(($) => Initialization(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ))]],
                        () => ['not set', null]
                    )]),
                })],
            }))
            case 'implement me': return _p.ss($, ($) => ({
                'state': "implement me",
                'value': ['nothing', null],
            }))
            case 'argument': return _p.ss($, ($) => ({
                'state': "argument",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'context': return _p.ss($, ($) => ({
                'state': "context",
                'value': ['nothing', null],
            }))
            case 'variable': return _p.ss($, ($) => ({
                'state': "variable",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'parameter': return _p.ss($, ($) => ({
                'state': "parameter",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'imported variable': return _p.ss($, ($) => ({
                'state': "imported variable",
                'value': ['verbose group', _p.dictionary.literal({
                    'import': _p.deprecated_cc($['import'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'variable': _p.deprecated_cc($['variable'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })],
            }))
            default: return _p.au($[0])
        }
    })]),
    'tail': _p.deprecated_cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
