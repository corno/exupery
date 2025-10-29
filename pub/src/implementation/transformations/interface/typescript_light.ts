import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as d_in from "../../../interface/generated/pareto/schemas/interface/data_types/source"
import * as d_out from "../../../interface/generated/pareto/schemas/typescript_light/data_types/target"

import * as s_out_ts from "../../../interface/generated/pareto/schemas/typescript_light/data_types/target"

import * as sh2 from "../../../shorthands/typescript_light"

import { String_Literal, Type } from "../typescript_light/fountain_pen_block"

import * as sh from "../../../shorthands/typescript_light"

import { $$ as op_create_identifier } from "../../../implementation/operations/impure/text/create_identifier"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_flatten_list } from "pareto-standard-operations/dist/implementation/operations/pure/list/flatten"
import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"
import { $$ as op_repeat } from "pareto-standard-operations/dist/implementation/operations/impure/text/repeat"
import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/implementation/operations/pure/text/join_list_of_texts"
import { $$ as op_create_valid_file_name } from "pareto-standard-operations/dist/implementation/operations/impure/text/create_valid_file_name"
import { Signature } from "../../../interface/algorithms/transformations/interface/typescript_light"


export function line_dictionary(
    $: pt.Dictionary<d_out.Block_Part>,
    if_empty: d_out.Block_Part,
    prefix: d_out.Block_Part,
    suffix: d_out.Block_Part,
    add_commas: boolean
): d_out.Block_Part {
    let is_empty = true
    $.map(($) => {
        is_empty = false
    })
    if (is_empty) {
        return if_empty
    } else {
        let is_first = true
        return sh.b.sub([
            prefix,
            sh.b.sub(op_dictionary_to_list($).map(($): d_out.Block_Part => {
                const out = sh.b.sub([
                    is_first ?
                        sh.b.nothing()
                        : add_commas
                            ? sh.b.snippet(", ")
                            : sh.b.nothing()
                    ,
                    $.value,
                ])
                is_first = false
                return out
            })),
            suffix,
        ])
    }

}

