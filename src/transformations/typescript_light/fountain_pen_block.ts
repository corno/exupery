import * as pa from 'exupery-core-alg'

import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"
import * as s_in from "../../generated/interface/schemas/typescript_light/unconstrained"

import { $$ as x } from "./operations/create_identifier"
import { impure } from "pareto-standard-operations"

const op = {
    'list is empty': impure.list['is empty'],
    'dictionary is empty': impure.dictionary['is empty'],
    'enrich list elements with position information': impure.list['enrich with position information'],
    'dictionary to list, sorted by code point': impure.dictionary['to list, sorted by code point'],
    'serialize with apostrophe delimiter': impure.text['serialize with apostrophe delimiter'],
    'serialize with quote delimiter': impure.text['serialize with quote delimiter'],
    'create identifier': x,
}

import {
    b, l
} from "pareto-fountain-pen/dist/shorthands/block"


export const Block = ($: s_in.Block): s_out.Block => {
    return $ //FIXME: this is a temporary solution
}

export const Identifier = (
    $: string //FIX should have been a schema type
): s_out.Line_Part => {
    return l.snippet(op['create identifier']([$]))
}

export const String_Literal = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): s_out.Line_Part => {
    return l.snippet($p.delimiter === "quote" ? op['serialize with quote delimiter']($) : op['serialize with apostrophe delimiter']($))
}

export const Statements = (
    $: s_in.Statements,
    $p: {
        'replace empty type literals by null': boolean
    }
): s_out.Block_Part => b.sub_decorated($.map(($) => b.nested_line([
    pa.cc($, ($) => {
        switch ($[0]) {
            case 'import': return pa.ss($, ($) => l.sub([
                l.snippet("import "),
                pa.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'named': return pa.ss($, ($) => l.sub([
                            l.snippet("{ "),
                            l.sub_decorated(op['dictionary to list, sorted by code point']($.specifiers).map(($) => l.sub([
                                Identifier($.key),
                                l.snippet(", ")
                            ]))),
                            l.snippet("}"),
                        ]))
                        case 'namespace': return pa.ss($, ($) => l.sub([
                            l.snippet("* as "),
                            Identifier($),
                        ]))
                        default: return pa.au($[0])
                    }
                }),
                l.snippet(" from "),
                String_Literal($.from, { 'delimiter': "quote" }),
            ]))
            case 'module declaration': return pa.ss($, ($) => l.sub([
                $.export ? l.snippet("export ") : l.nothing(),
                l.snippet("namespace {"),
                l.indent([
                    Statements($['block'], $p),
                ]),
                l.snippet("}"),
            ]))
            case 'type alias declaration': return pa.ss($, ($) => l.sub([
                $.export ? l.snippet("export ") : l.nothing(),
                l.snippet("type "),
                Identifier($['name']),
                op['list is empty']($['parameters'])
                    ? l.nothing()
                    : l.sub([
                        l.snippet("<"),
                        l.sub_decorated(op['enrich list elements with position information']($['parameters']).map(($) => l.sub([
                            Identifier($.value),
                            $['is last'] ? l.nothing() : l.snippet(", ")
                        ]))),
                        l.snippet(">"),
                    ]),
                l.snippet(" = "),
                Type($['type'], $p),
            ]))
            case 'variable': return pa.ss($, ($) => l.sub([
                $.export ? l.snippet("export ") : l.nothing(),
                $.const ? l.snippet("const ") : l.snippet("let "),
                Identifier($['name']),
                $.type.transform(
                    ($) => l.sub([
                        l.snippet(": "),
                        Type($, $p)
                    ]),
                    () => l.nothing(),
                ),
                $.expression.transform(
                    ($) => l.sub([
                        l.snippet("= "),
                        Expression($, $p)
                    ]),
                    () => l.nothing(),
                ),
            ]))
            default: return pa.au($[0])
        }
    })
])))

