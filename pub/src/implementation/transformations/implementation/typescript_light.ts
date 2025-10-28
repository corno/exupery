import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as d_in from "../../../interface/generated/pareto/schemas/implementation/data_types/source"
import * as s_in_interface from "../../../interface/generated/pareto/schemas/interface/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as _interface from "../interface/typescript_light"

import { Type } from "../typescript_light/fountain_pen_block"

import * as sh from "../../../shorthands/typescript_light"


import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/implementation/operations/pure/text/join_list_of_texts"
import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/implementation/operations/pure/dictionary/flatten"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_serialize_with_apostrophe_delimiter } from "../../../implementation/operations/impure/text/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../../implementation/operations/impure/text/serialize_quoted_string"
import { $$ as op_serialize_with_grave_delimiter } from "../../../implementation/operations/impure/text/serialize_backticked_string"

import { $$ as op_repeat } from "pareto-standard-operations/dist/implementation/operations/impure/text/repeat"
import { $$ as op_create_valid_file_name } from "pareto-standard-operations/dist/implementation/operations/impure/text/create_valid_file_name"
import { $$ as op_create_identifier } from "../../../implementation/operations/impure/text/create_identifier"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/implementation/operations/impure/dictionary/is_empty"
import { $$ as op_approximate_number_serialize } from "exupery-standard-library/dist/implementation/operations/impure/approximate_number/serialize"
import { $$ as op_integer_serialize } from "exupery-standard-library/dist/implementation/operations/impure/integer/serialize"