export const Module_Set = ($: d_in.Module_Set): d_out.Directory => {
    return $.map(($, key) => pa.cc($, ($) => {
        switch ($[0]) {
            case 'module': return pa.ss($, ($) => {
                const x_imports = $.imports
                const x_module_parameters = $['type parameters']

                const valid_file_name = ($: string): string => {
                    return op_create_valid_file_name($, { 'replace spaces with underscores': true })
                }
                return ['file', sh.group([
                    sh.g.simple_line("import * as _pt from 'exupery-core-types'"),

                    sh.g.simple_line(""),
                    sh.g.sub(op_dictionary_to_list($.imports).map(($) => sh.g.sub([
                        sh.g.nested_block([
                            sh.b.snippet("import * as "),
                            sh.b.snippet(op_create_identifier([" i ", $.key])),
                            sh.b.snippet(" from "),
                            String_Literal(
                                pa.cc($.value.type, ($): string => {
                                    switch ($[0]) {
                                        case 'external': return pa.ss($, ($) => valid_file_name($))
                                        case 'ancestor': return pa.ss($, ($) => `${op_repeat("../", { 'count': $['number of steps'] })}${valid_file_name($.dependency)}`)
                                        case 'sibling': return pa.ss($, ($) => `./${valid_file_name($)}`)
                                        default: return pa.au($[0])
                                    }
                                })
                                + op_join_list_of_texts(
                                    $.value.tail.map(($) => `/${valid_file_name($)}`),
                                ),
                                {
                                    'delimiter': "quote"
                                }
                            ),
                        ])

                    ]))),

                    /**
                     * I need to make sure that the global types are not shadowed by local types.
                     * I can do 3 things:
                     * 1. Prefix all global types identifiers and escape all local types identifiers that collide with that prefix
                     * 2. Prefix all local type identifiers
                     * 3. Place all types in a global namespace
                     * 
                     * The problem with 2. is that it mangles all the identifiers, not just the global ones
                     * The problem with 3. is that TypeScript is not able to resolve the recursive types correctly in that case. 
                     * So, I'm going with 1.
                     */
                    sh.g.simple_line(""),
                    sh.g.simple_line("// **** TYPES"),
                    sh.g.sub(op_dictionary_to_list($.types).map(($) => sh.g.sub([
                        sh.g.simple_line(""),
                        Type_Declaration(
                            null,
                            {
                                'name': Identifier(pa.array_literal([" T ", $.key])),
                                'type parameters': $.value.parameters,
                                'module parameters': x_module_parameters,
                                'function type parameters': pa.not_set(),
                                'callback': () => {
                                    return Type(
                                        Type_to_Type(
                                            $.value.type,
                                            {
                                                'module parameters': pa.set(x_module_parameters),
                                                'temp imports': pa.set(x_imports),
                                            },
                                        ),
                                        {
                                            'replace empty type literals by null': true
                                        }
                                    )
                                }
                            }
                        ),
                    ]))),

                    sh.g.simple_line(""),
                    sh.g.simple_line("// **** FRIENDLY NAMES FOR THE GLOBAL TYPES"),
                    sh.g.sub(op_dictionary_to_list($.types).map(($) => sh.g.sub([
                        sh.g.simple_line(""),
                        Type_Declaration(
                            null,
                            {
                                'name': $.key,
                                'type parameters': $.value.parameters,
                                'module parameters': x_module_parameters,
                                'function type parameters': pa.not_set(),
                                'callback': () => {
                                    return sh.b.sub([
                                        sh.b.snippet(op_create_identifier([" T ", $.key])),
                                        line_dictionary(
                                            op_flatten_dictionary(
                                                pa.dictionary_literal({
                                                    "M": x_module_parameters.map(($, key) => sh.b.snippet(op_create_identifier(["M ", key]))),
                                                    "T": $.value.parameters.map(($, key) => sh.b.snippet(op_create_identifier(["T ", key]))),
                                                }),
                                                {
                                                    'separator': " "
                                                }
                                            ),
                                            sh.b.nothing(),
                                            sh.b.snippet("<"),
                                            sh.b.snippet(">"),
                                            true,
                                        ),
                                    ])
                                }
                            }
                        ),
                    ]))),

                    sh.g.simple_line(""),
                    sh.g.simple_line("// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES"),
                    sh.g.sub(op_dictionary_to_list($.types).map(($) => sh.g.sub([
                        Type_to_Aliases(
                            $.value.type,
                            {
                                'key': ` T ${$.key}`,
                                'type parameters': $.value.parameters,
                                'module parameters': x_module_parameters,
                                'function type parameters': pa.not_set(),
                                'temp imports': x_imports,
                            }
                        ),
                    ]))),

                    sh.g.simple_line(""),
                    sh.g.simple_line("// *** ALIASES FOR NESTED TYPES"),
                    sh.g.sub(op_dictionary_to_list($.types).map(($) => sh.g.sub([
                        Type_to_Aliases(
                            $.value.type,
                            {
                                'key': $.key,
                                'type parameters': $.value.parameters,
                                'module parameters': x_module_parameters,
                                'function type parameters': pa.not_set(),
                                'temp imports': x_imports,
                            }
                        ),
                    ]))),
                    // b.array(op['to list, sorted by code point'](
                    //     op.filter(
                    //         $.types.map(($): pt.Optional_Value<null> => pa.cc($.type, ($) => {
                    //             switch ($[0]) {
                    //                 case 'number': return pa.ss($, ($) => pa.not_set())
                    //                 case 'boolean': return pa.ss($, ($) => pa.not_set())
                    //                 case 'function': return pa.ss($, ($) => pa.set(null))
                    //                 case 'component': return pa.ss($, ($) => pa.not_set())
                    //                 case 'group': return pa.ss($, ($) => pa.set(null))
                    //                 case 'nothing': return pa.ss($, ($) => pa.not_set())
                    //                 case 'state group': return pa.ss($, ($) => pa.set(null))
                    //                 case 'text': return pa.ss($, ($) => pa.not_set())
                    //                 case 'dictionary': return pa.ss($, ($) => pa.set(null))
                    //                 case 'list': return pa.ss($, ($) => pa.set(null))
                    //                 case 'computed': return pa.ss($, ($) => pa.set(null))
                    //                 case 'optional': return pa.ss($, ($) => pa.set(null))
                    //                 case 'parameter': return pa.ss($, ($) => pa.not_set())
                    //                 default: return pa.au($[0])
                    //             }
                    //         }))
                    //     )
                    // ).map(($) => sh.g.nested_block([

                    //     sh.b.snippet("export import "),
                    //     sh.b.snippet(op['create identifier']($.key),
                    //     sh.b.snippet(" = "),
                    //     sh.b.snippet(op['create identifier'](` T ${$.key}`),
                    // ]))),

                ])]
            })
            case 'set': return pa.ss($, ($) => ['directory', Module_Set($)])
            default: return pa.au($[0])
        }
    }))
}

