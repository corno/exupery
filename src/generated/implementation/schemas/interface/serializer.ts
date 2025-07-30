import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/interface/serializer"


export const Imports: _i_signatures._T_Imports = ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'tail': _pa.cc($['tail'], ($) => ['list', $.map(($) => ['text', ({
        'delimiter': ['quote', null],
        'value': "FIXME TEXT",
    })])]),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'ancestor': return _pa.ss($, ($) => ({
                'state': "ancestor",
                'value': ['verbose group', _pa.dictionary_literal({
                    'dependency': _pa.cc($['dependency'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': "FIXME TEXT",
                    })]),
                    'number of steps': _pa.cc($['number of steps'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': "FIXME NUMBER",
                    })]),
                })],
            }))
            case 'external': return _pa.ss($, ($) => ({
                'state': "external",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': "FIXME TEXT",
                })],
            }))
            case 'sibling': return _pa.ss($, ($) => ({
                'state': "sibling",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': "FIXME TEXT",
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'type arguments': _pa.cc($['type arguments'], ($) => Type_Arguments(
        $,
        null
    )),
})])]
export const Module: _i_signatures._T_Module = ($) => ['verbose group', _pa.dictionary_literal({
    'imports': _pa.cc($['imports'], ($) => Imports(
        $,
        null
    )),
    'type parameters': _pa.cc($['type parameters'], ($) => Type_Parameters(
        $,
        null
    )),
    'types': _pa.cc($['types'], ($) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'parameters': _pa.cc($['parameters'], ($) => Type_Parameters(
            $,
            null
        )),
        'type': _pa.cc($['type'], ($) => Type(
            $,
            null
        )),
    })])]),
})]
export const Module_Set: _i_signatures._T_Module_Set = ($) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'module': return _pa.ss($, ($) => ({
            'state': "module",
            'value': Module(
                $,
                null
            ),
        }))
        case 'set': return _pa.ss($, ($) => ({
            'state': "set",
            'value': Module_Set(
                $,
                null
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
export const Type: _i_signatures._T_Type = ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'array': return _pa.ss($, ($) => ({
            'state': "array",
            'value': Type(
                $,
                null
            ),
        }))
        case 'boolean': return _pa.ss($, ($) => ({
            'state': "boolean",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': "FIXME NOTHING",
            })],
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
                                    'value': "FIXME TEXT",
                                })]),
                                'type': _pa.cc($['type'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': "FIXME TEXT",
                                })]),
                            })],
                        }))
                        case 'sibling': return _pa.ss($, ($) => ({
                            'state': "sibling",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': "FIXME TEXT",
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
                'sub selection': _pa.cc($['sub selection'], ($) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'dictionary': return _pa.ss($, ($) => ({
                            'state': "dictionary",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': "FIXME NOTHING",
                            })],
                        }))
                        case 'group': return _pa.ss($, ($) => ({
                            'state': "group",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': "FIXME TEXT",
                            })],
                        }))
                        case 'list': return _pa.ss($, ($) => ({
                            'state': "list",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': "FIXME NOTHING",
                            })],
                        }))
                        case 'optional': return _pa.ss($, ($) => ({
                            'state': "optional",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': "FIXME NOTHING",
                            })],
                        }))
                        case 'state group': return _pa.ss($, ($) => ({
                            'state': "state group",
                            'value': ['text', ({
                                'delimiter': ['quote', null],
                                'value': "FIXME TEXT",
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })])]),
                'type arguments': _pa.cc($['type arguments'], ($) => Type_Arguments(
                    $,
                    null
                )),
            })],
        }))
        case 'computed': return _pa.ss($, ($) => ({
            'state': "computed",
            'value': Type(
                $,
                null
            ),
        }))
        case 'dictionary': return _pa.ss($, ($) => ({
            'state': "dictionary",
            'value': Type(
                $,
                null
            ),
        }))
        case 'function': return _pa.ss($, ($) => ({
            'state': "function",
            'value': ['verbose group', _pa.dictionary_literal({
                'context': _pa.cc($['context'], ($) => Type(
                    $,
                    null
                )),
                'parameters': _pa.cc($['parameters'], ($) => ['dictionary', $.map(($) => Type(
                    $,
                    null
                ))]),
                'return': _pa.cc($['return'], ($) => Type(
                    $,
                    null
                )),
                'type parameters': _pa.cc($['type parameters'], ($) => Type_Parameters(
                    $,
                    null
                )),
            })],
        }))
        case 'group': return _pa.ss($, ($) => ({
            'state': "group",
            'value': ['dictionary', $.map(($) => Type(
                $,
                null
            ))],
        }))
        case 'key value pair': return _pa.ss($, ($) => ({
            'state': "key value pair",
            'value': Type(
                $,
                null
            ),
        }))
        case 'null': return _pa.ss($, ($) => ({
            'state': "null",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': "FIXME NOTHING",
            })],
        }))
        case 'number': return _pa.ss($, ($) => ({
            'state': "number",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'float': return _pa.ss($, ($) => ({
                        'state': "float",
                        'value': ['text', ({
                            'delimiter': ['quote', null],
                            'value': "FIXME NOTHING",
                        })],
                    }))
                    case 'integer': return _pa.ss($, ($) => ({
                        'state': "integer",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'signed': _pa.cc($['signed'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': "FIXME BOOLEAN",
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
                null
            ),
        }))
        case 'parameter': return _pa.ss($, ($) => ({
            'state': "parameter",
            'value': Type_Parameter_Selection(
                $,
                null
            ),
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': "FIXME NOTHING",
            })],
        }))
        case 'tagged union': return _pa.ss($, ($) => ({
            'state': "tagged union",
            'value': ['dictionary', $.map(($) => Type(
                $,
                null
            ))],
        }))
        default: return _pa.au($[0])
    }
})]
export const Type_Arguments: _i_signatures._T_Type_Arguments = ($) => ['dictionary', $.map(($) => Type(
    $,
    null
))]
export const Type_Parameter_Selection: _i_signatures._T_Type_Parameter_Selection = ($) => ['verbose group', _pa.dictionary_literal({
    'location': _pa.cc($['location'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'module': return _pa.ss($, ($) => ({
                'state': "module",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': "FIXME NOTHING",
                })],
            }))
            case 'type': return _pa.ss($, ($) => ({
                'state': "type",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': "FIXME NOTHING",
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
    'parameter': _pa.cc($['parameter'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': "FIXME TEXT",
    })]),
})]
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($) => ['dictionary', $.map(($) => ['text', ({
    'delimiter': ['quote', null],
    'value': "FIXME NOTHING",
})])]