export const Module_Set = (
    $: d_in.Module_Set,
    $p: {
        'phase': 'development' | 'production'
    }
): d_out.Directory => {
    return $.map(($, key) => pa.cc($, ($) => {
        switch ($[0]) {
            case 'module': return pa.ss($, ($): d_out.Directory.D => {
                const type_imports = $['type imports']
                const valid_file_name = ($: string): string => {
                    return op_create_valid_file_name($, { 'replace spaces with underscores': true })
                }
                const x: d_out.Group = sh.group([
                    sh.g.simple_line("import * as _pa from 'exupery-core-alg'"),
                    $p.phase === 'development' ? sh.g.simple_line("import * as _pd from 'exupery-core-dev'") : sh.g.nothing(),

                    sh.g.simple_line(""),
                    sh.g.sub(op_dictionary_to_list($['type imports']).map(($) => sh.g.sub([
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

                    sh.g.simple_line(""),
                    sh.g.sub(op_dictionary_to_list($['variable imports']).map(($) => sh.g.sub([
                        sh.g.nested_block([
                            sh.b.snippet("import * as "),
                            sh.b.snippet(op_create_identifier([" i var ", $.key])),
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

                    sh.g.simple_line(""),
                    Variables(
                        $.variables,
                        {
                            'type imports': type_imports,
                            'export': true,
                        }
                    ),
                ])
                return ['file', x]
            })
            case 'set': return pa.ss($, ($) => ['directory', Module_Set($, $p)])
            default: return pa.au($[0])
        }
    }))
}


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
        const x: d_out.Block_Part = sh.b.sub([
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
        return x
    }

}

export const String_Literal = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): d_out.Block_Part => {
    return sh.b.snippet($p.delimiter === "quote" ? op_serialize_with_quote_delimiter($) : op_serialize_with_apostrophe_delimiter($))
}

export const Selection = (
    $: d_in.Selection,
    $p: {
        'temp imports': s_in_interface.Imports
    }
): d_out.Block_Part => {
    return sh.b.sub([
        pa.cc($.start, ($) => {
            switch ($[0]) {
                case 'abort': return pa.ss($, ($) => sh.b.snippet("_pa.panic('ABORT SELECTION')"))
                case 'transform optional value': return pa.ss($, ($) => sh.b.sub([
                    Selection($.source, $p),
                    sh.b.snippet(".transform("),
                    sh.b.indent([
                        sh.g.nested_block([
                            sh.b.snippet("($) => "),
                            Selection($['if set'], $p),
                            sh.b.snippet(","),
                        ]),
                        sh.g.nested_block([
                            sh.b.snippet("() => "),
                            Selection($['if not set'], $p),
                        ]),
                    ]),
                    sh.b.snippet(")"),
                ]))

                case 'call': return pa.ss($, ($) => sh.b.sub([
                    Selection($.source, $p),
                    sh.b.snippet("("),
                    sh.b.indent([
                        sh.g.nested_block([
                            Selection($.context, $p), $.arguments.transform(
                                ($) => sh.b.snippet(","),
                                () => sh.b.nothing()
                            ),
                        ]),
                        $.arguments.transform(
                            ($) => sh.g.nested_block([
                                op_dictionary_is_empty($)
                                    ? sh.b.snippet("null")
                                    : sh.b.sub([
                                        sh.b.snippet("{"),
                                        sh.b.indent([
                                            sh.g.sub(op_dictionary_to_list($).map(($) => sh.g.sub([
                                                sh.g.nested_block([
                                                    String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                    sh.b.snippet(": "),
                                                    Initialization($.value, $p),
                                                    sh.b.snippet(","),
                                                ]),
                                            ]))),
                                        ]),
                                        sh.b.snippet("}")
                                    ]),
                            ]),
                            () => sh.g.nothing()
                        ),
                    ]),
                    sh.b.snippet(")"),
                ]))
                case 'implement me': return pa.ss($, ($) => sh.b.snippet("_pd.implement_me()"))
                case 'argument': return pa.ss($, ($) => sh.b.snippet(op_create_identifier(["FOOO FIX ARGUMENT"])))
                case 'context': return pa.ss($, ($) => sh.b.snippet("$"))
                case 'variable': return pa.ss($, ($) => sh.b.snippet(op_create_identifier([$])))
                case 'parameter': return pa.ss($, ($) => sh.b.sub([
                    sh.b.snippet("$p["),
                    String_Literal($, { 'delimiter': "apostrophe" }),
                    sh.b.snippet("]"),
                ]))
                case 'imported variable': return pa.ss($, ($) => sh.b.sub([
                    sh.b.snippet(op_create_identifier([$.import])),
                    sh.b.snippet("."),
                    sh.b.snippet(op_create_identifier([$.variable])),
                ]))
                default: return pa.au($[0])
            }
        }),
        sh.b.sub($.tail.map(($) => sh.b.sub([
            sh.b.snippet("["),
            String_Literal($, { 'delimiter': "apostrophe" }),
            sh.b.snippet("]"),
        ]))),
    ])
}

export const Initialization = (
    $: d_in.Initialization,
    $p: {
        'temp imports': s_in_interface.Imports
    }
): d_out.Block_Part => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'block': return pa.ss($, ($) => sh.b.sub([
                sh.b.snippet("_pa.block("),
                sh.b.snippet("() => {"),
                sh.b.indent([
                    //temp variables
                    sh.g.sub($['temp ordered variables'].map(($) => sh.g.nested_block([
                        sh.b.snippet("const "),
                        sh.b.snippet(op_create_identifier([$.name])),
                        $.type.transform(
                            ($) => sh.b.sub([
                                sh.b.snippet(": "),
                                Type(
                                    _interface.Type_to_Type(
                                        $,
                                        {
                                            'module parameters': pa.not_set(),
                                            'temp imports': pa.set($p['temp imports']),
                                        },
                                    ),
                                    {
                                        'replace empty type literals by null': true
                                    }
                                ),
                            ]),
                            () => sh.b.nothing()
                        ),
                        sh.b.snippet(" = "),
                        Initialization($.initialization, {
                            'temp imports': $p['temp imports']
                        })
                    ]))),
                    Variables($.variables, {
                        'type imports': $p['temp imports'],
                        'export': false,
                    }),
                    sh.g.nested_block([
                        sh.b.snippet("return "),
                        Initialization($.initialization, $p),
                    ])
                ]),
                sh.b.snippet("})"),
            ]))
            case 'change context': return pa.ss($, ($) => sh.b.sub([
                sh.b.snippet("_pa.cc("),
                Selection($['new context'], $p),
                sh.b.snippet(", ($) => "),
                Initialization($.initialization, $p),
                sh.b.snippet(")"),
            ]))
            case 'literal': return pa.ss($, ($) => Literal($.value, $p))
            case 'selection': return pa.ss($, ($) => Selection($, $p))
            case 'transformation': return pa.ss($, ($) => {
                const p_source = $.source
                return sh.b.sub([
                    pa.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'array': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.b.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'boolean': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'not': return pa.ss($, ($) => sh.b.sub([ sh.b.snippet("FIXME BOOLEAN NOT")]))
                                    case 'transform': return pa.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.indent([
                                            sh.g.nested_block([
                                                sh.b.snippet("? "),
                                                Initialization($['if true'], $p),
                                            ]),
                                            sh.g.nested_block([
                                                sh.b.snippet(": "),
                                                Initialization($['if false'], $p),
                                            ]),
                                        ])
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'dictionary': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.b.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'function': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {

                                    case 'call': return pa.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet("("),
                                        sh.b.indent([
                                            sh.g.nested_block([
                                                Initialization($.context, $p), $.arguments.transform(
                                                    ($) => sh.b.snippet(","),
                                                    () => sh.b.nothing()
                                                ),
                                            ]),
                                            $.arguments.transform(
                                                ($) => sh.g.nested_block([
                                                    op_dictionary_is_empty($)
                                                        ? sh.b.snippet("null")
                                                        : sh.b.sub([
                                                            sh.b.snippet("{"),
                                                            sh.b.indent([
                                                                sh.g.sub(op_dictionary_to_list($).map(($) => sh.g.sub([
                                                                    sh.g.nested_block([
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        sh.b.snippet(": "),
                                                                        Initialization($.value, $p),
                                                                        sh.b.snippet(","),
                                                                    ]),
                                                                ]))),
                                                            ]),
                                                            sh.b.snippet("}")
                                                        ]),
                                                ]),
                                                () => sh.g.nothing()
                                            ),
                                        ]),
                                        sh.b.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))

                            case 'optional': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.b.snippet(")"),
                                    ]))
                                    case 'transform': return pa.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet(".transform("),
                                        sh.b.indent([
                                            sh.g.nested_block([
                                                sh.b.snippet("($)"),
                                                $['temp resulting node'].transform(
                                                    ($) => sh.b.sub([
                                                        sh.b.snippet(": "),
                                                        Type(
                                                            _interface.Type_to_Type(
                                                                $,
                                                                {
                                                                    'module parameters': pa.not_set(),
                                                                    'temp imports': pa.set($p['temp imports']),
                                                                },
                                                            ),
                                                            {
                                                                'replace empty type literals by null': true
                                                            }
                                                        ),
                                                    ]),
                                                    () => sh.b.nothing()
                                                ),
                                                sh.b.snippet(" => "),
                                                Initialization($['if set'], $p),
                                                sh.b.snippet(","),
                                            ]),
                                            sh.g.nested_block([
                                                sh.b.snippet("() => "),
                                                Initialization($['if not set'], $p),
                                            ]),
                                        ]),
                                        sh.b.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))

                            case 'tagged union': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {

                                    case 'switch': return pa.ss($, ($) => sh.b.sub([
                                        sh.b.snippet("_pa.cc("),
                                        Selection(p_source, $p),
                                        sh.b.snippet(", ($)"),
                                        $['temp resulting node'].transform(
                                            ($) => sh.b.sub([
                                                sh.b.snippet(": "),
                                                Type(
                                                    _interface.Type_to_Type(
                                                        $,
                                                        {
                                                            'module parameters': pa.not_set(),
                                                            'temp imports': pa.set($p['temp imports']),
                                                        },
                                                    ),
                                                    {
                                                        'replace empty type literals by null': true
                                                    }
                                                ),
                                            ]),
                                            () => sh.b.nothing()
                                        ),
                                        sh.b.snippet(" => {"),
                                        sh.b.indent([
                                            sh.g.nested_block([
                                                pa.cc($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'full': return pa.ss($, ($) => sh.b.sub([
                                                            sh.b.snippet("switch ($[0]) {"),
                                                            sh.b.indent([
                                                                sh.g.sub(op_dictionary_to_list($.cases).map(($) => sh.g.sub([
                                                                    sh.g.nested_block([
                                                                        sh.b.snippet("case "),
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        sh.b.snippet(": return _pa.ss($, ($) => "),
                                                                        Initialization($.value, $p),
                                                                        sh.b.snippet(")"),
                                                                    ])
                                                                ]))),
                                                                sh.g.simple_line("default: return _pa.au($[0])")
                                                            ]),
                                                            sh.b.snippet("}"),
                                                        ]))
                                                        case 'partial': return pa.ss($, ($) => sh.b.sub([
                                                            sh.b.snippet("switch ($[0]) {"),
                                                            sh.b.indent([
                                                                sh.g.sub(op_dictionary_to_list($.cases).map(($) => sh.g.sub([
                                                                    sh.g.nested_block([
                                                                        sh.b.snippet("case "),
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        sh.b.snippet(": return _pa.ss($, ($) => "),
                                                                        Initialization($.value, $p),
                                                                        sh.b.snippet(")"),
                                                                    ])
                                                                ]))),
                                                                sh.g.nested_block([
                                                                    sh.b.snippet("default: return "),
                                                                    //Expression($.default, $p),
                                                                ])
                                                            ]),
                                                            sh.b.snippet("}"),
                                                        ]))
                                                        default: return pa.au($[0])
                                                    }
                                                }),
                                            ]),
                                        ]),
                                        sh.b.snippet("})"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            default: return pa.au($[0])
                        }
                    })
                ])
            })
            default: return pa.au($[0])
        }
    })
}

