import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/interface/marshall"


export const Imports: _i_signatures._T_s_Imports = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
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
                        'value': _pd.implement_me(),
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
    'type arguments': _pa.cc($['type arguments'], ($) => Type_Arguments(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Module: _i_signatures._T_s_Module = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'imports': _pa.cc($['imports'], ($) => Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type parameters': _pa.cc($['type parameters'], ($) => Type_Parameters(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'types': _pa.cc($['types'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'parameters': _pa.cc($['parameters'], ($) => Type_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'type': _pa.cc($['type'], ($) => Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]),
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
export const Type: _i_signatures._T_s_Type = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'array': return _pa.ss($, ($) => ({
            'state': "array",
            'value': Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'boolean': return _pa.ss($, ($) => ({
            'state': "boolean",
            'value': ['nothing', null],
        }))
        case 'component': return _pa.ss($, ($) => ({
            'state': "component",
            'value': ['verbose group', _pa.dictionary_literal({
                'location': _pa.cc($['location'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'import': return _pa.ss($, ($) => ({
                            'state': "import",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'import': _pa.cc($['import'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'type': _pa.cc($['type'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
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
                'sub selection': _pa.cc($['sub selection'], ($) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'dictionary': return _pa.ss($, ($) => ({
                            'state': "dictionary",
                            'value': ['nothing', null],
                        }))
                        case 'group': return _pa.ss($, ($) => ({
                            'state': "group",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })],
                        }))
                        case 'list': return _pa.ss($, ($) => ({
                            'state': "list",
                            'value': ['nothing', null],
                        }))
                        case 'optional': return _pa.ss($, ($) => ({
                            'state': "optional",
                            'value': ['nothing', null],
                        }))
                        case 'state group': return _pa.ss($, ($) => ({
                            'state': "state group",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })])]),
                'type arguments': _pa.cc($['type arguments'], ($) => Type_Arguments(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'computed': return _pa.ss($, ($) => ({
            'state': "computed",
            'value': Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'dictionary': return _pa.ss($, ($) => ({
            'state': "dictionary",
            'value': Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'function': return _pa.ss($, ($) => ({
            'state': "function",
            'value': ['verbose group', _pa.dictionary_literal({
                'context': _pa.cc($['context'], ($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'parameters': _pa.cc($['parameters'], ($) => ['dictionary', $.map(($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
                'return': _pa.cc($['return'], ($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type parameters': _pa.cc($['type parameters'], ($) => Type_Parameters(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'group': return _pa.ss($, ($) => ({
            'state': "group",
            'value': ['dictionary', $.map(($) => Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'key value pair': return _pa.ss($, ($) => ({
            'state': "key value pair",
            'value': Type(
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
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'float': return _pa.ss($, ($) => ({
                        'state': "float",
                        'value': ['nothing', null],
                    }))
                    case 'integer': return _pa.ss($, ($) => ({
                        'state': "integer",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'signed': _pa.cc($['signed'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['boolean'](
                                    $,
                                    null
                                ),
                            })]),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'parameter': return _pa.ss($, ($) => ({
            'state': "parameter",
            'value': Type_Parameter_Selection(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['nothing', null],
        }))
        case 'tagged union': return _pa.ss($, ($) => ({
            'state': "tagged union",
            'value': ['dictionary', $.map(($) => Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        default: return _pa.au($[0])
    }
})]
export const Type_Arguments: _i_signatures._T_s_Type_Arguments = ($, $p) => ['dictionary', $.map(($) => Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Type_Parameter_Selection: _i_signatures._T_s_Type_Parameter_Selection = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'location': _pa.cc($['location'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'module': return _pa.ss($, ($) => ({
                'state': "module",
                'value': ['nothing', null],
            }))
            case 'type': return _pa.ss($, ($) => ({
                'state': "type",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'parameter': _pa.cc($['parameter'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Type_Parameters: _i_signatures._T_s_Type_Parameters = ($, $p) => ['dictionary', $.map(($) => ['nothing', null])]
