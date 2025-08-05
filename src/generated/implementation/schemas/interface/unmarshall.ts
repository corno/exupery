import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/interface/unresolved"
import * as _i_signatures from "../../../interface/schemas/interface/unmarshall"


export const Imports: _i_signatures._T_Imports = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'tail': _pa.cc(_i_generic.get_entry(
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
                    'type': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "type",
                        }
                    ), ($) => _i_generic.process_state_group(
                        $,
                        {
                            'states': _pa.dictionary_literal({
                                'ancestor': ($): _i_out._T_Imports.D._type<null> => _i_generic.wrap_unresolved_state_group(
                                    ['ancestor', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'dependency': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "dependency",
                                                    }
                                                ), ($) => _i_generic.process_text(
                                                    $,
                                                    null
                                                )),
                                                'number of steps': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "number of steps",
                                                    }
                                                ), ($) => _i_generic.process_number(
                                                    $,
                                                    null
                                                )),
                                            }),
                                        }
                                    )],
                                    null
                                ),
                                'external': ($): _i_out._T_Imports.D._type<null> => _i_generic.wrap_unresolved_state_group(
                                    ['external', _i_generic.process_text(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                                'sibling': ($): _i_out._T_Imports.D._type<null> => _i_generic.wrap_unresolved_state_group(
                                    ['sibling', _i_generic.process_text(
                                        $,
                                        null
                                    )],
                                    null
                                ),
                            }),
                        }
                    )),
                    'type arguments': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "type arguments",
                        }
                    ), ($) => Type_Arguments(
                        $,
                        null
                    )),
                }),
            }
        ),
    }
)
export const Module: _i_signatures._T_Module = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'imports': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "imports",
                }
            ), ($) => Imports(
                $,
                null
            )),
            'type parameters': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type parameters",
                }
            ), ($) => Type_Parameters(
                $,
                null
            )),
            'types': _pa.cc(_i_generic.get_entry(
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
                                'parameters': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "parameters",
                                    }
                                ), ($) => Type_Parameters(
                                    $,
                                    null
                                )),
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => Type(
                                    $,
                                    null
                                )),
                            }),
                        }
                    ),
                }
            )),
        }),
    }
)
export const Module_Set: _i_signatures._T_Module_Set = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'module': ($): _i_out._T_Module_Set.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['module', Module(
                            $,
                            null
                        )],
                        null
                    ),
                    'set': ($): _i_out._T_Module_Set.D<null> => _i_generic.wrap_unresolved_state_group(
                        ['set', Module_Set(
                            $,
                            null
                        )],
                        null
                    ),
                }),
            }
        ),
    }
)
export const Type: _i_signatures._T_Type = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'array': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['array', Type(
                    $,
                    null
                )],
                null
            ),
            'boolean': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['boolean', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'component': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['component', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'location': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "location",
                                }
                            ), ($) => _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'import': ($): _i_out._T_Type.SG.component.location<null> => _i_generic.wrap_unresolved_state_group(
                                            ['import', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'import': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "import",
                                                            }
                                                        ), ($) => _i_generic.process_text(
                                                            $,
                                                            null
                                                        )),
                                                        'type': _pa.cc(_i_generic.get_entry(
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
                                            null
                                        ),
                                        'sibling': ($): _i_out._T_Type.SG.component.location<null> => _i_generic.wrap_unresolved_state_group(
                                            ['sibling', _i_generic.process_text(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                    }),
                                }
                            )),
                            'sub selection': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "sub selection",
                                }
                            ), ($) => _i_generic.process_unresolved_list(
                                $,
                                {
                                    'value': ($) => _i_generic.process_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'dictionary': ($): _i_out._T_Type.SG.component.sub_selection.L<null> => _i_generic.wrap_unresolved_state_group(
                                                    ['dictionary', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    null
                                                ),
                                                'group': ($): _i_out._T_Type.SG.component.sub_selection.L<null> => _i_generic.wrap_unresolved_state_group(
                                                    ['group', _i_generic.process_text(
                                                        $,
                                                        null
                                                    )],
                                                    null
                                                ),
                                                'list': ($): _i_out._T_Type.SG.component.sub_selection.L<null> => _i_generic.wrap_unresolved_state_group(
                                                    ['list', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    null
                                                ),
                                                'optional': ($): _i_out._T_Type.SG.component.sub_selection.L<null> => _i_generic.wrap_unresolved_state_group(
                                                    ['optional', _i_generic.process_nothing(
                                                        $,
                                                        null
                                                    )],
                                                    null
                                                ),
                                                'state group': ($): _i_out._T_Type.SG.component.sub_selection.L<null> => _i_generic.wrap_unresolved_state_group(
                                                    ['state group', _i_generic.process_text(
                                                        $,
                                                        null
                                                    )],
                                                    null
                                                ),
                                            }),
                                        }
                                    ),
                                }
                            )),
                            'type arguments': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "type arguments",
                                }
                            ), ($) => Type_Arguments(
                                $,
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'computed': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['computed', Type(
                    $,
                    null
                )],
                null
            ),
            'dictionary': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['dictionary', Type(
                    $,
                    null
                )],
                null
            ),
            'function': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['function', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'context': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "context",
                                }
                            ), ($) => Type(
                                $,
                                null
                            )),
                            'parameters': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "parameters",
                                }
                            ), ($) => _i_generic.process_unresolved_dictionary(
                                $,
                                {
                                    'value': ($) => Type(
                                        $,
                                        null
                                    ),
                                }
                            )),
                            'return': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "return",
                                }
                            ), ($) => Type(
                                $,
                                null
                            )),
                            'type parameters': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "type parameters",
                                }
                            ), ($) => Type_Parameters(
                                $,
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'group': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['group', _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => Type(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'key value pair': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['key value pair', Type(
                    $,
                    null
                )],
                null
            ),
            'null': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['null', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'number': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['number', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'float': ($): _i_out._T_Type.SG._number<null> => _i_generic.wrap_unresolved_state_group(
                                ['float', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'integer': ($): _i_out._T_Type.SG._number<null> => _i_generic.wrap_unresolved_state_group(
                                ['integer', _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'signed': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "signed",
                                                }
                                            ), ($) => _i_generic.process_boolean(
                                                $,
                                                null
                                            )),
                                        }),
                                    }
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'optional': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['optional', Type(
                    $,
                    null
                )],
                null
            ),
            'parameter': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['parameter', Type_Parameter_Selection(
                    $,
                    null
                )],
                null
            ),
            'string': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['string', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'tagged union': ($): _i_out._T_Type<null> => _i_generic.wrap_unresolved_state_group(
                ['tagged union', _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => Type(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
        }),
    }
)
export const Type_Arguments: _i_signatures._T_Type_Arguments = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Type(
            $,
            null
        ),
    }
)
export const Type_Parameter_Selection: _i_signatures._T_Type_Parameter_Selection = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'location': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "location",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'module': ($): _i_out._T_Type_Parameter_Selection.location<null> => _i_generic.wrap_unresolved_state_group(
                            ['module', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'type': ($): _i_out._T_Type_Parameter_Selection.location<null> => _i_generic.wrap_unresolved_state_group(
                            ['type', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                    }),
                }
            )),
            'parameter': _pa.cc(_i_generic.get_entry(
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
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_nothing(
            $,
            null
        ),
    }
)
