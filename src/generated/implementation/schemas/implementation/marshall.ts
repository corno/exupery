import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_r_interface from "../interface/marshall"
import * as _i_signatures from "../../../interface/schemas/implementation/marshall"


export const Initialization: _i_signatures._T_s_Initialization = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'block': return _pa.ss($, ($) => ({
            'state': "block",
            'value': ['verbose group', _pa.dictionary_literal({
                'initialization': _pa.cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'temp ordered variables': _pa.cc($['temp ordered variables'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'initialization': _pa.cc($['initialization'], ($) => Initialization(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'name': _pa.cc($['name'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'type': _pa.cc($['type'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        )],
                        () => ['not set', null]
                    )]),
                })])]),
                'variables': _pa.cc($['variables'], ($) => Variables(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'change context': return _pa.ss($, ($) => ({
            'state': "change context",
            'value': ['verbose group', _pa.dictionary_literal({
                'initialization': _pa.cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'new context': _pa.cc($['new context'], ($) => Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'literal': return _pa.ss($, ($) => ({
            'state': "literal",
            'value': ['verbose group', _pa.dictionary_literal({
                'value': _pa.cc($['value'], ($) => Literal(
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
            'value': ['verbose group', _pa.dictionary_literal({
                'source': _pa.cc($['source'], ($) => Selection(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'array': return _pa.ss($, ($) => ({
                            'state': "array",
                            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
                            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'not': return _pa.ss($, ($) => ({
                                        'state': "not",
                                        'value': ['nothing', null],
                                    }))
                                    case 'transform': return _pa.ss($, ($) => ({
                                        'state': "transform",
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'if false': _pa.cc($['if false'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'if true': _pa.cc($['if true'], ($) => Initialization(
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
                            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
                            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'call': return _pa.ss($, ($) => ({
                                        'state': "call",
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'arguments': _pa.cc($['arguments'], ($) => ['optional', $.transform(
                                                ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.map(($) => Initialization(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                ))]],
                                                () => ['not set', null]
                                            )]),
                                            'context': _pa.cc($['context'], ($) => Initialization(
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
                            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'if not set': _pa.cc($['if not set'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'if set': _pa.cc($['if set'], ($) => Initialization(
                                                $,
                                                {
                                                    'value serializers': $p['value serializers'],
                                                }
                                            )),
                                            'temp resulting node': _pa.cc($['temp resulting node'], ($) => ['optional', $.transform(
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
                            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                switch ($[0]) {
                                    case 'switch': return _pa.ss($, ($) => ({
                                        'state': "switch",
                                        'value': ['verbose group', _pa.dictionary_literal({
                                            'temp resulting node': _pa.cc($['temp resulting node'], ($) => ['optional', $.transform(
                                                ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
                                                    $,
                                                    {
                                                        'value serializers': $p['value serializers'],
                                                    }
                                                )],
                                                () => ['not set', null]
                                            )]),
                                            'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                                                switch ($[0]) {
                                                    case 'full': return _pa.ss($, ($) => ({
                                                        'state': "full",
                                                        'value': ['verbose group', _pa.dictionary_literal({
                                                            'cases': _pa.cc($['cases'], ($) => ['dictionary', $.map(($) => Initialization(
                                                                $,
                                                                {
                                                                    'value serializers': $p['value serializers'],
                                                                }
                                                            ))]),
                                                        })],
                                                    }))
                                                    case 'partial': return _pa.ss($, ($) => ({
                                                        'state': "partial",
                                                        'value': ['verbose group', _pa.dictionary_literal({
                                                            'cases': _pa.cc($['cases'], ($) => ['dictionary', $.map(($) => Initialization(
                                                                $,
                                                                {
                                                                    'value serializers': $p['value serializers'],
                                                                }
                                                            ))]),
                                                            'default': _pa.cc($['default'], ($) => Initialization(
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
export const Literal: _i_signatures._T_s_Literal = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
            'value': ['verbose group', _pa.dictionary_literal({
                'initialization': _pa.cc($['initialization'], ($) => Initialization(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'temp has parameters': _pa.cc($['temp has parameters'], ($) => ['text', ({
                    'delimiter': ['backtick', null],
                    'value': $p['value serializers']['boolean'](
                        $,
                        null
                    ),
                })]),
                'temp resulting node': _pa.cc($['temp resulting node'], ($) => ['optional', $.transform(
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
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'floting point': return _pa.ss($, ($) => ({
                        'state': "floting point",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': "FIXME NUMBER",
                        })],
                    }))
                    case 'integer': return _pa.ss($, ($) => ({
                        'state': "integer",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': "FIXME NUMBER",
                        })],
                    }))
                    case 'signed integer': return _pa.ss($, ($) => ({
                        'state': "signed integer",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': "FIXME NUMBER",
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
            'value': ['verbose group', _pa.dictionary_literal({
                'delimiter': _pa.cc($['delimiter'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
                'value': _pa.cc($['value'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'tagged union': return _pa.ss($, ($) => ({
            'state': "tagged union",
            'value': ['verbose group', _pa.dictionary_literal({
                'case': _pa.cc($['case'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
                'value': _pa.cc($['value'], ($) => Initialization(
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
export const Module: _i_signatures._T_s_Module = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'type imports': _pa.cc($['type imports'], ($) => _i_r_interface.Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'variable imports': _pa.cc($['variable imports'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'tail': _pa.cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })])]),
        'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'ancestor': return _pa.ss($, ($) => ({
                    'state': "ancestor",
                    'value': ['verbose group', _pa.dictionary_literal({
                        'dependency': _pa.cc($['dependency'], ($) => ['text', ({
                            'delimiter': ['quote', null],
                            'value': $,
                        })]),
                        'number of steps': _pa.cc($['number of steps'], ($) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': "FIXME NUMBER",
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
    'variables': _pa.cc($['variables'], ($) => Variables(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Module_Set: _i_signatures._T_s_Module_Set = ($, $p) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
export const Selection: _i_signatures._T_s_Selection = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'start': _pa.cc($['start'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
                'value': ['verbose group', _pa.dictionary_literal({
                    'arguments': _pa.cc($['arguments'], ($) => ['optional', $.transform(
                        ($): _i_out._T_Value.SG.optional => ['set', ['dictionary', $.map(($) => Initialization(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ))]],
                        () => ['not set', null]
                    )]),
                    'context': _pa.cc($['context'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'source': _pa.cc($['source'], ($) => Selection(
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
                'value': ['verbose group', _pa.dictionary_literal({
                    'import': _pa.cc($['import'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'variable': _pa.cc($['variable'], ($) => ['text', ({
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
                'value': ['verbose group', _pa.dictionary_literal({
                    'if not set': _pa.cc($['if not set'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'if set': _pa.cc($['if set'], ($) => Selection(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'source': _pa.cc($['source'], ($) => Selection(
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
    'tail': _pa.cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
})]
export const Type_Parameters: _i_signatures._T_s_Type_Parameters = ($, $p) => ['dictionary', $.map(($) => ['nothing', null])]
export const Variables: _i_signatures._T_s_Variables = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'initialization': _pa.cc($['initialization'], ($) => Initialization(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.cc($['type'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', _i_r_interface.Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]),
})])]