export const Type_to_Aliases = (
    $: d_in.Type,
    $p: {
        'key': string,
        'type parameters': d_in.Type_Parameters,
        'function type parameters': pt.Optional_Value<d_in.Type_Parameters>,
        'module parameters': d_in.Type_Parameters,
        'temp imports': d_in.Module['imports'],
    }
): d_out.Group_Part => {

    const Namespace = (
        key: string,
        $p: {
            'callback': () => d_out.Group_Part
        }
    ): d_out.Group_Part => {
        return sh.g.sub([
            sh.g.simple_line(""),
            sh.g.nested_block([
                sh.b.snippet("export namespace "),
                sh.b.snippet(op_create_identifier([key])),
                sh.b.snippet(" {"),
                sh.b.indent([
                    $p.callback()
                ]),
                sh.b.snippet("}")
            ])
        ])
    }

    const Type_to_Aliases_2 = (
        $: d_in.Type,
        $p: {
            'key': string,
            'type parameters': d_in.Type_Parameters,
            'module parameters': d_in.Type_Parameters,
            'function type parameters': pt.Optional_Value<d_in.Type_Parameters>,
            'temp imports': d_in.Module['imports'],
        }
    ): d_out.Group_Part => {
        return sh.g.sub([
            Type_to_Aliases(
                $,
                {
                    'key': $p.key,
                    'type parameters': $p['type parameters'],
                    'module parameters': $p['module parameters'],
                    'function type parameters': $p['function type parameters'],
                    'temp imports': $p['temp imports'],
                }
            ),
            Type_Declaration(
                null,
                {
                    'name': $p.key,
                    'type parameters': $p['type parameters'],
                    'module parameters': $p['module parameters'],
                    'function type parameters': $p['function type parameters'],
                    'callback': () => {
                        return Type(
                            Type_to_Type(
                                $,
                                {
                                    'module parameters': pa.set($p['module parameters']),
                                    'temp imports': pa.set($p['temp imports']),
                                },
                            ),
                            {
                                'replace empty type literals by null': true
                            }
                        )
                    }
                }
            )
        ])
    }
    return pa.cc($, ($): d_out.Group_Part => {
        switch ($[0]) {
            case 'boolean': return pa.ss($, ($) => sh.g.nothing())
            case 'component': return pa.ss($, ($) => Namespace(
                $p.key,
                {
                    'callback': () => sh.g.sub([
                        sh.g.sub(op_dictionary_to_list($['type arguments']).map(($) => {
                            return Type_to_Aliases_2(
                                $.value,
                                {
                                    'module parameters': $p['module parameters'],
                                    'type parameters': $p['type parameters'],
                                    'function type parameters': $p['function type parameters'],
                                    'key': $.key,
                                    'temp imports': $p['temp imports'],
                                }
                            )
                        })),
                    ])
                }
            ))
            case 'computed': return pa.ss($, ($) => Namespace(
                $p.key,
                {
                    'callback': () => Type_to_Aliases_2(
                        $,
                        {
                            'module parameters': $p['module parameters'],
                            'type parameters': $p['type parameters'],
                            'function type parameters': $p['function type parameters'],
                            'key': "C",
                            'temp imports': $p['temp imports'],
                        }
                    )
                }
            ))
            case 'dictionary': return pa.ss($, ($) => Namespace(
                $p.key,
                {
                    'callback': () => Type_to_Aliases_2(
                        $,
                        {
                            'module parameters': $p['module parameters'],
                            'type parameters': $p['type parameters'],
                            'function type parameters': $p['function type parameters'],
                            'key': "D",
                            'temp imports': $p['temp imports'],
                        }
                    )
                }
            ))
            case 'function': return pa.ss($, ($) => Namespace(
                $p.key,
                {
                    'callback': () => sh.g.sub([
                        Type_to_Aliases_2(
                            $.context,
                            {
                                'module parameters': $p['module parameters'],
                                'type parameters': $p['type parameters'],
                                'function type parameters': pa.set($['type parameters']),
                                'key': "CONTEXT",
                                'temp imports': $p['temp imports'],
                            }
                        ),
                        Namespace("PARAMS", {
                            "callback": () => {
                                const ftp = $['type parameters']
                                return sh.g.sub(op_dictionary_to_list($.parameters).map(($) => {
                                    return Type_to_Aliases_2(
                                        $.value,
                                        {
                                            'module parameters': $p['module parameters'],
                                            'type parameters': $p['type parameters'],
                                            'function type parameters': pa.set(ftp),
                                            'key': $.key,
                                            'temp imports': $p['temp imports'],
                                        }
                                    )
                                }))
                            },
                        }),
                        Type_to_Aliases_2(
                            $.return,
                            {
                                'module parameters': $p['module parameters'],
                                'type parameters': $p['type parameters'],
                                'function type parameters': pa.set($['type parameters']),
                                'key': "RESULT",
                                'temp imports': $p['temp imports'],
                            }
                        ),
                    ])
                }
            ))
            case 'group': return pa.ss($, ($) => Namespace(
                $p.key,
                {
                    'callback': () => sh.g.sub([
                        sh.g.sub(op_dictionary_to_list($).map(($) => {
                            return Type_to_Aliases_2(
                                $.value,
                                {
                                    'module parameters': $p['module parameters'],
                                    'type parameters': $p['type parameters'],
                                    'function type parameters': $p['function type parameters'],
                                    'key': $.key,
                                    'temp imports': $p['temp imports'],
                                }
                            )
                        })),
                    ])
                }
            ))
            case 'array': return pa.ss($, ($) => Namespace(
                $p.key,
                {
                    'callback': () => Type_to_Aliases_2(
                        $,
                        {
                            'module parameters': $p['module parameters'],
                            'type parameters': $p['type parameters'],
                            'function type parameters': $p['function type parameters'],
                            'key': "L",
                            'temp imports': $p['temp imports'],
                        }
                    )
                }
            ))
            case 'null': return pa.ss($, ($) => sh.g.nothing())
            case 'number': return pa.ss($, ($) => sh.g.nothing())
            case 'optional': return pa.ss($, ($) => Namespace(
                $p.key,
                {
                    'callback': () => Type_to_Aliases_2(
                        $,
                        {
                            'module parameters': $p['module parameters'],
                            'type parameters': $p['type parameters'],
                            'function type parameters': $p['function type parameters'],
                            'key': "O",
                            'temp imports': $p['temp imports'],
                        }
                    )
                }
            ))
            case 'parameter': return pa.ss($, ($) => sh.g.nothing())
            case 'tagged union': return pa.ss($, ($) => Namespace(
                $p.key,
                {
                    'callback': () => sh.g.sub([
                        sh.g.sub(op_dictionary_to_list($).map(($) => {
                            return Type_to_Aliases_2(
                                $.value,
                                {
                                    'module parameters': $p['module parameters'],
                                    'type parameters': $p['type parameters'],
                                    'function type parameters': $p['function type parameters'],
                                    'key': $.key,
                                    'temp imports': $p['temp imports'],
                                }
                            )
                        })),
                    ])
                }
            ))
            case 'string': return pa.ss($, ($) => sh.g.nothing())
            default: return pa.au($[0])
        }
    })
}

