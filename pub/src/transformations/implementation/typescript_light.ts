import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as d_in from "../../generated/interface/schemas/implementation/data_types/source"
import * as s_in_interface from "../../generated/interface/schemas/interface/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as _interface from "../interface/typescript_light"

import { Type } from "../typescript_light/fountain_pen_block"

import * as sh from "../../shorthands/typescript_light"


import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/operations/pure/text/join_list_of_texts"
import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/operations/pure/dictionary/flatten"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/text/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../operations/impure/text/serialize_quoted_string"
import { $$ as op_serialize_with_grave_delimiter } from "../../operations/impure/text/serialize_backticked_string"

import { $$ as op_repeat } from "pareto-standard-operations/dist/operations/impure/text/repeat"
import { $$ as op_create_valid_file_name } from "pareto-standard-operations/dist/operations/impure/text/create_valid_file_name"
import { $$ as op_create_identifier } from "../../operations/impure/text/create_identifier"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/operations/impure/dictionary/is_empty"
import { $$ as op_approximate_number_serialize } from "exupery-standard-library/dist/operations/impure/approximate_number/serialize"
import { $$ as op_integer_serialize } from "exupery-standard-library/dist/operations/impure/integer/serialize"

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
                    return op_create_valid_file_name($, { 'replace spaces with underscores': false }) //this filename will be placed in a quoted string
                }
                const x: d_out.Group = sh.group([
                    sh.g.simple_line("import * as _pa from 'exupery-core-alg'"),
                    $p.phase === 'development' ? sh.g.simple_line("import * as _pd from 'exupery-core-dev'") : sh.g.nothing(),

                    sh.g.simple_line(""),
                    sh.g.sub(op_dictionary_to_list($['type imports']).map(($) => sh.g.sub([
                        sh.g.nested_line([
                            sh.l.snippet("import * as "),
                            sh.l.snippet(op_create_identifier([" i ", $.key])),
                            sh.l.snippet(" from "),
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
                        sh.g.nested_line([
                            sh.l.snippet("import * as "),
                            sh.l.snippet(op_create_identifier([" i var ", $.key])),
                            sh.l.snippet(" from "),
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
    $: pt.Dictionary<d_out.Line_Part>,
    if_empty: d_out.Line_Part,
    prefix: d_out.Line_Part,
    suffix: d_out.Line_Part,
    add_commas: boolean
): d_out.Line_Part {
    let is_empty = true
    $.map(($) => {
        is_empty = false
    })
    if (is_empty) {
        return if_empty
    } else {
        let is_first = true
        const x: d_out.Line_Part = sh.l.sub([
            prefix,
            sh.l.sub(op_dictionary_to_list($).map(($): d_out.Line_Part => {

                const out = sh.l.sub([
                    is_first ?
                        sh.l.nothing()
                        : add_commas
                            ? sh.l.snippet(", ")
                            : sh.l.nothing()
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
): d_out.Line_Part => {
    return sh.l.snippet($p.delimiter === "quote" ? op_serialize_with_quote_delimiter($) : op_serialize_with_apostrophe_delimiter($))
}

export const Selection = (
    $: d_in.Selection,
    $p: {
        'temp imports': s_in_interface.Imports
    }
): d_out.Line_Part => {
    return sh.l.sub([
        pa.cc($.start, ($) => {
            switch ($[0]) {
                case 'abort': return pa.ss($, ($) => sh.l.snippet("_pa.panic('ABORT SELECTION')"))
                case 'transform optional value': return pa.ss($, ($) => sh.l.sub([
                    Selection($.source, $p),
                    sh.l.snippet(".transform("),
                    sh.l.indent([
                        sh.g.nested_line([
                            sh.l.snippet("($) => "),
                            Selection($['if set'], $p),
                            sh.l.snippet(","),
                        ]),
                        sh.g.nested_line([
                            sh.l.snippet("() => "),
                            Selection($['if not set'], $p),
                        ]),
                    ]),
                    sh.l.snippet(")"),
                ]))

                case 'call': return pa.ss($, ($) => sh.l.sub([
                    Selection($.source, $p),
                    sh.l.snippet("("),
                    sh.l.indent([
                        sh.g.nested_line([
                            Selection($.context, $p), $.arguments.transform(
                                ($) => sh.l.snippet(","),
                                () => sh.l.nothing()
                            ),
                        ]),
                        $.arguments.transform(
                            ($) => sh.g.nested_line([
                                op_dictionary_is_empty($)
                                    ? sh.l.snippet("null")
                                    : sh.l.sub([
                                        sh.l.snippet("{"),
                                        sh.l.indent([
                                            sh.g.sub(op_dictionary_to_list($).map(($) => sh.g.sub([
                                                sh.g.nested_line([
                                                    String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                    sh.l.snippet(": "),
                                                    Initialization($.value, $p),
                                                    sh.l.snippet(","),
                                                ]),
                                            ]))),
                                        ]),
                                        sh.l.snippet("}")
                                    ]),
                            ]),
                            () => sh.g.nothing()
                        ),
                    ]),
                    sh.l.snippet(")"),
                ]))
                case 'implement me': return pa.ss($, ($) => sh.l.snippet("_pd.implement_me()"))
                case 'argument': return pa.ss($, ($) => sh.l.snippet(op_create_identifier(["FOOO FIX ARGUMENT"])))
                case 'context': return pa.ss($, ($) => sh.l.snippet("$"))
                case 'variable': return pa.ss($, ($) => sh.l.snippet(op_create_identifier([$])))
                case 'parameter': return pa.ss($, ($) => sh.l.sub([
                    sh.l.snippet("$p["),
                    String_Literal($, { 'delimiter': "apostrophe" }),
                    sh.l.snippet("]"),
                ]))
                case 'imported variable': return pa.ss($, ($) => sh.l.sub([
                    sh.l.snippet(op_create_identifier([$.import])),
                    sh.l.snippet("."),
                    sh.l.snippet(op_create_identifier([$.variable])),
                ]))
                default: return pa.au($[0])
            }
        }),
        sh.l.sub($.tail.map(($) => sh.l.sub([
            sh.l.snippet("["),
            String_Literal($, { 'delimiter': "apostrophe" }),
            sh.l.snippet("]"),
        ]))),
    ])
}

export const Initialization = (
    $: d_in.Initialization,
    $p: {
        'temp imports': s_in_interface.Imports
    }
): d_out.Line_Part => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'block': return pa.ss($, ($) => sh.l.sub([
                sh.l.snippet("_pa.block("),
                sh.l.snippet("() => {"),
                sh.l.indent([
                    //temp variables
                    sh.g.sub($['temp ordered variables'].map(($) => sh.g.nested_line([
                        sh.l.snippet("const "),
                        sh.l.snippet(op_create_identifier([$.name])),
                        $.type.transform(
                            ($) => sh.l.sub([
                                sh.l.snippet(": "),
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
                            () => sh.l.nothing()
                        ),
                        sh.l.snippet(" = "),
                        Initialization($.initialization, {
                            'temp imports': $p['temp imports']
                        })
                    ]))),
                    Variables($.variables, {
                        'type imports': $p['temp imports'],
                        'export': false,
                    }),
                    sh.g.nested_line([
                        sh.l.snippet("return "),
                        Initialization($.initialization, $p),
                    ])
                ]),
                sh.l.snippet("})"),
            ]))
            case 'change context': return pa.ss($, ($) => sh.l.sub([
                sh.l.snippet("_pa.cc("),
                Selection($['new context'], $p),
                sh.l.snippet(", ($) => "),
                Initialization($.initialization, $p),
                sh.l.snippet(")"),
            ]))
            case 'literal': return pa.ss($, ($) => Literal($.value, $p))
            case 'selection': return pa.ss($, ($) => Selection($, $p))
            case 'transformation': return pa.ss($, ($) => {
                const p_source = $.source
                return sh.l.sub([
                    pa.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'array': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => sh.l.sub([
                                        Selection(p_source, $p),
                                        sh.l.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'boolean': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'not': return pa.ss($, ($) => sh.l.sub([ sh.l.snippet("FIXME BOOLEAN NOT")]))
                                    case 'transform': return pa.ss($, ($) => sh.l.sub([
                                        Selection(p_source, $p),
                                        sh.l.indent([
                                            sh.g.nested_line([
                                                sh.l.snippet("? "),
                                                Initialization($['if true'], $p),
                                            ]),
                                            sh.g.nested_line([
                                                sh.l.snippet(": "),
                                                Initialization($['if false'], $p),
                                            ]),
                                        ])
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'dictionary': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => sh.l.sub([
                                        Selection(p_source, $p),
                                        sh.l.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'function': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {

                                    case 'call': return pa.ss($, ($) => sh.l.sub([
                                        Selection(p_source, $p),
                                        sh.l.snippet("("),
                                        sh.l.indent([
                                            sh.g.nested_line([
                                                Initialization($.context, $p), $.arguments.transform(
                                                    ($) => sh.l.snippet(","),
                                                    () => sh.l.nothing()
                                                ),
                                            ]),
                                            $.arguments.transform(
                                                ($) => sh.g.nested_line([
                                                    op_dictionary_is_empty($)
                                                        ? sh.l.snippet("null")
                                                        : sh.l.sub([
                                                            sh.l.snippet("{"),
                                                            sh.l.indent([
                                                                sh.g.sub(op_dictionary_to_list($).map(($) => sh.g.sub([
                                                                    sh.g.nested_line([
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        sh.l.snippet(": "),
                                                                        Initialization($.value, $p),
                                                                        sh.l.snippet(","),
                                                                    ]),
                                                                ]))),
                                                            ]),
                                                            sh.l.snippet("}")
                                                        ]),
                                                ]),
                                                () => sh.g.nothing()
                                            ),
                                        ]),
                                        sh.l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))

                            case 'optional': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => sh.l.sub([
                                        Selection(p_source, $p),
                                        sh.l.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.l.snippet(")"),
                                    ]))
                                    case 'transform': return pa.ss($, ($) => sh.l.sub([
                                        Selection(p_source, $p),
                                        sh.l.snippet(".transform("),
                                        sh.l.indent([
                                            sh.g.nested_line([
                                                sh.l.snippet("($)"),
                                                $['temp resulting node'].transform(
                                                    ($) => sh.l.sub([
                                                        sh.l.snippet(": "),
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
                                                    () => sh.l.nothing()
                                                ),
                                                sh.l.snippet(" => "),
                                                Initialization($['if set'], $p),
                                                sh.l.snippet(","),
                                            ]),
                                            sh.g.nested_line([
                                                sh.l.snippet("() => "),
                                                Initialization($['if not set'], $p),
                                            ]),
                                        ]),
                                        sh.l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))

                            case 'tagged union': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {

                                    case 'switch': return pa.ss($, ($) => sh.l.sub([
                                        sh.l.snippet("_pa.cc("),
                                        Selection(p_source, $p),
                                        sh.l.snippet(", ($)"),
                                        $['temp resulting node'].transform(
                                            ($) => sh.l.sub([
                                                sh.l.snippet(": "),
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
                                            () => sh.l.nothing()
                                        ),
                                        sh.l.snippet(" => {"),
                                        sh.l.indent([
                                            sh.g.nested_line([
                                                pa.cc($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'full': return pa.ss($, ($) => sh.l.sub([
                                                            sh.l.snippet("switch ($[0]) {"),
                                                            sh.l.indent([
                                                                sh.g.sub(op_dictionary_to_list($.cases).map(($) => sh.g.sub([
                                                                    sh.g.nested_line([
                                                                        sh.l.snippet("case "),
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        sh.l.snippet(": return _pa.ss($, ($) => "),
                                                                        Initialization($.value, $p),
                                                                        sh.l.snippet(")"),
                                                                    ])
                                                                ]))),
                                                                sh.g.simple_line("default: return _pa.au($[0])")
                                                            ]),
                                                            sh.l.snippet("}"),
                                                        ]))
                                                        case 'partial': return pa.ss($, ($) => sh.l.sub([
                                                            sh.l.snippet("switch ($[0]) {"),
                                                            sh.l.indent([
                                                                sh.g.sub(op_dictionary_to_list($.cases).map(($) => sh.g.sub([
                                                                    sh.g.nested_line([
                                                                        sh.l.snippet("case "),
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        sh.l.snippet(": return _pa.ss($, ($) => "),
                                                                        Initialization($.value, $p),
                                                                        sh.l.snippet(")"),
                                                                    ])
                                                                ]))),
                                                                sh.g.nested_line([
                                                                    sh.l.snippet("default: return "),
                                                                    //Expression($.default, $p),
                                                                ])
                                                            ]),
                                                            sh.l.snippet("}"),
                                                        ]))
                                                        default: return pa.au($[0])
                                                    }
                                                }),
                                            ]),
                                        ]),
                                        sh.l.snippet("})"),
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
        sh.g.nested_line([
            $p.export ? sh.l.snippet("export ") : sh.l.nothing(),
            sh.l.snippet("const "),
            sh.l.snippet(op_create_identifier([$.key])),
            $.value.type.transform(
                ($) => sh.l.sub([
                    sh.l.snippet(": "),
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
                () => sh.l.nothing()
            ),
            sh.l.snippet(" = "),
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
): d_out.Line_Part => {
    return sh.l.sub([
        pa.cc($, ($): d_out.Line_Part => {
            switch ($[0]) {
                case 'boolean': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'true': return sh.l.snippet("true")
                        case 'false': return sh.l.snippet("false")
                        default: return pa.au($[0])
                    }
                }))
                case 'dictionary': return pa.ss($, ($) => sh.l.sub([
                    sh.l.snippet("_pa.dictionary_literal({"),
                    sh.l.indent([
                        sh.g.sub(op_dictionary_to_list($).map(($) => sh.g.nested_line([
                            String_Literal($.key, { 'delimiter': "apostrophe" }),
                            sh.l.snippet(": "),
                            Initialization($.value, $p),
                            sh.l.snippet(","),
                        ])
                        )),
                    ]),
                    sh.l.snippet("})"),
                ]))
                case 'function': return pa.ss($, ($) => sh.l.sub([
                    sh.l.snippet("($"),
                    $['temp has parameters'] ? sh.l.snippet(", $p") : sh.l.nothing(),
                    sh.l.snippet(")"),
                    $['temp resulting node'].transform(
                        ($) => sh.l.sub([
                            sh.l.snippet(": "),
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
                        () => sh.l.nothing()
                    ),
                    sh.l.snippet(" => "),
                    Initialization($.initialization, $p),
                ]))
                case 'group': return pa.ss($, ($) => line_dictionary(
                    $.map(($, key) => sh.l.indent([
                        sh.g.nested_line([
                            String_Literal(key, { 'delimiter': "apostrophe" }),
                            sh.l.snippet(": "),
                            Initialization($, $p),
                            sh.l.snippet(","),
                        ])
                    ])),
                    sh.l.snippet("null"),
                    sh.l.snippet("({"),
                    sh.l.snippet("})"),
                    false
                ))

                case 'array': return pa.ss($, ($) => sh.l.sub([
                    sh.l.snippet("_pa.array_literal(["),
                    sh.l.indent([
                        sh.g.sub($.map(($) => sh.g.nested_line([
                            Initialization($, $p),
                            sh.l.snippet(","),
                        ])
                        )),
                    ]),
                    sh.l.snippet("])"),
                ]))
                case 'null': return pa.ss($, ($) => sh.l.snippet("null"))
                case 'number': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'floting point': return pa.ss($, ($) => sh.l.snippet(op_approximate_number_serialize($)))
                        case 'integer': return pa.ss($, ($) => sh.l.snippet(op_integer_serialize($)))
                        case 'signed integer': return pa.ss($, ($) => sh.l.snippet(op_integer_serialize($)))
                        default: return pa.au($[0])
                    }
                }))
                case 'optional': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return sh.l.snippet("_pa.not_set()")
                        case 'set': return pa.ss($, ($) => sh.l.sub([
                            sh.l.snippet("_pa.set("),
                            Initialization($, $p),
                            sh.l.snippet(")"),
                        ]))
                        default: return pa.au($[0])
                    }
                }))
                case 'tagged union': return pa.ss($, ($) => sh.l.sub([
                    sh.l.snippet("["),
                    String_Literal($.case, { 'delimiter': "apostrophe" }),
                    sh.l.snippet(", "),
                    Initialization($.value, $p),
                    sh.l.snippet("]"),
                ]))
                case 'string': return pa.ss($, ($) => {
                    const value = $.value
                    return pa.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'quote': return pa.ss($, ($) => String_Literal(value, { 'delimiter': "quote" }))
                            case 'backtick': return pa.ss($, ($) => sh.l.snippet(op_serialize_with_grave_delimiter(value)))
                            default: return pa.au($[0])
                        }
                    })
                })
                default: return pa.au($[0])
            }
        })
    ])
}