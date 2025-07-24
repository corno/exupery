import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/exupery_implementation/unresolved"
import * as _i_r_interface from "../exupery_interface/migration_boilerplate"
import * as _i_signatures from "../../../interface/schemas/exupery_implementation/migration_boilerplate"


export const Initialization: _i_signatures._T_Initialization = ($) => _pa.cc($, ($): _i_out._T_Initialization => {
    switch ($[0]) {
        case 'block': return _pa.ss($, ($) => ['block', ({
            'initialization': _pa.cc($['initialization'], ($) => Initialization(
                $,
                null
            )),
            'temp ordered variables': _pa.cc($['temp ordered variables'], ($) => $.map(($) => ({
                'initialization': _pa.cc($['initialization'], ($) => Initialization(
                    $,
                    null
                )),
                'name': _pa.cc($['name'], ($) => $),
                'type': _pa.cc($['type'], ($) => $.map(($) => _i_r_interface.Type(
                    $,
                    null
                ))),
            }))),
            'variables': _pa.cc($['variables'], ($) => Variables(
                $,
                null
            )),
        })])
        case 'change context': return _pa.ss($, ($) => ['change context', ({
            'initialization': _pa.cc($['initialization'], ($) => Initialization(
                $,
                null
            )),
            'new context': _pa.cc($['new context'], ($) => Selection(
                $,
                null
            )),
        })])
        case 'literal': return _pa.ss($, ($) => ['literal', ({
            'value': _pa.cc($['value'], ($) => Literal(
                $,
                null
            )),
        })])
        case 'selection': return _pa.ss($, ($) => ['selection', Selection(
            $,
            null
        )])
        case 'transformation': return _pa.ss($, ($) => ['transformation', ({
            'source': _pa.cc($['source'], ($) => Selection(
                $,
                null
            )),
            'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Initialization.SG.transformation._type => {
                switch ($[0]) {
                    case 'array': return _pa.ss($, ($) => ['array', _pa.cc($, ($): _i_out._T_Initialization.SG.transformation._type.SG.array => {
                        switch ($[0]) {
                            case 'map': return _pa.ss($, ($) => ['map', Initialization(
                                $,
                                null
                            )])
                            default: return _pa.au($[0])
                        }
                    })])
                    case 'boolean': return _pa.ss($, ($) => ['boolean', _pa.cc($, ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean => {
                        switch ($[0]) {
                            case 'not': return _pa.ss($, ($) => ['not', null])
                            case 'transform': return _pa.ss($, ($) => ['transform', ({
                                'if false': _pa.cc($['if false'], ($) => Initialization(
                                    $,
                                    null
                                )),
                                'if true': _pa.cc($['if true'], ($) => Initialization(
                                    $,
                                    null
                                )),
                            })])
                            default: return _pa.au($[0])
                        }
                    })])
                    case 'dictionary': return _pa.ss($, ($) => ['dictionary', _pa.cc($, ($): _i_out._T_Initialization.SG.transformation._type.SG.dictionary => {
                        switch ($[0]) {
                            case 'map': return _pa.ss($, ($) => ['map', Initialization(
                                $,
                                null
                            )])
                            default: return _pa.au($[0])
                        }
                    })])
                    case 'function': return _pa.ss($, ($) => ['function', _pa.cc($, ($): _i_out._T_Initialization.SG.transformation._type.SG._function => {
                        switch ($[0]) {
                            case 'call': return _pa.ss($, ($) => ['call', ({
                                'arguments': _pa.cc($['arguments'], ($) => $.map(($) => $.map(($) => Initialization(
                                    $,
                                    null
                                )))),
                                'context': _pa.cc($['context'], ($) => Initialization(
                                    $,
                                    null
                                )),
                            })])
                            default: return _pa.au($[0])
                        }
                    })])
                    case 'optional': return _pa.ss($, ($) => ['optional', _pa.cc($, ($): _i_out._T_Initialization.SG.transformation._type.SG.optional => {
                        switch ($[0]) {
                            case 'map': return _pa.ss($, ($) => ['map', Initialization(
                                $,
                                null
                            )])
                            case 'transform': return _pa.ss($, ($) => ['transform', ({
                                'if not set': _pa.cc($['if not set'], ($) => Initialization(
                                    $,
                                    null
                                )),
                                'if set': _pa.cc($['if set'], ($) => Initialization(
                                    $,
                                    null
                                )),
                            })])
                            default: return _pa.au($[0])
                        }
                    })])
                    case 'tagged union': return _pa.ss($, ($) => ['tagged union', _pa.cc($, ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union => {
                        switch ($[0]) {
                            case 'switch': return _pa.ss($, ($) => ['switch', ({
                                'resulting node': _pa.cc($['resulting node'], ($) => $.map(($) => _i_r_interface.Type(
                                    $,
                                    null
                                ))),
                                'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type => {
                                    switch ($[0]) {
                                        case 'full': return _pa.ss($, ($) => ['full', ({
                                            'cases': _pa.cc($['cases'], ($) => $.map(($) => Initialization(
                                                $,
                                                null
                                            ))),
                                        })])
                                        case 'partial': return _pa.ss($, ($) => ['partial', ({
                                            'cases': _pa.cc($['cases'], ($) => $.map(($) => Initialization(
                                                $,
                                                null
                                            ))),
                                            'default': _pa.cc($['default'], ($) => Initialization(
                                                $,
                                                null
                                            )),
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                })),
                            })])
                            default: return _pa.au($[0])
                        }
                    })])
                    default: return _pa.au($[0])
                }
            })),
        })])
        default: return _pa.au($[0])
    }
})
export const Literal: _i_signatures._T_Literal = ($) => _pa.cc($, ($): _i_out._T_Literal => {
    switch ($[0]) {
        case 'array': return _pa.ss($, ($) => ['array', $.map(($) => Initialization(
            $,
            null
        ))])
        case 'boolean': return _pa.ss($, ($) => ['boolean', _pa.cc($, ($): _i_out._T_Literal.SG._boolean => {
            switch ($[0]) {
                case 'false': return _pa.ss($, ($) => ['false', null])
                case 'true': return _pa.ss($, ($) => ['true', null])
                default: return _pa.au($[0])
            }
        })])
        case 'dictionary': return _pa.ss($, ($) => ['dictionary', $.map(($) => Initialization(
            $,
            null
        ))])
        case 'function': return _pa.ss($, ($) => ['function', ({
            'initialization': _pa.cc($['initialization'], ($) => Initialization(
                $,
                null
            )),
            'temp has parameters': _pa.cc($['temp has parameters'], ($) => $),
        })])
        case 'group': return _pa.ss($, ($) => ['group', $.map(($) => Initialization(
            $,
            null
        ))])
        case 'null': return _pa.ss($, ($) => ['null', null])
        case 'number': return _pa.ss($, ($) => ['number', _pa.cc($, ($): _i_out._T_Literal.SG._number => {
            switch ($[0]) {
                case 'floting point': return _pa.ss($, ($) => ['floting point', $])
                case 'integer': return _pa.ss($, ($) => ['integer', $])
                case 'signed integer': return _pa.ss($, ($) => ['signed integer', $])
                default: return _pa.au($[0])
            }
        })])
        case 'optional': return _pa.ss($, ($) => ['optional', _pa.cc($, ($): _i_out._T_Literal.SG.optional => {
            switch ($[0]) {
                case 'not set': return _pa.ss($, ($) => ['not set', null])
                case 'set': return _pa.ss($, ($) => ['set', Initialization(
                    $,
                    null
                )])
                default: return _pa.au($[0])
            }
        })])
        case 'string': return _pa.ss($, ($) => ['string', ({
            'delimiter': _pa.cc($['delimiter'], ($) => _pa.cc($, ($): _i_out._T_Literal.SG._string.delimiter => {
                switch ($[0]) {
                    case 'backtick': return _pa.ss($, ($) => ['backtick', null])
                    case 'quote': return _pa.ss($, ($) => ['quote', null])
                    default: return _pa.au($[0])
                }
            })),
            'value': _pa.cc($['value'], ($) => $),
        })])
        case 'tagged union': return _pa.ss($, ($) => ['tagged union', ({
            'case': _pa.cc($['case'], ($) => $),
            'value': _pa.cc($['value'], ($) => Initialization(
                $,
                null
            )),
        })])
        default: return _pa.au($[0])
    }
})
export const Module: _i_signatures._T_Module = ($) => ({
    'type imports': _pa.cc($['type imports'], ($) => _i_r_interface.Imports(
        $,
        null
    )),
    'variable imports': _pa.cc($['variable imports'], ($) => $.map(($) => ({
        'tail': _pa.cc($['tail'], ($) => $.map(($) => $)),
        'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Module.variable_imports.D._type => {
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
    }))),
    'variables': _pa.cc($['variables'], ($) => Variables(
        $,
        null
    )),
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
export const Selection: _i_signatures._T_Selection = ($) => ({
    'start': _pa.cc($['start'], ($) => _pa.cc($, ($): _i_out._T_Selection.start => {
        switch ($[0]) {
            case 'abort': return _pa.ss($, ($) => ['abort', null])
            case 'argument': return _pa.ss($, ($) => ['argument', $])
            case 'call': return _pa.ss($, ($) => ['call', ({
                'arguments': _pa.cc($['arguments'], ($) => $.map(($) => $.map(($) => Initialization(
                    $,
                    null
                )))),
                'context': _pa.cc($['context'], ($) => Selection(
                    $,
                    null
                )),
                'source': _pa.cc($['source'], ($) => Selection(
                    $,
                    null
                )),
            })])
            case 'context': return _pa.ss($, ($) => ['context', null])
            case 'implement me': return _pa.ss($, ($) => ['implement me', null])
            case 'imported variable': return _pa.ss($, ($) => ['imported variable', ({
                'import': _pa.cc($['import'], ($) => $),
                'variable': _pa.cc($['variable'], ($) => $),
            })])
            case 'parameter': return _pa.ss($, ($) => ['parameter', $])
            case 'transform optional value': return _pa.ss($, ($) => ['transform optional value', ({
                'if not set': _pa.cc($['if not set'], ($) => Selection(
                    $,
                    null
                )),
                'if set': _pa.cc($['if set'], ($) => Selection(
                    $,
                    null
                )),
                'source': _pa.cc($['source'], ($) => Selection(
                    $,
                    null
                )),
            })])
            case 'variable': return _pa.ss($, ($) => ['variable', $])
            default: return _pa.au($[0])
        }
    })),
    'tail': _pa.cc($['tail'], ($) => $.map(($) => $)),
})
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($) => $.map(($) => null)
export const Variables: _i_signatures._T_Variables = ($) => $.map(($) => ({
    'initialization': _pa.cc($['initialization'], ($) => Initialization(
        $,
        null
    )),
    'type': _pa.cc($['type'], ($) => $.map(($) => _i_r_interface.Type(
        $,
        null
    ))),
}))
