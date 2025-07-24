import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'

import * as s_in from "../../generated/interface/schemas/implementation/resolved"
import * as s_in_interface from "../../generated/interface/schemas/interface/resolved"
import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"

import { $$ as x } from "../typescript/operations/create_identifier"

import * as _interface from "../interface/typescript"

import { Type as Type_to_Line_Part } from "../typescript/fountain_pen"

import { impure, pure } from "pareto-standard-operations"

import {
    b, l, block
} from "pareto-fountain-pen/dist/shorthands/block"

const op = {
    'join list of texts': pure.text['join list of texts'],
    'dictionary to list, sorted by code point': impure.dictionary['to list, sorted by code point'],
    'dictionary is empty': impure.dictionary['is empty'],
    'serialize with apostrophe delimiter': impure.text['serialize with apostrophe delimiter'],
    'serialize with quote delimiter': impure.text['serialize with quote delimiter'],
    'serialize with grave delimiter': impure.text['serialize with grave delimiter'],
    'repeat text': impure.text.repeat,
    'create valid file name': impure.text['create valid file name'],
    'create identifier': x
}

export function line_dictionary(
    $: pt.Dictionary<s_out.Line_Part>,
    if_empty: s_out.Line_Part,
    prefix: s_out.Line_Part,
    suffix: s_out.Line_Part,
    add_commas: boolean
): s_out.Line_Part {
    let is_empty = true
    $.map(($) => {
        is_empty = false
    })
    if (is_empty) {
        return if_empty
    } else {
        let is_first = true
        const x: s_out.Line_Part = l.sub([
            prefix,
            l.sub_decorated(op['dictionary to list, sorted by code point']($).map(($): s_out.Line_Part => {

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
): s_out.Line_Part => {
    return l.snippet($p.delimiter === "quote" ? op['serialize with quote delimiter']($) : op['serialize with apostrophe delimiter']($))
}

export const Selection = (
    $: s_in.Selection,
    $p: {
        'temp imports': s_in_interface.Imports
    }
): s_out.Line_Part => {
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
                                op['dictionary is empty']($)
                                    ? l.snippet("null")
                                    : l.sub([
                                        l.snippet("{"),
                                        l.indent([
                                            b.sub_decorated(op['dictionary to list, sorted by code point']($).map(($) => b.sub([
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
                case 'argument': return pa.ss($, ($) => l.snippet(op['create identifier'](["FOOO FIX ARGUMENT"])))
                case 'context': return pa.ss($, ($) => l.snippet("$"))
                case 'variable': return pa.ss($, ($) => l.snippet(op['create identifier']([$])))
                case 'parameter': return pa.ss($, ($) => l.sub([
                    l.snippet("$p["),
                    String_Literal($, { 'delimiter': "apostrophe" }),
                    l.snippet("]"),
                ]))
                case 'imported variable': return pa.ss($, ($) => l.sub([
                    l.snippet(op['create identifier']([$.import])),
                    l.snippet("."),
                    l.snippet(op['create identifier']([$.variable])),
                ]))
                default: return pa.au($[0])
            }
        }),
        l.sub_decorated($.tail.map(($) => l.sub([
            l.snippet("["),
            String_Literal($, { 'delimiter': "apostrophe" }),
            l.snippet("]"),
        ]))),
    ])
}

export const Initialization = (
    $: s_in.Initialization,
    $p: {
        'temp imports': s_in_interface.Imports
    }
): s_out.Line_Part => {
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'block': return pa.ss($, ($) => l.sub([
                l.snippet("_pa.block("),
                l.snippet("() => {"),
                l.indent([
                    //temp variables
                    b.sub_decorated($['temp ordered variables'].map(($) => b.nested_line([
                        l.snippet("const "),
                        l.snippet(op['create identifier']([$.name])),
                        $.type.transform(
                            ($) => l.sub([
                                l.snippet(": "),
                                Type_to_Line_Part(
                                    _interface.Type_to_Type(
                                        $,
                                        {
                                            'global type parameters': pa.not_set(),
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
                                                    op['dictionary is empty']($)
                                                        ? l.snippet("null")
                                                        : l.sub([
                                                            l.snippet("{"),
                                                            l.indent([
                                                                b.sub_decorated(op['dictionary to list, sorted by code point']($).map(($) => b.sub([
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
                                                l.snippet("($) => "),
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
                                        $['resulting node'].transform(
                                            ($) => l.sub([
                                                l.snippet(": "),
                                                Type_to_Line_Part(
                                                    _interface.Type_to_Type(
                                                        $,
                                                        {
                                                            'global type parameters': pa.not_set(),
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
                                                                b.sub_decorated(op['dictionary to list, sorted by code point']($.cases).map(($) => b.sub([
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
                                                                b.sub_decorated(op['dictionary to list, sorted by code point']($.cases).map(($) => b.sub([
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
    $: s_in.Variables,
    $p: {
        'type imports': s_in_interface.Imports
        'export': boolean
    }
): s_out.Block_Part => {
    return b.sub_decorated(op['dictionary to list, sorted by code point']($).map(($) => b.sub([
        b.nested_line([
            $p.export ? l.snippet("export ") : l.nothing(),
            l.snippet("const "),
            l.snippet(op['create identifier']([$.key])),
            $.value.type.transform(
                ($) => l.sub([
                    l.snippet(": "),
                    Type_to_Line_Part(
                        _interface.Type_to_Type(
                            $,
                            {
                                'global type parameters': pa.not_set(),
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

export const Module_Set = (
    $: s_in.Module_Set,
    $p: {
        'phase': 'development' | 'production'
    }
): s_out.Directory => {
    return $.map(($, key) => pa.cc($, ($) => {
        switch ($[0]) {
            case 'module': return pa.ss($, ($): s_out.Directory.D => {
                const type_imports = $['type imports']
                const valid_file_name = ($: string): string => {
                    return op['create valid file name']($, { 'replace spaces with underscores': true })
                }
                const x: s_out.Block = block([
                    b.simple_line("import * as _pa from 'exupery-core-alg'"),
                    $p.phase === 'development' ? b.simple_line("import * as _pd from 'exupery-core-dev'") : b.nothing(),

                    b.simple_line(""),
                    b.sub_decorated(op['dictionary to list, sorted by code point']($['type imports']).map(($) => b.sub([
                        b.nested_line([
                            l.snippet("import * as "),
                            l.snippet(op['create identifier']([" i ", $.key])),
                            l.snippet(" from "),
                            String_Literal(
                                pa.cc($.value.type, ($): string => {
                                    switch ($[0]) {
                                        case 'external': return pa.ss($, ($) => valid_file_name($))
                                        case 'ancestor': return pa.ss($, ($) => `${op['repeat text']("../", { 'count': $['number of steps'] })}${valid_file_name($.dependency)}`)
                                        case 'sibling': return pa.ss($, ($) => `./${valid_file_name($)}`)
                                        default: return pa.au($[0])
                                    }
                                })
                                + op['join list of texts'](
                                    $.value.tail.map(($) => `/${valid_file_name($)}`),
                                ),
                                {
                                    'delimiter': "quote"
                                }
                            ),
                        ])
                    ]))),

                    b.simple_line(""),
                    b.sub_decorated(op['dictionary to list, sorted by code point']($['variable imports']).map(($) => b.sub([
                        b.nested_line([
                            l.snippet("import * as "),
                            l.snippet(op['create identifier']([" i var ", $.key])),
                            l.snippet(" from "),
                            String_Literal(
                                pa.cc($.value.type, ($): string => {
                                    switch ($[0]) {
                                        case 'external': return pa.ss($, ($) => valid_file_name($))
                                        case 'ancestor': return pa.ss($, ($) => `${op['repeat text']("../", { 'count': $['number of steps'] })}${valid_file_name($.dependency)}`)
                                        case 'sibling': return pa.ss($, ($) => `./${valid_file_name($)}`)
                                        default: return pa.au($[0])
                                    }
                                })
                                + op['join list of texts'](
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

export const Literal = (
    $: s_in.Literal,
    $p: {
        'temp imports': s_in_interface.Imports
    },
): s_out.Line_Part => {
    return l.sub([
        pa.cc($, ($): s_out.Line_Part => {
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
                        b.sub_decorated(op['dictionary to list, sorted by code point']($).map(($) => b.nested_line([
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
                    l.snippet(") => "),
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
                        b.sub_decorated($.map(($) => b.nested_line([
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
                        case 'floting point': return pa.ss($, ($) => l.snippet(pa.impure['approximate number'].serialize($)))
                        case 'integer': return pa.ss($, ($) => l.snippet(pa.impure.integer.serialize($)))
                        case 'signed integer': return pa.ss($, ($) => l.snippet(pa.impure.integer.serialize($)))
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
                            case 'backtick': return pa.ss($, ($) => l.snippet(op['serialize with grave delimiter'](value)))
                            default: return pa.au($[0])
                        }
                    })
                })
                default: return pa.au($[0])
            }
        })
    ])
}