export const Variables = (
    $: d_in.Variables,
    $p: {
        'type imports': s_in_interface.Imports
        'export': boolean
    }
): d_out.Group_Part => {
    return sh.g.sub(op_dictionary_to_list($).map(($) => sh.g.sub([
        sh.g.nested_block([
            $p.export ? sh.b.snippet("export ") : sh.b.nothing(),
            sh.b.snippet("const "),
            sh.b.snippet(op_create_identifier([$.key])),
            $.value.type.transform(
                ($) => sh.b.sub([
                    sh.b.snippet(": "),
                    Type(
                        _interface.Type_to_Type(
                            $,
                            {
                                'module parameters': pa.not_set(),
                                'temp imports': pa.set($p['type imports']),
                            },
                        ),
                        {
                            'replace empty type literals by null': true
                        }
                    ),
                ]),
                () => sh.b.nothing()
            ),
            sh.b.snippet(" = "),
            Initialization($.value.initialization, {
                'temp imports': $p['type imports']
            })
        ])

    ])))
}

export const Literal = (
    $: d_in.Literal,
    $p: {
        'temp imports': s_in_interface.Imports
    },
): d_out.Block_Part => {
    return sh.b.sub([
        pa.cc($, ($): d_out.Block_Part => {
            switch ($[0]) {
                case 'boolean': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'true': return sh.b.snippet("true")
                        case 'false': return sh.b.snippet("false")
                        default: return pa.au($[0])
                    }
                }))
                case 'dictionary': return pa.ss($, ($) => sh.b.sub([
                    sh.b.snippet("_pa.dictionary_literal({"),
                    sh.b.indent([
                        sh.g.sub(op_dictionary_to_list($).map(($) => sh.g.nested_block([
                            String_Literal($.key, { 'delimiter': "apostrophe" }),
                            sh.b.snippet(": "),
                            Initialization($.value, $p),
                            sh.b.snippet(","),
                        ])
                        )),
                    ]),
                    sh.b.snippet("})"),
                ]))
                case 'function': return pa.ss($, ($) => sh.b.sub([
                    sh.b.snippet("($"),
                    $['temp has parameters'] ? sh.b.snippet(", $p") : sh.b.nothing(),
                    sh.b.snippet(")"),
                    $['temp resulting node'].transform(
                        ($) => sh.b.sub([
                            sh.b.snippet(": "),
                            Type(
                                _interface.Type_to_Type(
                                    $,
                                    {
                                        'module parameters': pa.not_set(),
                                        'temp imports': pa.set($p['temp imports']),
                                    },
                                ),
                                {
                                    'replace empty type literals by null': true
                                }
                            ),
                        ]),
                        () => sh.b.nothing()
                    ),
                    sh.b.snippet(" => "),
                    Initialization($.initialization, $p),
                ]))
                case 'group': return pa.ss($, ($) => line_dictionary(
                    $.map(($, key) => sh.b.indent([
                        sh.g.nested_block([
                            String_Literal(key, { 'delimiter': "apostrophe" }),
                            sh.b.snippet(": "),
                            Initialization($, $p),
                            sh.b.snippet(","),
                        ])
                    ])),
                    sh.b.snippet("null"),
                    sh.b.snippet("({"),
                    sh.b.snippet("})"),
                    false
                ))

                case 'array': return pa.ss($, ($) => sh.b.sub([
                    sh.b.snippet("_pa.array_literal(["),
                    sh.b.indent([
                        sh.g.sub($.map(($) => sh.g.nested_block([
                            Initialization($, $p),
                            sh.b.snippet(","),
                        ])
                        )),
                    ]),
                    sh.b.snippet("])"),
                ]))
                case 'null': return pa.ss($, ($) => sh.b.snippet("null"))
                case 'number': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'floting point': return pa.ss($, ($) => sh.b.snippet(op_approximate_number_serialize($)))
                        case 'integer': return pa.ss($, ($) => sh.b.snippet(op_integer_serialize($)))
                        case 'signed integer': return pa.ss($, ($) => sh.b.snippet(op_integer_serialize($)))
                        default: return pa.au($[0])
                    }
                }))
                case 'optional': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return sh.b.snippet("_pa.not_set()")
                        case 'set': return pa.ss($, ($) => sh.b.sub([
                            sh.b.snippet("_pa.set("),
                            Initialization($, $p),
                            sh.b.snippet(")"),
                        ]))
                        default: return pa.au($[0])
                    }
                }))
                case 'tagged union': return pa.ss($, ($) => sh.b.sub([
                    sh.b.snippet("["),
                    String_Literal($.case, { 'delimiter': "apostrophe" }),
                    sh.b.snippet(", "),
                    Initialization($.value, $p),
                    sh.b.snippet("]"),
                ]))
                case 'string': return pa.ss($, ($) => {
                    const value = $.value
                    return pa.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'quote': return pa.ss($, ($) => String_Literal(value, { 'delimiter': "quote" }))
                            case 'backtick': return pa.ss($, ($) => sh.b.snippet(op_serialize_with_grave_delimiter(value)))
                            default: return pa.au($[0])
                        }
                    })
                })
                default: return pa.au($[0])
            }
        })
    ])
}