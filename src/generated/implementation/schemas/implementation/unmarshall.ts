import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/implementation/unresolved"
import * as _i_r_interface from "../interface/unmarshall"
import * as _i_signatures from "../../../interface/schemas/implementation/unmarshall"


export const Initialization: _i_signatures._T_Initialization = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'block': ($): _i_out._T_Initialization<null> => _i_generic.wrap_unresolved_state_group(
                ['block', _i_generic.process_group(
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
                                null
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
                                                    null
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
                                                            null
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
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'change context': ($): _i_out._T_Initialization<null> => _i_generic.wrap_unresolved_state_group(
                ['change context', _i_generic.process_group(
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
                                null
                            )),
                            'new context': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "new context",
                                }
                            ), ($) => Selection(
                                $,
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'literal': ($): _i_out._T_Initialization<null> => _i_generic.wrap_unresolved_state_group(
                ['literal', _i_generic.process_group(
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
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'selection': ($): _i_out._T_Initialization<null> => _i_generic.wrap_unresolved_state_group(
                ['selection', Selection(
                    $,
                    null
                )],
                null
            ),
            'transformation': ($): _i_out._T_Initialization<null> => _i_generic.wrap_unresolved_state_group(
                ['transformation', _i_generic.process_group(
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
                                null
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
                                        'array': ($): _i_out._T_Initialization.SG.transformation._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['array', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.array<null> => _i_generic.wrap_unresolved_state_group(
                                                            ['map', Initialization(
                                                                $,
                                                                null
                                                            )],
                                                            null
                                                        ),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'boolean': ($): _i_out._T_Initialization.SG.transformation._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['boolean', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'not': ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean<null> => _i_generic.wrap_unresolved_state_group(
                                                            ['not', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                            null
                                                        ),
                                                        'transform': ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean<null> => _i_generic.wrap_unresolved_state_group(
                                                            ['transform', _i_generic.process_group(
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
                                                                            null
                                                                        )),
                                                                        'if true': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "if true",
                                                                            }
                                                                        ), ($) => Initialization(
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
                                        'dictionary': ($): _i_out._T_Initialization.SG.transformation._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['dictionary', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.dictionary<null> => _i_generic.wrap_unresolved_state_group(
                                                            ['map', Initialization(
                                                                $,
                                                                null
                                                            )],
                                                            null
                                                        ),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'function': ($): _i_out._T_Initialization.SG.transformation._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['function', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'call': ($): _i_out._T_Initialization.SG.transformation._type.SG._function<null> => _i_generic.wrap_unresolved_state_group(
                                                            ['call', _i_generic.process_group(
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
                                                                                            null
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
                                        'optional': ($): _i_out._T_Initialization.SG.transformation._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['optional', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.optional<null> => _i_generic.wrap_unresolved_state_group(
                                                            ['map', Initialization(
                                                                $,
                                                                null
                                                            )],
                                                            null
                                                        ),
                                                        'transform': ($): _i_out._T_Initialization.SG.transformation._type.SG.optional<null> => _i_generic.wrap_unresolved_state_group(
                                                            ['transform', _i_generic.process_group(
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
                                                                            null
                                                                        )),
                                                                        'if set': _pa.cc(_i_generic.get_entry(
                                                                            $,
                                                                            {
                                                                                'key': "if set",
                                                                            }
                                                                        ), ($) => Initialization(
                                                                            $,
                                                                            null
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
                                                                                    null
                                                                                ),
                                                                            }
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
                                        'tagged union': ($): _i_out._T_Initialization.SG.transformation._type<null> => _i_generic.wrap_unresolved_state_group(
                                            ['tagged union', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'switch': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union<null> => _i_generic.wrap_unresolved_state_group(
                                                            ['switch', _i_generic.process_group(
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
                                                                                    'full': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type<null> => _i_generic.wrap_unresolved_state_group(
                                                                                        ['full', _i_generic.process_group(
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
                                                                                                                null
                                                                                                            ),
                                                                                                        }
                                                                                                    )),
                                                                                                }),
                                                                                            }
                                                                                        )],
                                                                                        null
                                                                                    ),
                                                                                    'partial': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type<null> => _i_generic.wrap_unresolved_state_group(
                                                                                        ['partial', _i_generic.process_group(
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
                                                                                                                null
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
                                                                                                        null
                                                                                                    )),
                                                                                                }),
                                                                                            }
                                                                                        )],
                                                                                        null
                                                                                    ),
                                                                                }),
                                                                            }
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
                                    }),
                                }
                            )),
                        }),
                    }
                )],
                null
            ),
        }),
    }
)
export const Literal: _i_signatures._T_Literal = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'array': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['array', _i_generic.process_unresolved_list(
                    $,
                    {
                        'value': ($) => Initialization(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'boolean': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['boolean', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'false': ($): _i_out._T_Literal.SG._boolean<null> => _i_generic.wrap_unresolved_state_group(
                                ['false', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'true': ($): _i_out._T_Literal.SG._boolean<null> => _i_generic.wrap_unresolved_state_group(
                                ['true', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'dictionary': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['dictionary', _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => Initialization(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'function': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['function', _i_generic.process_group(
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
                                null
                            )),
                            'temp has parameters': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "temp has parameters",
                                }
                            ), ($) => _i_generic.process_boolean(
                                $,
                                null
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
                                        null
                                    ),
                                }
                            )),
                        }),
                    }
                )],
                null
            ),
            'group': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['group', _i_generic.process_unresolved_dictionary(
                    $,
                    {
                        'value': ($) => Initialization(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'null': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['null', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'number': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['number', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'floting point': ($): _i_out._T_Literal.SG._number<null> => _i_generic.wrap_unresolved_state_group(
                                ['floting point', _i_generic.process_number(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'integer': ($): _i_out._T_Literal.SG._number<null> => _i_generic.wrap_unresolved_state_group(
                                ['integer', _i_generic.process_number(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'signed integer': ($): _i_out._T_Literal.SG._number<null> => _i_generic.wrap_unresolved_state_group(
                                ['signed integer', _i_generic.process_number(
                                    $,
                                    null
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'optional': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['optional', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'not set': ($): _i_out._T_Literal.SG.optional<null> => _i_generic.wrap_unresolved_state_group(
                                ['not set', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'set': ($): _i_out._T_Literal.SG.optional<null> => _i_generic.wrap_unresolved_state_group(
                                ['set', Initialization(
                                    $,
                                    null
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'string': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['string', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'delimiter': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "delimiter",
                                }
                            ), ($) => _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'backtick': ($): _i_out._T_Literal.SG._string.delimiter<null> => _i_generic.wrap_unresolved_state_group(
                                            ['backtick', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'quote': ($): _i_out._T_Literal.SG._string.delimiter<null> => _i_generic.wrap_unresolved_state_group(
                                            ['quote', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
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
                null
            ),
            'tagged union': ($): _i_out._T_Literal<null> => _i_generic.wrap_unresolved_state_group(
                ['tagged union', _i_generic.process_group(
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
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
        }),
    }
)
export const Module: _i_signatures._T_Module = ($) => _i_generic.process_group(
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
                null
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
                                ), ($) => _i_generic.process_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'ancestor': ($): _i_out._T_Module.variable_imports.D._type<null> => _i_generic.wrap_unresolved_state_group(
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
                                            'external': ($): _i_out._T_Module.variable_imports.D._type<null> => _i_generic.wrap_unresolved_state_group(
                                                ['external', _i_generic.process_text(
                                                    $,
                                                    null
                                                )],
                                                null
                                            ),
                                            'sibling': ($): _i_out._T_Module.variable_imports.D._type<null> => _i_generic.wrap_unresolved_state_group(
                                                ['sibling', _i_generic.process_text(
                                                    $,
                                                    null
                                                )],
                                                null
                                            ),
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
                null
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
export const Selection: _i_signatures._T_Selection = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'abort': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['abort', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'argument': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['argument', _i_generic.process_text(
                                $,
                                null
                            )],
                            null
                        ),
                        'call': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['call', _i_generic.process_group(
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
                                                            null
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
                                            null
                                        )),
                                        'source': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "source",
                                            }
                                        ), ($) => Selection(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                        'context': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['context', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'implement me': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['implement me', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'imported variable': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['imported variable', _i_generic.process_group(
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
                            null
                        ),
                        'parameter': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['parameter', _i_generic.process_text(
                                $,
                                null
                            )],
                            null
                        ),
                        'transform optional value': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['transform optional value', _i_generic.process_group(
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
                                            null
                                        )),
                                        'if set': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "if set",
                                            }
                                        ), ($) => Selection(
                                            $,
                                            null
                                        )),
                                        'source': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "source",
                                            }
                                        ), ($) => Selection(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                        'variable': ($): _i_out._T_Selection.start<null> => _i_generic.wrap_unresolved_state_group(
                            ['variable', _i_generic.process_text(
                                $,
                                null
                            )],
                            null
                        ),
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
export const Type_Parameters: _i_signatures._T_Type_Parameters = ($) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_nothing(
            $,
            null
        ),
    }
)
export const Variables: _i_signatures._T_Variables = ($) => _i_generic.process_unresolved_dictionary(
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
                                null
                            ),
                        }
                    )),
                }),
            }
        ),
    }
)
