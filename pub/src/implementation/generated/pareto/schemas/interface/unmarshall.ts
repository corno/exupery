import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/interface/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/interface/data_types/target"


export const Type_Arguments: _i_signatures._T_Type_Arguments = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Type(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Imports: _i_signatures._T_Imports = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'type': _p.sg(_i_generic.get_entry(
                        $,
                        {
                            'key': "type",
                        }
                    ), ($) => _i_generic.process_unresolved_state_group(
                        $,
                        {
                            'states': _p.dictionary.literal({
                                'external': ($): _i_out._T_Imports.D._type.SG<_i_in._T_Range> => ['external', _i_generic.process_text(
                                    $,
                                    null
                                )],
                                'ancestor': ($): _i_out._T_Imports.D._type.SG<_i_in._T_Range> => ['ancestor', _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'number of steps': _p.sg(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "number of steps",
                                                }
                                            ), ($) => _i_generic.process_number(
                                                $,
                                                {
                                                    'deserializer': $p['value deserializers']['default number'],
                                                }
                                            )),
                                            'dependency': _p.sg(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "dependency",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                        }),
                                    }
                                )],
                                'sibling': ($): _i_out._T_Imports.D._type.SG<_i_in._T_Range> => ['sibling', _i_generic.process_text(
                                    $,
                                    null
                                )],
                            }),
                        }
                    )),
                    'tail': _p.sg(_i_generic.get_entry(
                        $,
                        {
                            'key': "tail",
                        }
                    ), ($) => _i_generic.process_unresolved_list(
                        $,
                        {
                            'value': ($) => _i_generic.process_text(
                                $,
                                null
                            ),
                        }
                    )),
                    'type arguments': _p.sg(_i_generic.get_entry(
                        $,
                        {
                            'key': "type arguments",
                        }
                    ), ($) => Type_Arguments(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                }),
            }
        ),
    }
)
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_nothing(
            $,
            null
        ),
    }
)
export const Module: _i_signatures._T_Module = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'imports': _p.sg(_i_generic.get_entry(
                $,
                {
                    'key': "imports",
                }
            ), ($) => Imports(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'type parameters': _p.sg(_i_generic.get_entry(
                $,
                {
                    'key': "type parameters",
                }
            ), ($) => Type_Parameters(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'types': _p.sg(_i_generic.get_entry(
                $,
                {
                    'key': "types",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'parameters': _p.sg(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "parameters",
                                    }
                                ), ($) => Type_Parameters(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'type': _p.sg(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => Type(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Module_Set: _i_signatures._T_Module_Set = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_unresolved_state_group(
            $,
            {
                'states': _p.dictionary.literal({
                    'module': ($): _i_out._T_Module_Set.D.SG<_i_in._T_Range> => ['module', Module(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )],
                    'set': ($): _i_out._T_Module_Set.D.SG<_i_in._T_Range> => ['set', Module_Set(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )],
                }),
            }
        ),
    }
)
export const Type_Parameter_Selection: _i_signatures._T_Type_Parameter_Selection = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'location': _p.sg(_i_generic.get_entry(
                $,
                {
                    'key': "location",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'module': ($): _i_out._T_Type_Parameter_Selection.location.SG<_i_in._T_Range> => ['module', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'type': ($): _i_out._T_Type_Parameter_Selection.location.SG<_i_in._T_Range> => ['type', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'function': ($): _i_out._T_Type_Parameter_Selection.location.SG<_i_in._T_Range> => ['function', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )),
            'parameter': _p.sg(_i_generic.get_entry(
                $,
                {
                    'key': "parameter",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
        }),
    }
)
export const Type: _i_signatures._T_Type = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _p.dictionary.literal({
            'boolean': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['boolean', _i_generic.process_nothing(
                $,
                null
            )],
            'component': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['component', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'location': _p.sg(_i_generic.get_entry(
                            $,
                            {
                                'key': "location",
                            }
                        ), ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _p.dictionary.literal({
                                    'import': ($): _i_out._T_Type.SG.component.location.SG<_i_in._T_Range> => ['import', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'import': _p.sg(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "import",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                                'type': _p.sg(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "type",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                    'sibling': ($): _i_out._T_Type.SG.component.location.SG<_i_in._T_Range> => ['sibling', _i_generic.process_text(
                                        $,
                                        null
                                    )],
                                }),
                            }
                        )),
                        'type arguments': _p.sg(_i_generic.get_entry(
                            $,
                            {
                                'key': "type arguments",
                            }
                        ), ($) => Type_Arguments(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'sub selection': _p.sg(_i_generic.get_entry(
                            $,
                            {
                                'key': "sub selection",
                            }
                        ), ($) => _i_generic.process_unresolved_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _p.dictionary.literal({
                                            'dictionary': ($): _i_out._T_Type.SG.component.sub_selection.L.SG<_i_in._T_Range> => ['dictionary', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'group': ($): _i_out._T_Type.SG.component.sub_selection.L.SG<_i_in._T_Range> => ['group', _i_generic.process_text(
                                                $,
                                                null
                                            )],
                                            'list': ($): _i_out._T_Type.SG.component.sub_selection.L.SG<_i_in._T_Range> => ['list', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'optional': ($): _i_out._T_Type.SG.component.sub_selection.L.SG<_i_in._T_Range> => ['optional', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'state group': ($): _i_out._T_Type.SG.component.sub_selection.L.SG<_i_in._T_Range> => ['state group', _i_generic.process_text(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                ),
                            }
                        )),
                    }),
                }
            )],
            'computed': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['computed', Type(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'dictionary': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['dictionary', Type(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'function': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['function', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'type parameters': _p.sg(_i_generic.get_entry(
                            $,
                            {
                                'key': "type parameters",
                            }
                        ), ($) => Type_Parameters(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'context': _p.sg(_i_generic.get_entry(
                            $,
                            {
                                'key': "context",
                            }
                        ), ($) => Type(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'parameters': _p.sg(_i_generic.get_entry(
                            $,
                            {
                                'key': "parameters",
                            }
                        ), ($) => _i_generic.process_unresolved_dictionary(
                            $,
                            {
                                'value': ($) => Type(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                ),
                            }
                        )),
                        'return': _p.sg(_i_generic.get_entry(
                            $,
                            {
                                'key': "return",
                            }
                        ), ($) => Type(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'group': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['group', _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => Type(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'array': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['array', Type(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'null': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['null', _i_generic.process_nothing(
                $,
                null
            )],
            'number': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['number', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'integer': ($): _i_out._T_Type.SG._number.SG<_i_in._T_Range> => ['integer', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'signed': _p.sg(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "signed",
                                        }
                                    ), ($) => _i_generic.process_boolean(
                                        $,
                                        {
                                            'deserializer': $p['value deserializers']['boolean'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'float': ($): _i_out._T_Type.SG._number.SG<_i_in._T_Range> => ['float', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )],
            'optional': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['optional', Type(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'parameter': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['parameter', Type_Parameter_Selection(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'tagged union': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['tagged union', _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => Type(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'string': ($): _i_out._T_Type.SG<_i_in._T_Range> => ['string', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
