import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/implementation/data_types/target"
import * as _i_r_interface from "../interface/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/implementation/unmarshall"


export const Initialization: _i_signatures._T_Initialization = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'block': ($): _i_out._T_Initialization.SG<_i_in._T_Range> => ['block', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'initialization': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "initialization",
                            }
                        ), ($) => Initialization(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'temp ordered variables': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "temp ordered variables",
                            }
                        ), ($) => _i_generic.process_unresolved_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'initialization': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "initialization",
                                                }
                                            ), ($) => Initialization(
                                                $,
                                                {
                                                    'value deserializers': $p['value deserializers'],
                                                }
                                            )),
                                            'name': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "name",
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
                                            ), ($) => _i_generic.process_optional(
                                                $,
                                                {
                                                    'value': ($) => _i_r_interface.Type(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    ),
                                                }
                                            )),
                                        }),
                                    }
                                ),
                            }
                        )),
                        'variables': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "variables",
                            }
                        ), ($) => Variables(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'change context': ($): _i_out._T_Initialization.SG<_i_in._T_Range> => ['change context', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'initialization': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "initialization",
                            }
                        ), ($) => Initialization(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'new context': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "new context",
                            }
                        ), ($) => Selection(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'literal': ($): _i_out._T_Initialization.SG<_i_in._T_Range> => ['literal', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'value': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "value",
                            }
                        ), ($) => Literal(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'selection': ($): _i_out._T_Initialization.SG<_i_in._T_Range> => ['selection', Selection(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'transformation': ($): _i_out._T_Initialization.SG<_i_in._T_Range> => ['transformation', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'source': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "source",
                            }
                        ), ($) => Selection(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'type': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type",
                            }
                        ), ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'array': ($): _i_out._T_Initialization.SG.transformation._type.SG<_i_in._T_Range> => ['array', _i_generic.process_unresolved_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.array.SG<_i_in._T_Range> => ['map', Initialization(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                    'boolean': ($): _i_out._T_Initialization.SG.transformation._type.SG<_i_in._T_Range> => ['boolean', _i_generic.process_unresolved_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'not': ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean.SG<_i_in._T_Range> => ['not', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'transform': ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean.SG<_i_in._T_Range> => ['transform', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'if false': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "if false",
                                                                }
                                                            ), ($) => Initialization(
                                                                $,
                                                                {
                                                                    'value deserializers': $p['value deserializers'],
                                                                }
                                                            )),
                                                            'if true': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "if true",
                                                                }
                                                            ), ($) => Initialization(
                                                                $,
                                                                {
                                                                    'value deserializers': $p['value deserializers'],
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                    'dictionary': ($): _i_out._T_Initialization.SG.transformation._type.SG<_i_in._T_Range> => ['dictionary', _i_generic.process_unresolved_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.dictionary.SG<_i_in._T_Range> => ['map', Initialization(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                    'function': ($): _i_out._T_Initialization.SG.transformation._type.SG<_i_in._T_Range> => ['function', _i_generic.process_unresolved_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'call': ($): _i_out._T_Initialization.SG.transformation._type.SG._function.SG<_i_in._T_Range> => ['call', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'arguments': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "arguments",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_generic.process_unresolved_dictionary(
                                                                        $,
                                                                        {
                                                                            'value': ($) => Initialization(
                                                                                $,
                                                                                {
                                                                                    'value deserializers': $p['value deserializers'],
                                                                                }
                                                                            ),
                                                                        }
                                                                    ),
                                                                }
                                                            )),
                                                            'context': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "context",
                                                                }
                                                            ), ($) => Initialization(
                                                                $,
                                                                {
                                                                    'value deserializers': $p['value deserializers'],
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                    'optional': ($): _i_out._T_Initialization.SG.transformation._type.SG<_i_in._T_Range> => ['optional', _i_generic.process_unresolved_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.optional.SG<_i_in._T_Range> => ['map', Initialization(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )],
                                                'transform': ($): _i_out._T_Initialization.SG.transformation._type.SG.optional.SG<_i_in._T_Range> => ['transform', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'if not set': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "if not set",
                                                                }
                                                            ), ($) => Initialization(
                                                                $,
                                                                {
                                                                    'value deserializers': $p['value deserializers'],
                                                                }
                                                            )),
                                                            'if set': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "if set",
                                                                }
                                                            ), ($) => Initialization(
                                                                $,
                                                                {
                                                                    'value deserializers': $p['value deserializers'],
                                                                }
                                                            )),
                                                            'temp resulting node': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "temp resulting node",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_r_interface.Type(
                                                                        $,
                                                                        {
                                                                            'value deserializers': $p['value deserializers'],
                                                                        }
                                                                    ),
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                    'tagged union': ($): _i_out._T_Initialization.SG.transformation._type.SG<_i_in._T_Range> => ['tagged union', _i_generic.process_unresolved_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'switch': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG<_i_in._T_Range> => ['switch', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'temp resulting node': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "temp resulting node",
                                                                }
                                                            ), ($) => _i_generic.process_optional(
                                                                $,
                                                                {
                                                                    'value': ($) => _i_r_interface.Type(
                                                                        $,
                                                                        {
                                                                            'value deserializers': $p['value deserializers'],
                                                                        }
                                                                    ),
                                                                }
                                                            )),
                                                            'type': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "type",
                                                                }
                                                            ), ($) => _i_generic.process_unresolved_state_group(
                                                                $,
                                                                {
                                                                    'states': _pa.dictionary_literal({
                                                                        'full': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG<_i_in._T_Range> => ['full', _i_generic.process_group(
                                                                            $,
                                                                            {
                                                                                'properties': ($) => ({
                                                                                    'cases': _pa.cc(_i_generic.get_entry(
                                                                                        $,
                                                                                        {
                                                                                            'key': "cases",
                                                                                        }
                                                                                    ), ($) => _i_generic.process_unresolved_dictionary(
                                                                                        $,
                                                                                        {
                                                                                            'value': ($) => Initialization(
                                                                                                $,
                                                                                                {
                                                                                                    'value deserializers': $p['value deserializers'],
                                                                                                }
                                                                                            ),
                                                                                        }
                                                                                    )),
                                                                                }),
                                                                            }
                                                                        )],
                                                                        'partial': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG<_i_in._T_Range> => ['partial', _i_generic.process_group(
                                                                            $,
                                                                            {
                                                                                'properties': ($) => ({
                                                                                    'cases': _pa.cc(_i_generic.get_entry(
                                                                                        $,
                                                                                        {
                                                                                            'key': "cases",
                                                                                        }
                                                                                    ), ($) => _i_generic.process_unresolved_dictionary(
                                                                                        $,
                                                                                        {
                                                                                            'value': ($) => Initialization(
                                                                                                $,
                                                                                                {
                                                                                                    'value deserializers': $p['value deserializers'],
                                                                                                }
                                                                                            ),
                                                                                        }
                                                                                    )),
                                                                                    'default': _pa.cc(_i_generic.get_entry(
                                                                                        $,
                                                                                        {
                                                                                            'key': "default",
                                                                                        }
                                                                                    ), ($) => Initialization(
                                                                                        $,
                                                                                        {
                                                                                            'value deserializers': $p['value deserializers'],
                                                                                        }
                                                                                    )),
                                                                                }),
                                                                            }
                                                                        )],
                                                                    }),
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                            }),
                                        }
                                    )],
                                }),
                            }
                        )),
                    }),
                }
            )],
        }),
    }
)
export const Literal: _i_signatures._T_Literal = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'array': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['array', _i_generic.process_unresolved_list(
                $,
                {
                    'value': ($) => Initialization(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'boolean': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['boolean', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'false': ($): _i_out._T_Literal.SG._boolean.SG<_i_in._T_Range> => ['false', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'true': ($): _i_out._T_Literal.SG._boolean.SG<_i_in._T_Range> => ['true', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )],
            'dictionary': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['dictionary', _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => Initialization(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'function': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['function', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'initialization': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "initialization",
                            }
                        ), ($) => Initialization(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'temp has parameters': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "temp has parameters",
                            }
                        ), ($) => _i_generic.process_boolean(
                            $,
                            {
                                'deserializer': $p['value deserializers']['boolean'],
                            }
                        )),
                        'temp resulting node': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "temp resulting node",
                            }
                        ), ($) => _i_generic.process_optional(
                            $,
                            {
                                'value': ($) => _i_r_interface.Type(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                ),
                            }
                        )),
                    }),
                }
            )],
            'group': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['group', _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => Initialization(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'null': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['null', _i_generic.process_nothing(
                $,
                null
            )],
            'number': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['number', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'floting point': ($): _i_out._T_Literal.SG._number.SG<_i_in._T_Range> => ['floting point', _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['default number'],
                            }
                        )],
                        'integer': ($): _i_out._T_Literal.SG._number.SG<_i_in._T_Range> => ['integer', _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['default number'],
                            }
                        )],
                        'signed integer': ($): _i_out._T_Literal.SG._number.SG<_i_in._T_Range> => ['signed integer', _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['default number'],
                            }
                        )],
                    }),
                }
            )],
            'optional': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['optional', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'not set': ($): _i_out._T_Literal.SG.optional.SG<_i_in._T_Range> => ['not set', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'set': ($): _i_out._T_Literal.SG.optional.SG<_i_in._T_Range> => ['set', Initialization(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                    }),
                }
            )],
            'string': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['string', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'delimiter': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "delimiter",
                            }
                        ), ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'backtick': ($): _i_out._T_Literal.SG._string.delimiter.SG<_i_in._T_Range> => ['backtick', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'quote': ($): _i_out._T_Literal.SG._string.delimiter.SG<_i_in._T_Range> => ['quote', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                }),
                            }
                        )),
                        'value': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "value",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'tagged union': ($): _i_out._T_Literal.SG<_i_in._T_Range> => ['tagged union', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'case': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "case",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                        'value': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "value",
                            }
                        ), ($) => Initialization(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
        }),
    }
)
export const Module: _i_signatures._T_Module = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'type imports': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type imports",
                }
            ), ($) => _i_r_interface.Imports(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'variable imports': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "variable imports",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
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
                                ), ($) => _i_generic.process_unresolved_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'ancestor': ($): _i_out._T_Module.variable_imports.D._type.SG<_i_in._T_Range> => ['ancestor', _i_generic.process_group(
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
                                                            {
                                                                'deserializer': $p['value deserializers']['default number'],
                                                            }
                                                        )),
                                                    }),
                                                }
                                            )],
                                            'external': ($): _i_out._T_Module.variable_imports.D._type.SG<_i_in._T_Range> => ['external', _i_generic.process_text(
                                                $,
                                                null
                                            )],
                                            'sibling': ($): _i_out._T_Module.variable_imports.D._type.SG<_i_in._T_Range> => ['sibling', _i_generic.process_text(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'variables': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "variables",
                }
            ), ($) => Variables(
                $,
                {
                    'value deserializers': $p['value deserializers'],
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
                'states': _pa.dictionary_literal({
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
export const Selection: _i_signatures._T_Selection = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'abort': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['abort', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'argument': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['argument', _i_generic.process_text(
                            $,
                            null
                        )],
                        'call': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['call', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'arguments': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "arguments",
                                        }
                                    ), ($) => _i_generic.process_optional(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_unresolved_dictionary(
                                                $,
                                                {
                                                    'value': ($) => Initialization(
                                                        $,
                                                        {
                                                            'value deserializers': $p['value deserializers'],
                                                        }
                                                    ),
                                                }
                                            ),
                                        }
                                    )),
                                    'context': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "context",
                                        }
                                    ), ($) => Selection(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'source': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "source",
                                        }
                                    ), ($) => Selection(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'context': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['context', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'implement me': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['implement me', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'imported variable': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['imported variable', _i_generic.process_group(
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
                                    'variable': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "variable",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                        'parameter': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['parameter', _i_generic.process_text(
                            $,
                            null
                        )],
                        'transform optional value': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['transform optional value', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'if not set': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "if not set",
                                        }
                                    ), ($) => Selection(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'if set': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "if set",
                                        }
                                    ), ($) => Selection(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'source': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "source",
                                        }
                                    ), ($) => Selection(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'variable': ($): _i_out._T_Selection.start.SG<_i_in._T_Range> => ['variable', _i_generic.process_text(
                            $,
                            null
                        )],
                    }),
                }
            )),
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
        }),
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
export const Variables: _i_signatures._T_Variables = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'initialization': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "initialization",
                        }
                    ), ($) => Initialization(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                    'type': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "type",
                        }
                    ), ($) => _i_generic.process_optional(
                        $,
                        {
                            'value': ($) => _i_r_interface.Type(
                                $,
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            ),
                        }
                    )),
                }),
            }
        ),
    }
)