export const Identifier = (
    $: pt.Array<string>
): string => {
    return op_join_list_of_texts($)
}

export const Type_to_Type = (
    $: d_in.Type,
    $p: {
        'module parameters': pt.Optional_Value<pt.Dictionary<null>>,
        'temp imports': pt.Optional_Value<d_in.Module['imports']>,
    }
): s_out_ts.Type => {

    return pa.cc($, ($): s_out_ts.Type => {
        switch ($[0]) {
            case 'boolean': return pa.ss($, ($) => sh2.t.boolean())
            case 'component': return pa.ss($, ($) => sh2.t.type_reference(
                //start
                pa.cc($.location, ($): string => {
                    switch ($[0]) {
                        case 'import': return pa.ss($, ($) => Identifier(pa.array_literal([" i ", $.import])))
                        case 'sibling': return pa.ss($, ($) => Identifier(pa.array_literal([" T ", $])))
                        default: return pa.au($[0])
                    }
                }),
                //tail
                op_flatten_list<string>(pa.array_literal([
                    pa.cc($.location, ($): pt.Array<string> => {
                        switch ($[0]) {
                            case 'import': return pa.ss($, ($) => pa.array_literal([
                                Identifier(pa.array_literal([" T ", $.type]))
                            ]))
                            case 'sibling': return pa.ss($, ($) => pa.array_literal([]))
                            default: return pa.au($[0])
                        }
                    }),
                    op_flatten_list<string>($['sub selection'].map(($): pt.Array<string> => pa.cc($, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return pa.ss($, ($) => pa.array_literal(["D"]))
                            case 'group': return pa.ss($, ($) => pa.array_literal([$]))
                            case 'list': return pa.ss($, ($) => pa.array_literal(["L"]))
                            case 'optional': return pa.ss($, ($) => pa.array_literal(["O"]))
                            case 'state group': return pa.ss($, ($) => pa.array_literal([
                                "SG",
                                $,
                            ]))
                            default: return pa.au($[0])
                        }
                    })))
                ])),
                //type arguments
                op_dictionary_to_list<s_out_ts.Type>(op_flatten_dictionary(
                    pa.dictionary_literal<pt.Dictionary<s_out_ts.Type>>({
                        "M": pa.cc($.location, ($): pt.Dictionary<s_out_ts.Type> => {
                            switch ($[0]) {
                                case 'import': return pa.ss($, ($) => $p['temp imports'].transform(($) => $, () => pa.panic("DSFSDFSD")).__get_entry($.import).transform(($) => $, () => {
                                    let keys = ""
                                    $p['temp imports'].map(($) => {
                                        $.map(($, key) => {
                                            keys += `, '${key}'`
                                        })
                                    })
                                    return pa.panic(`no such import: ${$.import} @ ${keys}`)
                                })['type arguments'].map(($): s_out_ts.Type => Type_to_Type(
                                    $,
                                    {
                                        'module parameters': $p['module parameters'],
                                        'temp imports': $p['temp imports'],
                                    }
                                )))
                                case 'sibling': return pa.ss($, ($): pt.Dictionary<s_out_ts.Type> => $p['module parameters'].transform(($) => $, () => pa.panic("DSFSDFSD")).map(($, key): s_out_ts.Type => sh2.t.type_reference(
                                    `M ${key}`,
                                    [],
                                    [],
                                )))
                                default: return pa.au($[0])
                            }
                        }),
                        "T": $['type arguments'].map(($): s_out_ts.Type => Type_to_Type(
                            $,
                            {
                                'module parameters': $p['module parameters'],
                                'temp imports': $p['temp imports'],
                            }
                        ))
                    }),
                    {
                        'separator': " "
                    }
                )).map(($): s_out_ts.Type => $.value)
            ))
            case 'computed': return pa.ss($, ($) => sh2.t.type_reference(
                " pt",
                ["Computed Value"],
                [
                    Type_to_Type(
                        $,
                        {
                            'module parameters': $p['module parameters'],
                            'temp imports': $p['temp imports'],
                        }
                    )
                ]
            ))
            case 'dictionary': return pa.ss($, ($) => sh2.t.type_reference(
                " pt",
                ["Dictionary"],
                [
                    Type_to_Type(
                        $,
                        {
                            'module parameters': $p['module parameters'],
                            'temp imports': $p['temp imports'],
                        }
                    )
                ]
            ))
            case 'function': return pa.ss($, ($) => sh2.t.function_(
                op_dictionary_to_list($['type parameters']).map(($) => `F ${$.key}`),
                [
                    sh2.parameter(
                        "$",
                        Type_to_Type(
                            $.context,
                            {
                                'module parameters': $p['module parameters'],
                                'temp imports': $p['temp imports'],
                            },
                        ),
                    ),
                    sh2.parameter(
                        "$p",
                        sh2.t.type_literal(
                            $.parameters.map(($) => ({
                                'readonly': true,
                                'type': Type_to_Type(
                                    $,
                                    {
                                        'module parameters': $p['module parameters'],
                                        'temp imports': $p['temp imports'],
                                    },
                                )
                            })),
                        )
                    )
                ],
                Type_to_Type(
                    $.return,
                    {
                        'module parameters': $p['module parameters'],
                        'temp imports': $p['temp imports'],
                    },
                )
            ))
            case 'group': return pa.ss($, ($) => sh2.t.type_literal($.map(($) => ({
                'readonly': true,
                'type': Type_to_Type(
                    $,
                    {
                        'module parameters': $p['module parameters'],
                        'temp imports': $p['temp imports'],
                    }
                )
            }))))

            case 'array': return pa.ss($, ($) => sh2.t.type_reference(
                " pt",
                ["Array"],
                [
                    Type_to_Type(
                        $,
                        {
                            'module parameters': $p['module parameters'],
                            'temp imports': $p['temp imports'],
                        }
                    )
                ]
            ))
            case 'null': return pa.ss($, ($) => sh2.t.null_())
            case 'number': return pa.ss($, ($) => sh2.t.number())
            case 'optional': return pa.ss($, ($) => sh2.t.type_reference(
                " pt",
                ["Optional Value"],
                [
                    Type_to_Type(
                        $,
                        {
                            'module parameters': $p['module parameters'],
                            'temp imports': $p['temp imports'],
                        }
                    )
                ]
            ))
            case 'parameter': return pa.ss($, ($) => sh2.t.type_reference(
                pa.cc($.location, ($): string => {
                    switch ($[0]) {
                        case 'module': return pa.ss($, ($) => "M")
                        case 'type': return pa.ss($, ($) => "T")
                        case 'function': return pa.ss($, ($) => "F")
                        default: return pa.au($[0])
                    }
                })
                + " "
                + $.parameter,
                [],
                []
            ))
            case 'tagged union': return pa.ss($, ($) => sh2.t.union(
                op_dictionary_to_list($).map(($) => sh2.t.tuple('readonly', [
                    sh2.t.literal_type($.key, 'apostrophe'),
                    Type_to_Type(
                        $.value,
                        {
                            'module parameters': $p['module parameters'],
                            'temp imports': $p['temp imports'],
                        }
                    )
                ]))
            ))
            case 'string': return pa.ss($, ($) => sh2.t.string())

            default: return pa.au($[0])
        }
    })
}

export const Type_Declaration = (
    $: null,
    $p: {
        'name': string,
        'type parameters': d_in.Type_Parameters,
        'module parameters': d_in.Type_Parameters,
        'function type parameters': pt.Optional_Value<d_in.Type_Parameters>,
        'callback': () => d_out.Block_Part
    }
): d_out.Group_Part => {
    return sh.g.nested_block([
        sh.b.sub([
            sh.b.snippet("export type "),
            sh.b.snippet(op_create_identifier([$p.name])),
            line_dictionary(
                op_flatten_dictionary(
                    pa.dictionary_literal({
                        "M": $p['module parameters'],
                        "T": $p['type parameters'],
                        "F": $p['function type parameters'].transform(
                            ($) => $,
                            () => pa.dictionary_literal({})
                        ),
                    }),
                    {
                        //'escape': "$",
                        'separator': " "
                    }
                ).map(($, key) => sh.b.snippet(op_create_identifier([key]))),
                sh.b.nothing(),
                sh.b.snippet("<"),
                sh.b.snippet(">"),
                true,
            ),
            sh.b.snippet(" = "),
            $p.callback()
        ])
    ])
}