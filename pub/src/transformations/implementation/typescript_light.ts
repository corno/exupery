import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as d_in from "../../generated/interface/schemas/implementation/data_types/source"
import * as s_in_interface from "../../generated/interface/schemas/interface/data_types/source"
import * as d_out from "../../generated/interface/schemas/typescript_light/data_types/target"

import * as _interface from "../interface/typescript_light"

import { Type } from "../typescript_light/fountain_pen_block"

import {
    b, l, block
} from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/pure/text/join_list_of_texts"
import { $$ as op_flatten_dictionary } from "pareto-standard-operations/dist/pure/dictionary/flatten"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../operations/impure/serialize_quoted_string"
import { $$ as op_serialize_with_grave_delimiter } from "../../operations/impure/serialize_backticked_string"

import { $$ as op_repeat } from "pareto-standard-operations/dist/impure/text/repeat"
import { $$ as op_create_valid_file_name } from "pareto-standard-operations/dist/impure/text/create_valid_file_name"
import { $$ as op_create_identifier } from "../../operations/impure/create_identifier"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/impure/dictionary/is_empty"
import { $$ as op_approximate_number_serialize } from "exupery-standard-library/dist/approximate_number/serialize"
import { $$ as op_integer_serialize } from "exupery-standard-library/dist/integer/serialize"

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
                const x: d_out.Block = block([
                    b.simple_line("import * as _pa from 'exupery-core-alg'"),
                    $p.phase === 'development' ? b.simple_line("import * as _pd from 'exupery-core-dev'") : b.nothing(),

                    b.simple_line(""),
                    b.sub(op_dictionary_to_list($['type imports']).map(($) => b.sub([
                        b.nested_line([
                            l.snippet("import * as "),
                            l.snippet(op_create_identifier([" i ", $.key])),
                            l.snippet(" from "),
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

                    b.simple_line(""),
                    b.sub(op_dictionary_to_list($['variable imports']).map(($) => b.sub([
                        b.nested_line([
                            l.snippet("import * as "),
                            l.snippet(op_create_identifier([" i var ", $.key])),
                            l.snippet(" from "),
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

                    b.simple_line(""),
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
        const x: d_out.Line_Part = l.sub([
            prefix,
            l.sub(op_dictionary_to_list($).map(($): d_out.Line_Part => {

                const out = l.sub([
                    is_first ?
                        l.nothing()
                        : add_commas
                            ? l.snippet(", ")
                            : l.nothing()
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
    return l.snippet($p.delimiter === "quote" ? op_serialize_with_quote_delimiter($) : op_serialize_with_apostrophe_delimiter($))
}

export const Selection = (
    $: d_in.Selection,
    $p: {
        'temp imports': s_in_interface.Imports
    }
): d_out.Line_Part => {
    return l.sub([
        pa.cc($.start, ($) => {
            switch ($[0]) {
                case 'abort': return pa.ss($, ($) => l.snippet("_pa.panic('ABORT SELECTION')"))
                case 'transform optional value': return pa.ss($, ($) => l.sub([
                    Selection($.source, $p),
                    l.snippet(".transform("),
                    l.indent([
                        b.nested_line([
                            l.snippet("($) => "),
                            Selection($['if set'], $p),
                            l.snippet(","),
                        ]),
                        b.nested_line([
                            l.snippet("() => "),
                            Selection($['if not set'], $p),
                        ]),
                    ]),
                    l.snippet(")"),
                ]))

                case 'call': return pa.ss($, ($) => l.sub([
                    Selection($.source, $p),
                    l.snippet("("),
                    l.indent([
                        b.nested_line([
                            Selection($.context, $p), $.arguments.transform(
                                ($) => l.snippet(","),
                                () => l.nothing()
                            ),
                        ]),
                        $.arguments.transform(
                            ($) => b.nested_line([
                                op_dictionary_is_empty($)
                                    ? l.snippet("null")
                                    : l.sub([
                                        l.snippet("{"),
                                        l.indent([
                                            b.sub(op_dictionary_to_list($).map(($) => b.sub([
                                                b.nested_line([
                                                    String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                    l.snippet(": "),
                                                    Initialization($.value, $p),
                                                    l.snippet(","),
                                                ]),
                                            ]))),
                                        ]),
                                        l.snippet("}")
                                    ]),
                            ]),
                            () => b.nothing()
                        ),
                    ]),
                    l.snippet(")"),
                ]))
                case 'implement me': return pa.ss($, ($) => l.snippet("_pd.implement_me()"))
                case 'argument': return pa.ss($, ($) => l.snippet(op_create_identifier(["FOOO FIX ARGUMENT"])))
                case 'context': return pa.ss($, ($) => l.snippet("$"))
                case 'variable': return pa.ss($, ($) => l.snippet(op_create_identifier([$])))
                case 'parameter': return pa.ss($, ($) => l.sub([
                    l.snippet("$p["),
                    String_Literal($, { 'delimiter': "apostrophe" }),
                    l.snippet("]"),
                ]))
                case 'imported variable': return pa.ss($, ($) => l.sub([
                    l.snippet(op_create_identifier([$.import])),
                    l.snippet("."),
                    l.snippet(op_create_identifier([$.variable])),
                ]))
                default: return pa.au($[0])
            }
        }),
        l.sub($.tail.map(($) => l.sub([
            l.snippet("["),
            String_Literal($, { 'delimiter': "apostrophe" }),
            l.snippet("]"),
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
            case 'block': return pa.ss($, ($) => l.sub([
                l.snippet("_pa.block("),
                l.snippet("() => {"),
                l.indent([
                    //temp variables
                    b.sub($['temp ordered variables'].map(($) => b.nested_line([
                        l.snippet("const "),
                        l.snippet(op_create_identifier([$.name])),
                        $.type.transform(
                            ($) => l.sub([
                                l.snippet(": "),
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
                            () => l.nothing()
                        ),
                        l.snippet(" = "),
                        Initialization($.initialization, {
                            'temp imports': $p['temp imports']
                        })
                    ]))),
                    Variables($.variables, {
                        'type imports': $p['temp imports'],
                        'export': false,
                    }),
                    b.nested_line([
                        l.snippet("return "),
                        Initialization($.initialization, $p),
                    ])
                ]),
                l.snippet("})"),
            ]))
            case 'change context': return pa.ss($, ($) => l.sub([
                l.snippet("_pa.cc("),
                Selection($['new context'], $p),
                l.snippet(", ($) => "),
                Initialization($.initialization, $p),
                l.snippet(")"),
            ]))
            case 'literal': return pa.ss($, ($) => Literal($.value, $p))
            case 'selection': return pa.ss($, ($) => Selection($, $p))
            case 'transformation': return pa.ss($, ($) => {
                const p_source = $.source
                return l.sub([
                    pa.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'array': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => l.sub([
                                        Selection(p_source, $p),
                                        l.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'boolean': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'not': return pa.ss($, ($) => l.sub([l.snippet("FIXME BOOLEAN NOT")]))
                                    case 'transform': return pa.ss($, ($) => l.sub([
                                        Selection(p_source, $p),
                                        l.indent([
                                            b.nested_line([
                                                l.snippet("? "),
                                                Initialization($['if true'], $p),
                                            ]),
                                            b.nested_line([
                                                l.snippet(": "),
                                                Initialization($['if false'], $p),
                                            ]),
                                        ])
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'dictionary': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => l.sub([
                                        Selection(p_source, $p),
                                        l.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))
                            case 'function': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {

                                    case 'call': return pa.ss($, ($) => l.sub([
                                        Selection(p_source, $p),
                                        l.snippet("("),
                                        l.indent([
                                            b.nested_line([
                                                Initialization($.context, $p), $.arguments.transform(
                                                    ($) => l.snippet(","),
                                                    () => l.nothing()
                                                ),
                                            ]),
                                            $.arguments.transform(
                                                ($) => b.nested_line([
                                                    op_dictionary_is_empty($)
                                                        ? l.snippet("null")
                                                        : l.sub([
                                                            l.snippet("{"),
                                                            l.indent([
                                                                b.sub(op_dictionary_to_list($).map(($) => b.sub([
                                                                    b.nested_line([
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        l.snippet(": "),
                                                                        Initialization($.value, $p),
                                                                        l.snippet(","),
                                                                    ]),
                                                                ]))),
                                                            ]),
                                                            l.snippet("}")
                                                        ]),
                                                ]),
                                                () => b.nothing()
                                            ),
                                        ]),
                                        l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))

                            case 'optional': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return pa.ss($, ($) => l.sub([
                                        Selection(p_source, $p),
                                        l.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        l.snippet(")"),
                                    ]))
                                    case 'transform': return pa.ss($, ($) => l.sub([
                                        Selection(p_source, $p),
                                        l.snippet(".transform("),
                                        l.indent([
                                            b.nested_line([
                                                l.snippet("($)"),
                                                $['temp resulting node'].transform(
                                                    ($) => l.sub([
                                                        l.snippet(": "),
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
                                                    () => l.nothing()
                                                ),
                                                l.snippet(" => "),
                                                Initialization($['if set'], $p),
                                                l.snippet(","),
                                            ]),
                                            b.nested_line([
                                                l.snippet("() => "),
                                                Initialization($['if not set'], $p),
                                            ]),
                                        ]),
                                        l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            }))

                            case 'tagged union': return pa.ss($, ($) => pa.cc($, ($) => {
                                switch ($[0]) {

                                    case 'switch': return pa.ss($, ($) => l.sub([
                                        l.snippet("_pa.cc("),
                                        Selection(p_source, $p),
                                        l.snippet(", ($)"),
                                        $['temp resulting node'].transform(
                                            ($) => l.sub([
                                                l.snippet(": "),
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
                                            () => l.nothing()
                                        ),
                                        l.snippet(" => {"),
                                        l.indent([
                                            b.nested_line([
                                                pa.cc($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'full': return pa.ss($, ($) => l.sub([
                                                            l.snippet("switch ($[0]) {"),
                                                            l.indent([
                                                                b.sub(op_dictionary_to_list($.cases).map(($) => b.sub([
                                                                    b.nested_line([
                                                                        l.snippet("case "),
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        l.snippet(": return _pa.ss($, ($) => "),
                                                                        Initialization($.value, $p),
                                                                        l.snippet(")"),
                                                                    ])
                                                                ]))),
                                                                b.simple_line("default: return _pa.au($[0])")
                                                            ]),
                                                            l.snippet("}"),
                                                        ]))
                                                        case 'partial': return pa.ss($, ($) => l.sub([
                                                            l.snippet("switch ($[0]) {"),
                                                            l.indent([
                                                                b.sub(op_dictionary_to_list($.cases).map(($) => b.sub([
                                                                    b.nested_line([
                                                                        l.snippet("case "),
                                                                        String_Literal($.key, { 'delimiter': "apostrophe" }),
                                                                        l.snippet(": return _pa.ss($, ($) => "),
                                                                        Initialization($.value, $p),
                                                                        l.snippet(")"),
                                                                    ])
                                                                ]))),
                                                                b.nested_line([
                                                                    l.snippet("default: return "),
                                                                    //Expression($.default, $p),
                                                                ])
                                                            ]),
                                                            l.snippet("}"),
                                                        ]))
                                                        default: return pa.au($[0])
                                                    }
                                                }),
                                            ]),
                                        ]),
                                        l.snippet("})"),
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
): d_out.Block_Part => {
    return b.sub(op_dictionary_to_list($).map(($) => b.sub([
        b.nested_line([
            $p.export ? l.snippet("export ") : l.nothing(),
            l.snippet("const "),
            l.snippet(op_create_identifier([$.key])),
            $.value.type.transform(
                ($) => l.sub([
                    l.snippet(": "),
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
                () => l.nothing()
            ),
            l.snippet(" = "),
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
    return l.sub([
        pa.cc($, ($): d_out.Line_Part => {
            switch ($[0]) {
                case 'boolean': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'true': return l.snippet("true")
                        case 'false': return l.snippet("false")
                        default: return pa.au($[0])
                    }
                }))
                case 'dictionary': return pa.ss($, ($) => l.sub([
                    l.snippet("_pa.dictionary_literal({"),
                    l.indent([
                        b.sub(op_dictionary_to_list($).map(($) => b.nested_line([
                            String_Literal($.key, { 'delimiter': "apostrophe" }),
                            l.snippet(": "),
                            Initialization($.value, $p),
                            l.snippet(","),
                        ])
                        )),
                    ]),
                    l.snippet("})"),
                ]))
                case 'function': return pa.ss($, ($) => l.sub([
                    l.snippet("($"),
                    $['temp has parameters'] ? l.snippet(", $p") : l.nothing(),
                    l.snippet(")"),
                    $['temp resulting node'].transform(
                        ($) => l.sub([
                            l.snippet(": "),
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
                        () => l.nothing()
                    ),
                    l.snippet(" => "),
                    Initialization($.initialization, $p),
                ]))
                case 'group': return pa.ss($, ($) => line_dictionary(
                    $.map(($, key) => l.indent([
                        b.nested_line([
                            String_Literal(key, { 'delimiter': "apostrophe" }),
                            l.snippet(": "),
                            Initialization($, $p),
                            l.snippet(","),
                        ])
                    ])),
                    l.snippet("null"),
                    l.snippet("({"),
                    l.snippet("})"),
                    false
                ))

                case 'array': return pa.ss($, ($) => l.sub([
                    l.snippet("_pa.array_literal(["),
                    l.indent([
                        b.sub($.map(($) => b.nested_line([
                            Initialization($, $p),
                            l.snippet(","),
                        ])
                        )),
                    ]),
                    l.snippet("])"),
                ]))
                case 'null': return pa.ss($, ($) => l.snippet("null"))
                case 'number': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'floting point': return pa.ss($, ($) => l.snippet(op_approximate_number_serialize($)))
                        case 'integer': return pa.ss($, ($) => l.snippet(op_integer_serialize($)))
                        case 'signed integer': return pa.ss($, ($) => l.snippet(op_integer_serialize($)))
                        default: return pa.au($[0])
                    }
                }))
                case 'optional': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return l.snippet("_pa.not_set()")
                        case 'set': return pa.ss($, ($) => l.sub([
                            l.snippet("_pa.set("),
                            Initialization($, $p),
                            l.snippet(")"),
                        ]))
                        default: return pa.au($[0])
                    }
                }))
                case 'tagged union': return pa.ss($, ($) => l.sub([
                    l.snippet("["),
                    String_Literal($.case, { 'delimiter': "apostrophe" }),
                    l.snippet(", "),
                    Initialization($.value, $p),
                    l.snippet("]"),
                ]))
                case 'string': return pa.ss($, ($) => {
                    const value = $.value
                    return pa.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'quote': return pa.ss($, ($) => String_Literal(value, { 'delimiter': "quote" }))
                            case 'backtick': return pa.ss($, ($) => l.snippet(op_serialize_with_grave_delimiter(value)))
                            default: return pa.au($[0])
                        }
                    })
                })
                default: return pa.au($[0])
            }
        })
    ])
}