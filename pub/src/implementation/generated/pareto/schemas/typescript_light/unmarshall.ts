import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/typescript_light/data_types/target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/typescript_light/unmarshall"


export const Block: _i_signatures._T_Block = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Block_Part(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary.literal({
            'indent': ($): _i_out._T_Block_Part.SG => ['indent', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'nothing': ($): _i_out._T_Block_Part.SG => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
            'optional': ($): _i_out._T_Block_Part.SG => ['optional', _i_generic.process_optional(
                $,
                {
                    'value': ($) => Block_Part(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'snippet': ($): _i_out._T_Block_Part.SG => ['snippet', _i_generic.process_text(
                $,
                null
            )],
            'sub block': ($): _i_out._T_Block_Part.SG => ['sub block', Block(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const Directory: _i_signatures._T_Directory = ($, $p) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_unconstrained_state_group(
            $,
            {
                'states': _pa.dictionary.literal({
                    'directory': ($): _i_out._T_Directory.D.SG => ['directory', Directory(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )],
                    'file': ($): _i_out._T_Directory.D.SG => ['file', Group(
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
export const Expression: _i_signatures._T_Expression = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary.literal({
            'array literal': ($): _i_out._T_Expression.SG => ['array literal', _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => Expression(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'arrow function': ($): _i_out._T_Expression.SG => ['arrow function', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'parameters': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "parameters",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'name': _pa.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "name",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                            'type': _pa.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "type",
                                                }
                                            ), ($) => _i_generic.process_optional(
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
                                        }),
                                    }
                                ),
                            }
                        )),
                        'return type': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "return type",
                            }
                        ), ($) => _i_generic.process_optional(
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
                        'type': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type",
                            }
                        ), ($) => _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary.literal({
                                    'block': ($): _i_out._T_Expression.SG.arrow_function._type.SG => ['block', Statements(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )],
                                    'expression': ($): _i_out._T_Expression.SG.arrow_function._type.SG => ['expression', Expression(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )],
                                }),
                            }
                        )),
                    }),
                }
            )],
            'call': ($): _i_out._T_Expression.SG => ['call', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'arguments': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "arguments",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => Expression(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                ),
                            }
                        )),
                        'function selection': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "function selection",
                            }
                        ), ($) => Expression(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'false': ($): _i_out._T_Expression.SG => ['false', _i_generic.process_nothing(
                $,
                null
            )],
            'null': ($): _i_out._T_Expression.SG => ['null', _i_generic.process_nothing(
                $,
                null
            )],
            'number literal': ($): _i_out._T_Expression.SG => ['number literal', _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )],
            'object literal': ($): _i_out._T_Expression.SG => ['object literal', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'properties': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "properties",
                            }
                        ), ($) => _i_generic.process_unconstrained_dictionary(
                            $,
                            {
                                'value': ($) => Expression(
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
            'string literal': ($): _i_out._T_Expression.SG => ['string literal', String_Literal(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'true': ($): _i_out._T_Expression.SG => ['true', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Group: _i_signatures._T_Group = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Group_Part(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary.literal({
            'block': ($): _i_out._T_Group_Part.SG => ['block', _i_generic.process_text(
                $,
                null
            )],
            'nested block': ($): _i_out._T_Group_Part.SG => ['nested block', Block(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'nothing': ($): _i_out._T_Group_Part.SG => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
            'optional': ($): _i_out._T_Group_Part.SG => ['optional', _i_generic.process_optional(
                $,
                {
                    'value': ($) => Group_Part(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'sub group': ($): _i_out._T_Group_Part.SG => ['sub group', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const Lines: _i_signatures._T_Lines = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'indentation': _pa.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "indentation",
                        }
                    ), ($) => _i_generic.process_number(
                        $,
                        {
                            'deserializer': $p['value deserializers']['default number'],
                        }
                    )),
                    'text': _pa.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "text",
                        }
                    ), ($) => _i_generic.process_text(
                        $,
                        null
                    )),
                }),
            }
        ),
    }
)
export const Statements: _i_signatures._T_Statements = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_unconstrained_state_group(
            $,
            {
                'states': _pa.dictionary.literal({
                    'import': ($): _i_out._T_Statements.L.SG => ['import', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'from': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "from",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'type': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary.literal({
                                            'named': ($): _i_out._T_Statements.L.SG._import._type.SG => ['named', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'specifiers': _pa.deprecated_cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "specifiers",
                                                            }
                                                        ), ($) => _i_generic.process_unconstrained_dictionary(
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
                                            )],
                                            'namespace': ($): _i_out._T_Statements.L.SG._import._type.SG => ['namespace', _i_generic.process_text(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    )],
                    'module declaration': ($): _i_out._T_Statements.L.SG => ['module declaration', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'block': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "block",
                                    }
                                ), ($) => Statements(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'export': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "export",
                                    }
                                ), ($) => _i_generic.process_boolean(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['boolean'],
                                    }
                                )),
                                'name': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "name",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                            }),
                        }
                    )],
                    'type alias declaration': ($): _i_out._T_Statements.L.SG => ['type alias declaration', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'export': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "export",
                                    }
                                ), ($) => _i_generic.process_boolean(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['boolean'],
                                    }
                                )),
                                'name': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "name",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'parameters': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "parameters",
                                    }
                                ), ($) => _i_generic.process_unconstrained_list(
                                    $,
                                    {
                                        'value': ($) => _i_generic.process_text(
                                            $,
                                            null
                                        ),
                                    }
                                )),
                                'type': _pa.deprecated_cc(_i_generic.get_entry(
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
                    )],
                    'variable': ($): _i_out._T_Statements.L.SG => ['variable', _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'const': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "const",
                                    }
                                ), ($) => _i_generic.process_boolean(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['boolean'],
                                    }
                                )),
                                'export': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "export",
                                    }
                                ), ($) => _i_generic.process_boolean(
                                    $,
                                    {
                                        'deserializer': $p['value deserializers']['boolean'],
                                    }
                                )),
                                'expression': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "expression",
                                    }
                                ), ($) => _i_generic.process_optional(
                                    $,
                                    {
                                        'value': ($) => Expression(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        ),
                                    }
                                )),
                                'name': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "name",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'type': _pa.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_optional(
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
                            }),
                        }
                    )],
                }),
            }
        ),
    }
)
export const String_Literal: _i_signatures._T_String_Literal = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'delimiter': _pa.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "delimiter",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary.literal({
                        'apostrophe': ($): _i_out._T_String_Literal.delimiter.SG => ['apostrophe', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'quote': ($): _i_out._T_String_Literal.delimiter.SG => ['quote', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )),
            'value': _pa.deprecated_cc(_i_generic.get_entry(
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
)
export const Type: _i_signatures._T_Type = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary.literal({
            'boolean': ($): _i_out._T_Type.SG => ['boolean', _i_generic.process_nothing(
                $,
                null
            )],
            'function': ($): _i_out._T_Type.SG => ['function', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'parameters': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "parameters",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'name': _pa.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "name",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                            'type': _pa.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "type",
                                                }
                                            ), ($) => _i_generic.process_optional(
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
                                        }),
                                    }
                                ),
                            }
                        )),
                        'return': _pa.deprecated_cc(_i_generic.get_entry(
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
                        'type parameters': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type parameters",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
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
            )],
            'literal type': ($): _i_out._T_Type.SG => ['literal type', String_Literal(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'null': ($): _i_out._T_Type.SG => ['null', _i_generic.process_nothing(
                $,
                null
            )],
            'number': ($): _i_out._T_Type.SG => ['number', _i_generic.process_nothing(
                $,
                null
            )],
            'string': ($): _i_out._T_Type.SG => ['string', _i_generic.process_nothing(
                $,
                null
            )],
            'tuple': ($): _i_out._T_Type.SG => ['tuple', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'elements': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "elements",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
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
                        'readonly': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "readonly",
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
            'type literal': ($): _i_out._T_Type.SG => ['type literal', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'properties': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "properties",
                            }
                        ), ($) => _i_generic.process_unconstrained_dictionary(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'readonly': _pa.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "readonly",
                                                }
                                            ), ($) => _i_generic.process_boolean(
                                                $,
                                                {
                                                    'deserializer': $p['value deserializers']['boolean'],
                                                }
                                            )),
                                            'type': _pa.deprecated_cc(_i_generic.get_entry(
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
            )],
            'type reference': ($): _i_out._T_Type.SG => ['type reference', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'start': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "start",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                        'tail': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "tail",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_text(
                                    $,
                                    null
                                ),
                            }
                        )),
                        'type arguments': _pa.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type arguments",
                            }
                        ), ($) => _i_generic.process_unconstrained_list(
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
                    }),
                }
            )],
            'union': ($): _i_out._T_Type.SG => ['union', _i_generic.process_unconstrained_list(
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
            'void': ($): _i_out._T_Type.SG => ['void', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
