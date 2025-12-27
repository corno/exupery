import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d_in from "../../../../interface/generated/pareto/schemas/implementation/data_types/source"
import * as s_in_interface from "../../../../interface/generated/pareto/schemas/interface/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"


import * as t_inf_2_tl from "../interface/typescript_light"
import * as t_tl_2_fp from "../typescript_light/fountain_pen_block"


import * as sh from "../../../../shorthands/typescript_light"

import { $$ as s_list_of_texts } from "pareto-standard-operations/dist/implementation/serializers/schemas/list_of_texts"
import { $$ as s_apostrophed } from "../../../serializers/primitives/text/apostrophed_string"
import { $$ as s_quoted } from "../../../serializers/primitives/text/quoted_string"
import { $$ as s_backticked } from "../../../serializers/primitives/text/backticked_string"

import { $$ as s_repeated } from "pareto-standard-operations/dist/implementation/serializers/primitives/text/repeated"
import { $$ as s_file_name } from "../../../serializers/primitives/text/filename"
import { $$ as s_identifier } from "../../../serializers/primitives/text/identifier"
import { $$ as s_scientific_notation } from "pareto-standard-operations/dist/implementation/serializers/primitives/approximate_number/scientific_notation"
import { $$ as s_decimal } from "pareto-standard-operations/dist/implementation/serializers/primitives/integer/decimal"

