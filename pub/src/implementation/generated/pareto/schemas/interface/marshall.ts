import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/interface/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Type_Arguments: _i_signatures._T_Type_Arguments = ($, $p) => ['dictionary', $.map(($) => Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Imports: _i_signatures._T_Imports = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _p.dictionary.literal({
    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'external': return _p.ss($, ($) => ({
                'state': "external",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
            case 'ancestor': return _p.ss($, ($) => ({
                'state': "ancestor",
                'value': ['verbose group', _p.dictionary.literal({
                    'number of steps': _p.deprecated_cc($['number of steps'], ($) => ['text', ({
                        'delimiter': ['backtick', null],
                        'value': $p['value serializers']['default number'](
                            $,
                            null
                        ),
                    })]),
                    'dependency': _p.deprecated_cc($['dependency'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
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
    'tail': _p.deprecated_cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })])]),
    'type arguments': _p.deprecated_cc($['type arguments'], ($) => Type_Arguments(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => ['dictionary', $.map(($) => ['nothing', null])]
export const Module: _i_signatures._T_Module = ($, $p) => ['verbose group', _p.dictionary.literal({
    'imports': _p.deprecated_cc($['imports'], ($) => Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type parameters': _p.deprecated_cc($['type parameters'], ($) => Type_Parameters(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'types': _p.deprecated_cc($['types'], ($) => ['dictionary', $.map(($) => ['verbose group', _p.dictionary.literal({
        'parameters': _p.deprecated_cc($['parameters'], ($) => Type_Parameters(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'type': _p.deprecated_cc($['type'], ($) => Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]),
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
export const Type_Parameter_Selection: _i_signatures._T_Type_Parameter_Selection = ($, $p) => ['verbose group', _p.dictionary.literal({
    'location': _p.deprecated_cc($['location'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'module': return _p.ss($, ($) => ({
                'state': "module",
                'value': ['nothing', null],
            }))
            case 'type': return _p.ss($, ($) => ({
                'state': "type",
                'value': ['nothing', null],
            }))
            case 'function': return _p.ss($, ($) => ({
                'state': "function",
                'value': ['nothing', null],
            }))
            default: return _p.au($[0])
        }
    })]),
    'parameter': _p.deprecated_cc($['parameter'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Type: _i_signatures._T_Type = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'boolean': return _p.ss($, ($) => ({
            'state': "boolean",
            'value': ['nothing', null],
        }))
        case 'component': return _p.ss($, ($) => ({
            'state': "component",
            'value': ['verbose group', _p.dictionary.literal({
                'location': _p.deprecated_cc($['location'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'import': return _p.ss($, ($) => ({
                            'state': "import",
                            'value': ['verbose group', _p.dictionary.literal({
                                'import': _p.deprecated_cc($['import'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'type': _p.deprecated_cc($['type'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
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
                'type arguments': _p.deprecated_cc($['type arguments'], ($) => Type_Arguments(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'sub selection': _p.deprecated_cc($['sub selection'], ($) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => ({
                            'state': "dictionary",
                            'value': ['nothing', null],
                        }))
                        case 'group': return _p.ss($, ($) => ({
                            'state': "group",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })],
                        }))
                        case 'list': return _p.ss($, ($) => ({
                            'state': "list",
                            'value': ['nothing', null],
                        }))
                        case 'optional': return _p.ss($, ($) => ({
                            'state': "optional",
                            'value': ['nothing', null],
                        }))
                        case 'state group': return _p.ss($, ($) => ({
                            'state': "state group",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })])]),
            })],
        }))
        case 'computed': return _p.ss($, ($) => ({
            'state': "computed",
            'value': Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'dictionary': return _p.ss($, ($) => ({
            'state': "dictionary",
            'value': Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'function': return _p.ss($, ($) => ({
            'state': "function",
            'value': ['verbose group', _p.dictionary.literal({
                'type parameters': _p.deprecated_cc($['type parameters'], ($) => Type_Parameters(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'context': _p.deprecated_cc($['context'], ($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'parameters': _p.deprecated_cc($['parameters'], ($) => ['dictionary', $.map(($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))]),
                'return': _p.deprecated_cc($['return'], ($) => Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'group': return _p.ss($, ($) => ({
            'state': "group",
            'value': ['dictionary', $.map(($) => Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'array': return _p.ss($, ($) => ({
            'state': "array",
            'value': Type(
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
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'integer': return _p.ss($, ($) => ({
                        'state': "integer",
                        'value': ['verbose group', _p.dictionary.literal({
                            'signed': _p.deprecated_cc($['signed'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $p['value serializers']['boolean'](
                                    $,
                                    null
                                ),
                            })]),
                        })],
                    }))
                    case 'float': return _p.ss($, ($) => ({
                        'state': "float",
                        'value': ['nothing', null],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'optional': return _p.ss($, ($) => ({
            'state': "optional",
            'value': Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'parameter': return _p.ss($, ($) => ({
            'state': "parameter",
            'value': Type_Parameter_Selection(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'tagged union': return _p.ss($, ($) => ({
            'state': "tagged union",
            'value': ['dictionary', $.map(($) => Type(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'string': return _p.ss($, ($) => ({
            'state': "string",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
