import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/implementation/data_types/unresolved"
import * as _i_r_interface from "../interface/unmarshall"
import * as _i_signatures from "../../../interface/schemas/implementation/unmarshall"


export const Initialization: _i_signatures._T_Initialization = ($, $p) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'block': ($): _i_out._T_Initialization<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                null
            ),
            'change context': ($): _i_out._T_Initialization<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                null
            ),
            'literal': ($): _i_out._T_Initialization<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                {
                                    'value deserializers': $p['value deserializers'],
                                }
                            )),
                        }),
                    }
                )],
                null
            ),
            'selection': ($): _i_out._T_Initialization<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                ['selection', Selection(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                null
            ),
            'transformation': ($): _i_out._T_Initialization<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                {
                                    'value deserializers': $p['value deserializers'],
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
                                        'array': ($): _i_out._T_Initialization.SG.transformation._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                            ['array', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.array<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                                            ['map', Initialization(
                                                                $,
                                                                {
                                                                    'value deserializers': $p['value deserializers'],
                                                                }
                                                            )],
                                                            null
                                                        ),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'boolean': ($): _i_out._T_Initialization.SG.transformation._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                            ['boolean', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'not': ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                                            ['not', _i_generic.process_nothing(
                                                                $,
                                                                null
                                                            )],
                                                            null
                                                        ),
                                                        'transform': ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                                            null
                                                        ),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'dictionary': ($): _i_out._T_Initialization.SG.transformation._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                            ['dictionary', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.dictionary<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                                            ['map', Initialization(
                                                                $,
                                                                {
                                                                    'value deserializers': $p['value deserializers'],
                                                                }
                                                            )],
                                                            null
                                                        ),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'function': ($): _i_out._T_Initialization.SG.transformation._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                            ['function', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'call': ($): _i_out._T_Initialization.SG.transformation._type.SG._function<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                                            null
                                                        ),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'optional': ($): _i_out._T_Initialization.SG.transformation._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                            ['optional', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'map': ($): _i_out._T_Initialization.SG.transformation._type.SG.optional<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                                            ['map', Initialization(
                                                                $,
                                                                {
                                                                    'value deserializers': $p['value deserializers'],
                                                                }
                                                            )],
                                                            null
                                                        ),
                                                        'transform': ($): _i_out._T_Initialization.SG.transformation._type.SG.optional<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                                            null
                                                        ),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'tagged union': ($): _i_out._T_Initialization.SG.transformation._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                            ['tagged union', _i_generic.process_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        'switch': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                                                        ), ($) => _i_generic.process_state_group(
                                                                            $,
                                                                            {
                                                                                'states': _pa.dictionary_literal({
                                                                                    'full': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                                                                                                {
                                                                                                                    'value deserializers': $p['value deserializers'],
                                                                                                                }
                                                                                                            ),
                                                                                                        }
                                                                                                    )),
                                                                                                }),
                                                                                            }
                                                                                        )],
                                                                                        null
                                                                                    ),
                                                                                    'partial': ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
export const Literal: _i_signatures._T_Literal = ($, $p) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'array': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                ['array', _i_generic.process_unresolved_list(
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
                null
            ),
            'boolean': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                ['boolean', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'false': ($): _i_out._T_Literal.SG._boolean<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                ['false', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'true': ($): _i_out._T_Literal.SG._boolean<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
            'dictionary': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                ['dictionary', _i_generic.process_unresolved_dictionary(
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
                null
            ),
            'function': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                null
            ),
            'group': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                ['group', _i_generic.process_unresolved_dictionary(
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
                null
            ),
            'null': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                ['null', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'number': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                ['number', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'floting point': ($): _i_out._T_Literal.SG._number<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                ['floting point', _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['default number'],
                                    }
                                )],
                                null
                            ),
                            'integer': ($): _i_out._T_Literal.SG._number<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                ['integer', _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['default number'],
                                    }
                                )],
                                null
                            ),
                            'signed integer': ($): _i_out._T_Literal.SG._number<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                ['signed integer', _i_generic.process_number(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['default number'],
                                    }
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'optional': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                ['optional', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'not set': ($): _i_out._T_Literal.SG.optional<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                ['not set', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'set': ($): _i_out._T_Literal.SG.optional<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                ['set', Initialization(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'string': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                        'backtick': ($): _i_out._T_Literal.SG._string.delimiter<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                            ['backtick', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'quote': ($): _i_out._T_Literal.SG._string.delimiter<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
            'tagged union': ($): _i_out._T_Literal<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                {
                                    'value deserializers': $p['value deserializers'],
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
                                ), ($) => _i_generic.process_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'ancestor': ($): _i_out._T_Module.variable_imports.D._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                                                                {
                                                                    'deserializer': $p['value deserializers']['default number'],
                                                                }
                                                            )),
                                                        }),
                                                    }
                                                )],
                                                null
                                            ),
                                            'external': ($): _i_out._T_Module.variable_imports.D._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                                                ['external', _i_generic.process_text(
                                                    $,
                                                    null
                                                )],
                                                null
                                            ),
                                            'sibling': ($): _i_out._T_Module.variable_imports.D._type<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'module': ($): _i_out._T_Module_Set.D<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                        ['module', Module(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        null
                    ),
                    'set': ($): _i_out._T_Module_Set.D<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                        ['set', Module_Set(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        null
                    ),
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
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'abort': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                            ['abort', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'argument': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                            ['argument', _i_generic.process_text(
                                $,
                                null
                            )],
                            null
                        ),
                        'call': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                            null
                        ),
                        'context': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                            ['context', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'implement me': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                            ['implement me', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'imported variable': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                        'parameter': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
                            ['parameter', _i_generic.process_text(
                                $,
                                null
                            )],
                            null
                        ),
                        'transform optional value': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
                            null
                        ),
                        'variable': ($): _i_out._T_Selection.start<_i_in._T_Range> => _i_generic.wrap_unresolved_state_group(
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