export const Expression = (
    $: s_in.Expression,
    $p: {
        'replace empty type literals by null': boolean
    }
): s_out.Line_Part => pa.cc($, ($) => {
    switch ($[0]) {
        case 'array literal': return pa.ss($, ($) => l.sub([
            l.snippet("["),
            l.indent([
                b.sub_decorated(op['enrich list elements with position information']($).map(($) => b.nested_line([
                    Expression($.value, $p),
                    $['is last'] ? l.nothing() : l.snippet(", ")
                ]))),
            ]),
            l.snippet("]"),
        ]))
        case 'arrow function': return pa.ss($, ($) => l.sub([
            l.snippet("("),
            l.indent([
                b.sub_decorated($.parameters.map(($) => b.nested_line([
                    Identifier($.name),
                    $.type.transform(
                        ($) => l.sub([
                            l.snippet(": "),
                            Type($, $p)
                        ]),
                        () => l.nothing(),
                    ),
                    l.snippet(",")
                ]))),
            ]),
            l.snippet(")"),
            $['return type'].transform(
                ($) => l.sub([
                    l.snippet(": "),
                    Type($, $p)
                ]),
                () => l.nothing(),
            ),
            l.snippet(" => "),
            pa.cc($.type, ($) => {
                switch ($[0]) {
                    case 'block': return pa.ss($, ($) => l.sub([
                        l.snippet("{"),
                        l.indent([
                            Statements($, $p),
                        ]),
                        l.snippet("}"),
                    ]))
                    case 'expression': return pa.ss($, ($) => Expression($, $p))
                    default: return pa.au($[0])
                }
            }),
        ]))
        case 'call': return pa.ss($, ($) => l.sub([
            Expression($['function selection'], $p),
            l.snippet("("),
            l.indent([
                b.sub_decorated(op['enrich list elements with position information']($['arguments']).map(($) => b.nested_line([
                    Expression($.value, $p),
                    $['is last'] ? l.nothing() : l.snippet(", ")
                ]))),
            ]),
            l.snippet(")"),
        ]))
        case 'false': return pa.ss($, ($) => l.snippet("false"))
        case 'null': return pa.ss($, ($) => l.snippet("null"))
        case 'number literal': return pa.ss($, ($) => l.snippet(pa.impure['approximate number'].serialize($)))
        case 'object literal': return pa.ss($, ($) => l.sub([
            l.snippet("{"),
            l.indent([
                b.sub_decorated(op['dictionary to list, sorted by code point']($.properties).map(($) => b.nested_line([
                    String_Literal($.key, { 'delimiter': "apostrophe" }),
                    l.snippet(": "),
                    Expression($.value, $p),
                    l.snippet(",")
                ]))),
            ]),
            l.snippet("}"),
        ]))
        case 'string literal': return pa.ss($, ($) => l.sub([
            l.snippet($['delimiter'][0] === "quote" ? op['serialize with quote delimiter']($['value']) : op['serialize with apostrophe delimiter']($['value']))
        ]))
        case 'true': return pa.ss($, ($) => l.snippet("true"))
        default: return pa.au($[0])
    }
})

export const Type = (
    $: s_in.Type,
    $p: {
        'replace empty type literals by null': boolean
    }
): s_out.Line_Part => pa.cc($, ($) => {
    switch ($[0]) {
        case 'boolean': return pa.ss($, ($) => l.snippet("boolean"))
        case 'function': return pa.ss($, ($) => l.sub([
            op['list is empty']($['type parameters'])
            ? l.nothing()
            : l.sub([
                l.snippet("<"),
                l.sub_decorated(op['enrich list elements with position information']($['type parameters']).map(($) => l.sub([
                    Identifier($.value),
                    $['is last'] ? l.nothing() : l.snippet(", ")
                ]))),
                l.snippet(">"),
            ]),            l.snippet("("),
            l.indent([
                b.sub_decorated($['parameters'].map(($) => b.nested_line([
                    Identifier($.name),
                    $.type.transform(
                        ($) => l.sub([
                            l.snippet(": "),
                            Type($, $p)
                        ]),
                        () => l.nothing(),
                    ),
                    l.snippet(",")
                ]))),
            ]),
            l.snippet(") => "),
            Type($['return'], $p)
        ]))
        case 'literal type': return pa.ss($, ($) => String_Literal($.value, { 'delimiter': $.delimiter[0] })) //FIX, implement a switch for the delimiter
        case 'null': return pa.ss($, ($) => l.snippet("null"))
        case 'number': return pa.ss($, ($) => l.snippet("number"))
        case 'string': return pa.ss($, ($) => l.snippet("string"))
        case 'tuple': return pa.ss($, ($) => l.sub([
            $.readonly ? l.snippet("readonly ") : l.nothing(),
            l.snippet("["),
            l.sub_decorated(op['enrich list elements with position information']($['elements']).map(($) => l.sub([
                Type($.value, $p),
                $['is last']
                    ? l.nothing()
                    : l.snippet(", ")
            ]))),
            l.snippet("]"),
        ]))
        case 'type literal': return pa.ss($, ($) => $p['replace empty type literals by null'] && op['dictionary is empty']($['properties'])
            ? l.snippet("null")
            : l.sub([
                l.snippet("{"),
                l.indent([
                    b.sub_decorated(op['dictionary to list, sorted by code point']($['properties']).map(($) => b.sub([
                        b.nested_line([
                            $.value['readonly'] ? l.snippet("readonly ") : l.nothing(),
                            String_Literal($.key, { 'delimiter': "apostrophe" }),
                            l.snippet(": "),
                            Type($.value.type, $p),
                        ])
                    ]))),
                ]),
                l.snippet("}")
            ])
        )
        case 'type reference': return pa.ss($, ($) => l.sub([
            Identifier($['start']),
            l.sub_decorated($['tail'].map(($) => l.sub([
                l.snippet("."),
                Identifier($),
            ]))),
            op['list is empty']($['type arguments'])
                ? l.nothing()
                : l.sub([
                    l.snippet("<"),
                    l.sub_decorated(op['enrich list elements with position information']($['type arguments']).map(($) => l.sub([
                        Type($['value'], $p),
                        $['is last'] ? l.nothing() : l.snippet(", "),
                    ]))),
                    l.snippet(">"),
                ]),
        ]))
        case 'union': return pa.ss($, ($) => l.indent([
            b.sub_decorated($.map(($) => b.nested_line([
                l.snippet("| "),
                Type($, $p),
            ])))
        ]))
        case 'void': return pa.ss($, ($) => l.snippet("void"))
        default: return pa.au($[0])
    }
})