export const Module_Set = (
    $: d_in.Module_Set,
    $p: {
        'phase': 'development' | 'production'
    }
): d_out.Directory => {
    return $.map(($, key) => _ea.cc($, ($) => {
        switch ($[0]) {
            case 'module': return _ea.ss($, ($): d_out.Directory.D => {
                const type_imports = $['type imports']
                const valid_file_name = ($: string): string => {
                    return s_file_name($)
                }
                const x: d_out.Group = sh.group([
                    sh.g.simple_line("import * as _pa from 'exupery-core-alg'"),
                    $p.phase === 'development' ? sh.g.simple_line("import * as _pd from 'exupery-core-dev'") : sh.g.nothing(),

                    sh.g.simple_line(""),
                    sh.g.sub($['type imports'].to_list(($, key) => sh.g.sub([
                        sh.g.nested_block([
                            sh.b.snippet("import * as "),
                            sh.b.snippet(s_identifier([" i ", key])),
                            sh.b.snippet(" from "),
                            String_Literal(
                                _ea.cc($.type, ($): string => {
                                    switch ($[0]) {
                                        case 'external': return _ea.ss($, ($) => valid_file_name($))
                                        case 'ancestor': return _ea.ss($, ($) => `${s_repeated("../", { 'count': $['number of steps'] })}${valid_file_name($.dependency)}`)
                                        case 'sibling': return _ea.ss($, ($) => `./${valid_file_name($)}`)
                                        default: return _ea.au($[0])
                                    }
                                })
                                + s_list_of_texts(
                                    $.tail.map(($) => `/${valid_file_name($)}`),
                                ),
                                {
                                    'delimiter': "quote"
                                }
                            ),
                        ])
                    ]))),

                    sh.g.simple_line(""),
                    sh.g.sub($['variable imports'].to_list(($, key) => sh.g.sub([
                        sh.g.nested_block([
                            sh.b.snippet("import * as "),
                            sh.b.snippet(s_identifier([" i var ", key])),
                            sh.b.snippet(" from "),
                            String_Literal(
                                _ea.cc($.type, ($): string => {
                                    switch ($[0]) {
                                        case 'external': return _ea.ss($, ($) => valid_file_name($))
                                        case 'ancestor': return _ea.ss($, ($) => `${s_repeated("../", { 'count': $['number of steps'] })}${valid_file_name($.dependency)}`)
                                        case 'sibling': return _ea.ss($, ($) => `./${valid_file_name($)}`)
                                        default: return _ea.au($[0])
                                    }
                                })
                                + s_list_of_texts(
                                    $.tail.map(($) => `/${valid_file_name($)}`),
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
            case 'set': return _ea.ss($, ($) => ['directory', Module_Set($, $p)])
            default: return _ea.au($[0])
        }
    }))
}


export const line_dictionary = (
    $: _et.Dictionary<d_out.Block_Part>,
    if_empty: d_out.Block_Part,
    prefix: d_out.Block_Part,
    suffix: d_out.Block_Part,
    add_commas: boolean
): d_out.Block_Part => {
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
                    sh.b.sub($.to_list(($): d_out.Block_Part => {

                const out = sh.b.sub([
                    is_first ?
                        sh.b.nothing()
                        : add_commas
                            ? sh.b.snippet(", ")
                            : sh.b.nothing()
                    ,
                    $,
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
    return sh.b.snippet($p.delimiter === "quote" ? s_quoted($) : s_apostrophed($))
}

export const Selection = (
    $: d_in.Selection,
    $p: {
        'temp imports': s_in_interface.Imports
    }
): d_out.Block_Part => {
    return sh.b.sub([
        _ea.cc($.start, ($) => {
            switch ($[0]) {
                case 'abort': return _ea.ss($, ($) => sh.b.snippet("_pa.panic('ABORT SELECTION')"))
                case 'transform optional value': return _ea.ss($, ($) => sh.b.sub([
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

                case 'call': return _ea.ss($, ($) => sh.b.sub([
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
                                $.is_empty()
                                    ? sh.b.snippet("null")
                                    : sh.b.sub([
                                        sh.b.snippet("{"),
                                        sh.b.indent([
                                            sh.g.sub($.to_list(($, key) => sh.g.sub([
                                                sh.g.nested_block([
                                                    String_Literal(key, { 'delimiter': "apostrophe" }),
                                                    sh.b.snippet(": "),
                                                    Initialization($, $p),
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
                case 'implement me': return _ea.ss($, ($) => sh.b.snippet("_pd.implement_me(\"marker tbd\")"))
                case 'argument': return _ea.ss($, ($) => sh.b.snippet(s_identifier(["FOOO FIX ARGUMENT"])))
                case 'context': return _ea.ss($, ($) => sh.b.snippet("$"))
                case 'variable': return _ea.ss($, ($) => sh.b.snippet(s_identifier([$])))
                case 'parameter': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet("$p["),
                    String_Literal($, { 'delimiter': "apostrophe" }),
                    sh.b.snippet("]"),
                ]))
                case 'imported variable': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet(s_identifier([$.import])),
                    sh.b.snippet("."),
                    sh.b.snippet(s_identifier([$.variable])),
                ]))
                default: return _ea.au($[0])
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
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'block': return _ea.ss($, ($) => sh.b.sub([
                sh.b.snippet("_pa.block("),
                sh.b.snippet("() => {"),
                sh.b.indent([
                    //temp variables
                    sh.g.sub($['temp ordered variables'].map(($) => sh.g.nested_block([
                        sh.b.snippet("const "),
                        sh.b.snippet(s_identifier([$.name])),
                        $.type.transform(
                            ($) => sh.b.sub([
                                sh.b.snippet(": "),
                                t_tl_2_fp.Type(
                                    t_inf_2_tl.Type_to_Type(
                                        $,
                                        {
                                            'module parameters': _ea.not_set(),
                                            'temp imports': _ea.set($p['temp imports']),
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
            case 'change context': return _ea.ss($, ($) => sh.b.sub([
                sh.b.snippet("_pa.cc("),
                Selection($['new context'], $p),
                sh.b.snippet(", ($) => "),
                Initialization($.initialization, $p),
                sh.b.snippet(")"),
            ]))
            case 'literal': return _ea.ss($, ($) => Literal($.value, $p))
            case 'selection': return _ea.ss($, ($) => Selection($, $p))
            case 'transformation': return _ea.ss($, ($) => {
                const p_source = $.source
                return sh.b.sub([
                    _ea.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'array': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return _ea.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.b.snippet(")"),
                                    ]))
                                    default: return _ea.au($[0])
                                }
                            }))
                            case 'boolean': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'not': return _ea.ss($, ($) => sh.b.sub([sh.b.snippet("FIXME BOOLEAN NOT")]))
                                    case 'transform': return _ea.ss($, ($) => sh.b.sub([
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
                                    default: return _ea.au($[0])
                                }
                            }))
                            case 'dictionary': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return _ea.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.b.snippet(")"),
                                    ]))
                                    default: return _ea.au($[0])
                                }
                            }))
                            case 'function': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                switch ($[0]) {

                                    case 'call': return _ea.ss($, ($) => sh.b.sub([
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
                                                    $.is_empty()
                                                        ? sh.b.snippet("null")
                                                        : sh.b.sub([
                                                            sh.b.snippet("{"),
                                                            sh.b.indent([
                                                                sh.g.sub($.to_list(($, key) => sh.g.sub([
                                                                    sh.g.nested_block([
                                                                        String_Literal(key, { 'delimiter': "apostrophe" }),
                                                                        sh.b.snippet(": "),
                                                                        Initialization($, $p),
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
                                    default: return _ea.au($[0])
                                }
                            }))

                            case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'map': return _ea.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet(".map(($) => "),
                                        Initialization($, $p),
                                        sh.b.snippet(")"),
                                    ]))
                                    case 'transform': return _ea.ss($, ($) => sh.b.sub([
                                        Selection(p_source, $p),
                                        sh.b.snippet(".transform("),
                                        sh.b.indent([
                                            sh.g.nested_block([
                                                sh.b.snippet("($)"),
                                                $['temp resulting node'].transform(
                                                    ($) => sh.b.sub([
                                                        sh.b.snippet(": "),
                                                        t_tl_2_fp.Type(
                                                            t_inf_2_tl.Type_to_Type(
                                                                $,
                                                                {
                                                                    'module parameters': _ea.not_set(),
                                                                    'temp imports': _ea.set($p['temp imports']),
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
                                    default: return _ea.au($[0])
                                }
                            }))

                            case 'tagged union': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                switch ($[0]) {

                                    case 'switch': return _ea.ss($, ($) => sh.b.sub([
                                        sh.b.snippet("_pa.cc("),
                                        Selection(p_source, $p),
                                        sh.b.snippet(", ($)"),
                                        $['temp resulting node'].transform(
                                            ($) => sh.b.sub([
                                                sh.b.snippet(": "),
                                                t_tl_2_fp.Type(
                                                    t_inf_2_tl.Type_to_Type(
                                                        $,
                                                        {
                                                            'module parameters': _ea.not_set(),
                                                            'temp imports': _ea.set($p['temp imports']),
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
                                                _ea.cc($.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'full': return _ea.ss($, ($) => sh.b.sub([
                                                            sh.b.snippet("switch ($[0]) {"),
                                                            sh.b.indent([
                                                                sh.g.sub($.cases.to_list(($, key) => sh.g.sub([
                                                                    sh.g.nested_block([
                                                                        sh.b.snippet("case "),
                                                                        String_Literal(key, { 'delimiter': "apostrophe" }),
                                                                        sh.b.snippet(": return _pa.ss($, ($) => "),
                                                                        Initialization($, $p),
                                                                        sh.b.snippet(")"),
                                                                    ])
                                                                ]))),
                                                                sh.g.simple_line("default: return _pa.au($[0])")
                                                            ]),
                                                            sh.b.snippet("}"),
                                                        ]))
                                                        case 'partial': return _ea.ss($, ($) => sh.b.sub([
                                                            sh.b.snippet("switch ($[0]) {"),
                                                            sh.b.indent([
                                                                sh.g.sub($.cases.to_list(($, key) => sh.g.sub([
                                                                    sh.g.nested_block([
                                                                        sh.b.snippet("case "),
                                                                        String_Literal(key, { 'delimiter': "apostrophe" }),
                                                                        sh.b.snippet(": return _pa.ss($, ($) => "),
                                                                        Initialization($, $p),
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
                                                        default: return _ea.au($[0])
                                                    }
                                                }),
                                            ]),
                                        ]),
                                        sh.b.snippet("})"),
                                    ]))
                                    default: return _ea.au($[0])
                                }
                            }))
                            default: return _ea.au($[0])
                        }
                    })
                ])
            })
            default: return _ea.au($[0])
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
    return sh.g.sub($.to_list(($, key) => sh.g.sub([
        sh.g.nested_block([
            $p.export ? sh.b.snippet("export ") : sh.b.nothing(),
            sh.b.snippet("const "),
            sh.b.snippet(s_identifier([key])),
            $.type.transform(
                ($) => sh.b.sub([
                    sh.b.snippet(": "),
                    t_tl_2_fp.Type(
                        t_inf_2_tl.Type_to_Type(
                            $,
                            {
                                'module parameters': _ea.not_set(),
                                'temp imports': _ea.set($p['type imports']),
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
        _ea.cc($, ($): d_out.Block_Part => {
            switch ($[0]) {
                case 'boolean': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'true': return sh.b.snippet("true")
                        case 'false': return sh.b.snippet("false")
                        default: return _ea.au($[0])
                    }
                }))
                case 'dictionary': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet("_pa.dictionary_literal({"),
                    sh.b.indent([
                        sh.g.sub($.to_list(($, key) => sh.g.nested_block([
                            String_Literal(key, { 'delimiter': "apostrophe" }),
                            sh.b.snippet(": "),
                            Initialization($, $p),
                            sh.b.snippet(","),
                        ])
                        )),
                    ]),
                    sh.b.snippet("})"),
                ]))
                case 'function': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet("($"),
                    $['temp has parameters'] ? sh.b.snippet(", $p") : sh.b.nothing(),
                    sh.b.snippet(")"),
                    $['temp resulting node'].transform(
                        ($) => sh.b.sub([
                            sh.b.snippet(": "),
                            t_tl_2_fp.Type(
                                t_inf_2_tl.Type_to_Type(
                                    $,
                                    {
                                        'module parameters': _ea.not_set(),
                                        'temp imports': _ea.set($p['temp imports']),
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
                case 'group': return _ea.ss($, ($) => line_dictionary(
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

                case 'array': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet("_pa.list_literal(["),
                    sh.b.indent([
                        sh.g.sub($.map(($) => sh.g.nested_block([
                            Initialization($, $p),
                            sh.b.snippet(","),
                        ])
                        )),
                    ]),
                    sh.b.snippet("])"),
                ]))
                case 'null': return _ea.ss($, ($) => sh.b.snippet("null"))
                case 'number': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'floting point': return _ea.ss($, ($) => sh.b.snippet(s_scientific_notation($, { 'digits': 10 })))
                        case 'integer': return _ea.ss($, ($) => sh.b.snippet(s_decimal($)))
                        case 'signed integer': return _ea.ss($, ($) => sh.b.snippet(s_decimal($)))
                        default: return _ea.au($[0])
                    }
                }))
                case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return sh.b.snippet("_pa.not_set()")
                        case 'set': return _ea.ss($, ($) => sh.b.sub([
                            sh.b.snippet("_pa.set("),
                            Initialization($, $p),
                            sh.b.snippet(")"),
                        ]))
                        default: return _ea.au($[0])
                    }
                }))
                case 'tagged union': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet("["),
                    String_Literal($.case, { 'delimiter': "apostrophe" }),
                    sh.b.snippet(", "),
                    Initialization($.value, $p),
                    sh.b.snippet("]"),
                ]))
                case 'string': return _ea.ss($, ($) => {
                    const value = $.value
                    return _ea.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'quote': return _ea.ss($, ($) => String_Literal(value, { 'delimiter': "quote" }))
                            case 'backtick': return _ea.ss($, ($) => sh.b.snippet(s_backticked(value)))
                            default: return _ea.au($[0])
                        }
                    })
                })
                default: return _ea.au($[0])
            }
        })
    ])
}