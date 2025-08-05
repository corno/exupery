import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/typescript_light/unconstrained"
import * as _i_signatures from "../../../interface/schemas/typescript_light/unmarshall"


export const Block: _i_signatures._T_Block = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Block_Part(
            $,
            null
        ),
    }
)
export const Block_Part: _i_signatures._T_Block_Part = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'line': ($): _i_out._T_Block_Part => _i_generic.wrap_unconstrained_state_group(
                ['line', _i_generic.process_text(
                    $,
                    null
                )],
                null
            ),
            'nested line': ($): _i_out._T_Block_Part => _i_generic.wrap_unconstrained_state_group(
                ['nested line', Line(
                    $,
                    null
                )],
                null
            ),
            'nothing': ($): _i_out._T_Block_Part => _i_generic.wrap_unconstrained_state_group(
                ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'sub block': ($): _i_out._T_Block_Part => _i_generic.wrap_unconstrained_state_group(
                ['sub block', Block(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
export const Directory: _i_signatures._T_Directory = ($) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'directory': ($): _i_out._T_Directory.D => _i_generic.wrap_unconstrained_state_group(
                        ['directory', Directory(
                            $,
                            null
                        )],
                        null
                    ),
                    'file': ($): _i_out._T_Directory.D => _i_generic.wrap_unconstrained_state_group(
                        ['file', Block(
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
export const Expression: _i_signatures._T_Expression = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'array literal': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['array literal', _i_generic.process_unconstrained_list(
                    $,
                    {
                        'value': ($) => Expression(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'arrow function': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['arrow function', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'parameters': _pa.cc(_i_generic.get_entry(
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
                                                        'value': ($) => Type(
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
                            'return type': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "return type",
                                }
                            ), ($) => _i_generic.process_optional(
                                $,
                                {
                                    'value': ($) => Type(
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
                                        'block': ($): _i_out._T_Expression.SG.arrow_function._type => _i_generic.wrap_unconstrained_state_group(
                                            ['block', Statements(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'expression': ($): _i_out._T_Expression.SG.arrow_function._type => _i_generic.wrap_unconstrained_state_group(
                                            ['expression', Expression(
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
                )],
                null
            ),
            'call': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['call', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'arguments': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "arguments",
                                }
                            ), ($) => _i_generic.process_unconstrained_list(
                                $,
                                {
                                    'value': ($) => Expression(
                                        $,
                                        null
                                    ),
                                }
                            )),
                            'function selection': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "function selection",
                                }
                            ), ($) => Expression(
                                $,
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'false': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['false', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'null': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['null', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'number literal': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['number literal', _i_generic.process_number(
                    $,
                    null
                )],
                null
            ),
            'object literal': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['object literal', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'properties': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "properties",
                                }
                            ), ($) => _i_generic.process_unconstrained_dictionary(
                                $,
                                {
                                    'value': ($) => Expression(
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
            'string literal': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['string literal', String_Literal(
                    $,
                    null
                )],
                null
            ),
            'true': ($): _i_out._T_Expression => _i_generic.wrap_unconstrained_state_group(
                ['true', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
export const Line: _i_signatures._T_Line = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Line_Part(
            $,
            null
        ),
    }
)
export const Line_Part: _i_signatures._T_Line_Part = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'indent': ($): _i_out._T_Line_Part => _i_generic.wrap_unconstrained_state_group(
                ['indent', Block(
                    $,
                    null
                )],
                null
            ),
            'nothing': ($): _i_out._T_Line_Part => _i_generic.wrap_unconstrained_state_group(
                ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'snippet': ($): _i_out._T_Line_Part => _i_generic.wrap_unconstrained_state_group(
                ['snippet', _i_generic.process_text(
                    $,
                    null
                )],
                null
            ),
            'sub line': ($): _i_out._T_Line_Part => _i_generic.wrap_unconstrained_state_group(
                ['sub line', Line(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
export const Lines: _i_signatures._T_Lines = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'indentation': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "indentation",
                        }
                    ), ($) => _i_generic.process_number(
                        $,
                        null
                    )),
                    'text': _pa.cc(_i_generic.get_entry(
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
export const Statements: _i_signatures._T_Statements = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'import': ($): _i_out._T_Statements.L => _i_generic.wrap_unconstrained_state_group(
                        ['import', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'from': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "from",
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
                                    ), ($) => _i_generic.process_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'named': ($): _i_out._T_Statements.L.SG._import._type => _i_generic.wrap_unconstrained_state_group(
                                                    ['named', _i_generic.process_group(
                                                        $,
                                                        {
                                                            'properties': ($) => ({
                                                                'specifiers': _pa.cc(_i_generic.get_entry(
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
                                                    null
                                                ),
                                                'namespace': ($): _i_out._T_Statements.L.SG._import._type => _i_generic.wrap_unconstrained_state_group(
                                                    ['namespace', _i_generic.process_text(
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
                        )],
                        null
                    ),
                    'module declaration': ($): _i_out._T_Statements.L => _i_generic.wrap_unconstrained_state_group(
                        ['module declaration', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'block': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "block",
                                        }
                                    ), ($) => Statements(
                                        $,
                                        null
                                    )),
                                    'export': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "export",
                                        }
                                    ), ($) => _i_generic.process_boolean(
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
                                }),
                            }
                        )],
                        null
                    ),
                    'type alias declaration': ($): _i_out._T_Statements.L => _i_generic.wrap_unconstrained_state_group(
                        ['type alias declaration', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'export': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "export",
                                        }
                                    ), ($) => _i_generic.process_boolean(
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
                                    'parameters': _pa.cc(_i_generic.get_entry(
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
                        )],
                        null
                    ),
                    'variable': ($): _i_out._T_Statements.L => _i_generic.wrap_unconstrained_state_group(
                        ['variable', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'const': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "const",
                                        }
                                    ), ($) => _i_generic.process_boolean(
                                        $,
                                        null
                                    )),
                                    'export': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "export",
                                        }
                                    ), ($) => _i_generic.process_boolean(
                                        $,
                                        null
                                    )),
                                    'expression': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "expression",
                                        }
                                    ), ($) => _i_generic.process_optional(
                                        $,
                                        {
                                            'value': ($) => Expression(
                                                $,
                                                null
                                            ),
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
                                            'value': ($) => Type(
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
        ),
    }
)
export const String_Literal: _i_signatures._T_String_Literal = ($) => _i_generic.process_group(
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
                        'apostrophe': ($): _i_out._T_String_Literal.delimiter => _i_generic.wrap_unconstrained_state_group(
                            ['apostrophe', _i_generic.process_nothing(
                                $,
                                null
                            )],
                            null
                        ),
                        'quote': ($): _i_out._T_String_Literal.delimiter => _i_generic.wrap_unconstrained_state_group(
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
)
export const Type: _i_signatures._T_Type = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'boolean': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['boolean', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'function': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['function', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'parameters': _pa.cc(_i_generic.get_entry(
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
                                                        'value': ($) => Type(
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
                null
            ),
            'literal type': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['literal type', String_Literal(
                    $,
                    null
                )],
                null
            ),
            'null': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['null', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'number': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['number', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'string': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['string', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'tuple': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['tuple', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'elements': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "elements",
                                }
                            ), ($) => _i_generic.process_unconstrained_list(
                                $,
                                {
                                    'value': ($) => Type(
                                        $,
                                        null
                                    ),
                                }
                            )),
                            'readonly': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "readonly",
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
            'type literal': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['type literal', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'properties': _pa.cc(_i_generic.get_entry(
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
                                                'readonly': _pa.cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "readonly",
                                                    }
                                                ), ($) => _i_generic.process_boolean(
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
                )],
                null
            ),
            'type reference': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['type reference', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'start': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "start",
                                }
                            ), ($) => _i_generic.process_text(
                                $,
                                null
                            )),
                            'tail': _pa.cc(_i_generic.get_entry(
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
                            'type arguments': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "type arguments",
                                }
                            ), ($) => _i_generic.process_unconstrained_list(
                                $,
                                {
                                    'value': ($) => Type(
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
            'union': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['union', _i_generic.process_unconstrained_list(
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
            'void': ($): _i_out._T_Type => _i_generic.wrap_unconstrained_state_group(
                ['void', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
