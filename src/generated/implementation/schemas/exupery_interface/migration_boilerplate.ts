import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/exupery_interface/unresolved"
import * as _i_signatures from "../../../interface/schemas/exupery_interface/migration_boilerplate"


export const Imports: _i_signatures._T_Imports = ($) => $.map(($) => ({
    'tail': _pa.cc($['tail'], ($) => $.map(($) => $)),
    'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Imports.D._type => {
        switch ($[0]) {
            case 'ancestor': return _pa.ss($, ($) => ['ancestor', ({
                'dependency': _pa.cc($['dependency'], ($) => $),
                'number of steps': _pa.cc($['number of steps'], ($) => $),
            })])
            case 'external': return _pa.ss($, ($) => ['external', $])
            case 'sibling': return _pa.ss($, ($) => ['sibling', $])
            default: return _pa.au($[0])
        }
    })),
    'type arguments': _pa.cc($['type arguments'], ($) => Type_Arguments(
        $,
        null
    )),
}))
export const Module: _i_signatures._T_Module = ($) => ({
    'imports': _pa.cc($['imports'], ($) => Imports(
        $,
        null
    )),
    'type parameters': _pa.cc($['type parameters'], ($) => Type_Parameters(
        $,
        null
    )),
    'types': _pa.cc($['types'], ($) => $.map(($) => ({
        'parameters': _pa.cc($['parameters'], ($) => Type_Parameters(
            $,
            null
        )),
        'type': _pa.cc($['type'], ($) => Type(
            $,
            null
        )),
    }))),
})
export const Module_Set: _i_signatures._T_Module_Set = ($) => $.map(($) => _pa.cc($, ($): _i_out._T_Module_Set.D => {
    switch ($[0]) {
        case 'module': return _pa.ss($, ($) => ['module', Module(
            $,
            null
        )])
        case 'set': return _pa.ss($, ($) => ['set', Module_Set(
            $,
            null
        )])
        default: return _pa.au($[0])
    }
}))
export const Type: _i_signatures._T_Type = ($) => _pa.cc($, ($): _i_out._T_Type => {
    switch ($[0]) {
        case 'array': return _pa.ss($, ($) => ['array', Type(
            $,
            null
        )])
        case 'boolean': return _pa.ss($, ($) => ['boolean', null])
        case 'component': return _pa.ss($, ($) => ['component', ({
            'location': _pa.cc($['location'], ($) => _pa.cc($, ($): _i_out._T_Type.SG.component.location => {
                switch ($[0]) {
                    case 'import': return _pa.ss($, ($) => ['import', ({
                        'import': _pa.cc($['import'], ($) => $),
                        'type': _pa.cc($['type'], ($) => $),
                    })])
                    case 'sibling': return _pa.ss($, ($) => ['sibling', $])
                    default: return _pa.au($[0])
                }
            })),
            'sub selection': _pa.cc($['sub selection'], ($) => $.map(($) => _pa.cc($, ($): _i_out._T_Type.SG.component.sub_selection.L => {
                switch ($[0]) {
                    case 'dictionary': return _pa.ss($, ($) => ['dictionary', null])
                    case 'group': return _pa.ss($, ($) => ['group', $])
                    case 'list': return _pa.ss($, ($) => ['list', null])
                    case 'optional': return _pa.ss($, ($) => ['optional', null])
                    case 'state group': return _pa.ss($, ($) => ['state group', $])
                    default: return _pa.au($[0])
                }
            }))),
            'type arguments': _pa.cc($['type arguments'], ($) => Type_Arguments(
                $,
                null
            )),
        })])
        case 'computed': return _pa.ss($, ($) => ['computed', Type(
            $,
            null
        )])
        case 'dictionary': return _pa.ss($, ($) => ['dictionary', Type(
            $,
            null
        )])
        case 'function': return _pa.ss($, ($) => ['function', ({
            'context': _pa.cc($['context'], ($) => Type(
                $,
                null
            )),
            'parameters': _pa.cc($['parameters'], ($) => $.map(($) => Type(
                $,
                null
            ))),
            'return': _pa.cc($['return'], ($) => Type(
                $,
                null
            )),
            'type parameters': _pa.cc($['type parameters'], ($) => Type_Parameters(
                $,
                null
            )),
        })])
        case 'group': return _pa.ss($, ($) => ['group', $.map(($) => Type(
            $,
            null
        ))])
        case 'key value pair': return _pa.ss($, ($) => ['key value pair', Type(
            $,
            null
        )])
        case 'null': return _pa.ss($, ($) => ['null', null])
        case 'number': return _pa.ss($, ($) => ['number', _pa.cc($, ($): _i_out._T_Type.SG._number => {
            switch ($[0]) {
                case 'float': return _pa.ss($, ($) => ['float', null])
                case 'integer': return _pa.ss($, ($) => ['integer', ({
                    'signed': _pa.cc($['signed'], ($) => $),
                })])
                default: return _pa.au($[0])
            }
        })])
        case 'optional': return _pa.ss($, ($) => ['optional', Type(
            $,
            null
        )])
        case 'parameter': return _pa.ss($, ($) => ['parameter', Type_Parameter_Selection(
            $,
            null
        )])
        case 'string': return _pa.ss($, ($) => ['string', null])
        case 'tagged union': return _pa.ss($, ($) => ['tagged union', $.map(($) => Type(
            $,
            null
        ))])
        default: return _pa.au($[0])
    }
})
export const Type_Arguments: _i_signatures._T_Type_Arguments = ($) => $.map(($) => Type(
    $,
    null
))
export const Type_Parameter_Selection: _i_signatures._T_Type_Parameter_Selection = ($) => ({
    'location': _pa.cc($['location'], ($) => _pa.cc($, ($): _i_out._T_Type_Parameter_Selection.location => {
        switch ($[0]) {
            case 'module': return _pa.ss($, ($) => ['module', null])
            case 'type': return _pa.ss($, ($) => ['type', null])
            default: return _pa.au($[0])
        }
    })),
    'parameter': _pa.cc($['parameter'], ($) => $),
})
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($) => $.map(($) => null)
