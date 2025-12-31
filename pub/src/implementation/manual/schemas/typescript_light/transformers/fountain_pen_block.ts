import * as _pt from 'pareto-core-transformer'

import * as d_out_fp from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"
import * as d_in from "../../../../../interface/generated/pareto/schemas/typescript_light/data_types/source"

import { $$ as s_identifier } from "../../../primitives/text/serializers/identifier"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"
import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed_string"
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted_string"
import { $$ as s_scientific_notation } from "pareto-standard-operations/dist/implementation/manual/primitives/approximate_number/serializers/scientific_notation"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"


export const Group = ($: d_in.Group): d_out_fp.Group => {
    return $.map(($) => Group_Part($))
}

export const Group_Part = ($: d_in.Group_Part): d_out_fp.Group_Part => {
    return _pt.cc($, ($): d_out_fp.Group_Part => {
        switch ($[0]) {
            case 'block': return _pt.ss($, ($) => ['block', $])
            case 'nothing': return _pt.ss($, ($) => ['nothing', null])
            case 'optional': return _pt.ss($, ($) => ['optional', $.map(($) => Group_Part($))])
            case 'nested block': return _pt.ss($, ($) => ['nested block', Block($)])
            case 'sub group': return _pt.ss($, ($) => ['sub group', Group($)])
            default: return _pt.au($[0])
        }
    })
}

export const Block = (
    $: d_in.Block
): d_out_fp.Block => {
    return $.map(($) => Block_Part($))
}

export const Block_Part = (
    $: d_in.Block_Part
): d_out_fp.Block_Part => {
    return _pt.cc($, ($): d_out_fp.Block_Part => {
        switch ($[0]) {
            case 'snippet': return _pt.ss($, ($) => sh.b.snippet($))
            case 'nothing': return _pt.ss($, ($) => ['nothing', null])
            case 'optional': return _pt.ss($, ($) => ['optional', $.map(($): d_out_fp.Block_Part => Block_Part($))])
            case 'indent': return _pt.ss($, ($) => ['indent', Group($)])
            case 'sub block': return _pt.ss($, ($) => ['sub block', Block($)])
            default: return _pt.au($[0])
        }
    })
}

export const Identifier = (
    $: string //FIX should have been a schema type
): d_out_fp.Block_Part => {
    return sh.b.snippet(s_identifier([$]))
}

export const String_Literal = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): d_out_fp.Block_Part => {
    return sh.b.snippet($p.delimiter === "quote" ? s_quoted($) : s_apostrophed($))
}

export const Statements = (
    $: d_in.Statements,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Group_Part => sh.g.sub($.map(($) => sh.g.nested_block([
    _pt.cc($, ($) => {
        switch ($[0]) {
            case 'import': return _pt.ss($, ($) => sh.b.sub([
                sh.b.snippet("import "),
                _pt.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'named': return _pt.ss($, ($) => sh.b.sub([
                            sh.b.snippet("{ "),
                            sh.b.sub($.specifiers.to_list(($, key) => sh.b.sub([
                                Identifier(key),
                                sh.b.snippet(", ")
                            ]))),
                            sh.b.snippet("}"),
                        ]))
                        case 'namespace': return _pt.ss($, ($) => sh.b.sub([
                            sh.b.snippet("* as "),
                            Identifier($),
                        ]))
                        default: return _pt.au($[0])
                    }
                }),
                sh.b.snippet(" from "),
                String_Literal($.from, { 'delimiter': "quote" }),
            ]))
            case 'module declaration': return _pt.ss($, ($) => sh.b.sub([
                $.export ? sh.b.snippet("export ") : sh.b.nothing(),
                sh.b.snippet("namespace {"),
                sh.b.indent([
                    Statements($['block'], $p),
                ]),
                sh.b.snippet("}"),
            ]))
            case 'type alias declaration': return _pt.ss($, ($) => sh.b.sub([
                $.export ? sh.b.snippet("export ") : sh.b.nothing(),
                sh.b.snippet("type "),
                Identifier($['name']),
                $['parameters'].is_empty()
                    ? sh.b.nothing()
                    : sh.b.sub([
                        sh.b.snippet("<"),
                        sh.b.sub(op_enrich_list_elements_with_position_information($['parameters']).map(($) => sh.b.sub([
                            Identifier($.value),
                            $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                        ]))),
                        sh.b.snippet(">"),
                    ]),
                sh.b.snippet(" = "),
                Type($['type'], $p),
            ]))
            case 'variable': return _pt.ss($, ($) => sh.b.sub([
                $.export ? sh.b.snippet("export ") : sh.b.nothing(),
                $.const ? sh.b.snippet("const ") : sh.b.snippet("let "),
                Identifier($['name']),
                $.type.transform(
                    ($) => sh.b.sub([
                        sh.b.snippet(": "),
                        Type($, $p)
                    ]),
                    () => sh.b.nothing(),
                ),
                $.expression.transform(
                    ($) => sh.b.sub([
                        sh.b.snippet("= "),
                        Expression($, $p)
                    ]),
                    () => sh.b.nothing(),
                ),
            ]))
            default: return _pt.au($[0])
        }
    })
])))

export const Expression = (
    $: d_in.Expression,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Block_Part => _pt.cc($, ($) => {
    switch ($[0]) {
        case 'array literal': return _pt.ss($, ($) => sh.b.sub([
            sh.b.snippet("["),
            sh.b.indent([
                sh.g.sub(op_enrich_list_elements_with_position_information($).map(($) => sh.g.nested_block([
                    Expression($.value, $p),
                    $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                ]))),
            ]),
            sh.b.snippet("]"),
        ]))
        case 'arrow function': return _pt.ss($, ($) => sh.b.sub([
            sh.b.snippet("("),
            sh.b.indent([
                sh.g.sub($.parameters.map(($) => sh.g.nested_block([
                    Identifier($.name),
                    $.type.transform(
                        ($) => sh.b.sub([
                            sh.b.snippet(": "),
                            Type($, $p)
                        ]),
                        () => sh.b.nothing(),
                    ),
                    sh.b.snippet(",")
                ]))),
            ]),
            sh.b.snippet(")"),
            $['return type'].transform(
                ($) => sh.b.sub([
                    sh.b.snippet(": "),
                    Type($, $p)
                ]),
                () => sh.b.nothing(),
            ),
            sh.b.snippet(" => "),
            _pt.cc($.type, ($) => {
                switch ($[0]) {
                    case 'block': return _pt.ss($, ($) => sh.b.sub([
                        sh.b.snippet("{"),
                        sh.b.indent([
                            Statements($, $p),
                        ]),
                        sh.b.snippet("}"),
                    ]))
                    case 'expression': return _pt.ss($, ($) => Expression($, $p))
                    default: return _pt.au($[0])
                }
            }),
        ]))
        case 'call': return _pt.ss($, ($) => sh.b.sub([
            Expression($['function selection'], $p),
            sh.b.snippet("("),
            sh.b.indent([
                sh.g.sub(op_enrich_list_elements_with_position_information($['arguments']).map(($) => sh.g.nested_block([
                    Expression($.value, $p),
                    $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                ]))),
            ]),
            sh.b.snippet(")"),
        ]))
        case 'false': return _pt.ss($, ($) => sh.b.snippet("false"))
        case 'null': return _pt.ss($, ($) => sh.b.snippet("null"))
        case 'number literal': return _pt.ss($, ($) => sh.b.snippet(s_scientific_notation($, { 'digits': 10 })))
        case 'object literal': return _pt.ss($, ($) => sh.b.sub([
            sh.b.snippet("{"),
            sh.b.indent([
                sh.g.sub($.properties.to_list(($, key) => sh.g.nested_block([
                    String_Literal(key, { 'delimiter': "apostrophe" }),
                    sh.b.snippet(": "),
                    Expression($, $p),
                    sh.b.snippet(",")
                ]))),
            ]),
            sh.b.snippet("}"),
        ]))
        case 'string literal': return _pt.ss($, ($) => sh.b.sub([
            sh.b.snippet($['delimiter'][0] === "quote" ? s_quoted($['value']) : s_apostrophed($['value']))
        ]))
        case 'true': return _pt.ss($, ($) => sh.b.snippet("true"))
        default: return _pt.au($[0])
    }
})

export const Type = (
    $: d_in.Type,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Block_Part => _pt.cc($, ($) => {
    switch ($[0]) {
        case 'boolean': return _pt.ss($, ($) => sh.b.snippet("boolean"))
        case 'function': return _pt.ss($, ($) => sh.b.sub([
            $['type parameters'].is_empty()
                ? sh.b.nothing()
                : sh.b.sub([
                    sh.b.snippet("<"),
                    sh.b.sub(op_enrich_list_elements_with_position_information($['type parameters']).map(($) => sh.b.sub([
                        Identifier($.value),
                        $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                    ]))),
                    sh.b.snippet(">"),
                ]), sh.b.snippet("("),
            sh.b.indent([
                sh.g.sub($['parameters'].map(($) => sh.g.nested_block([
                    Identifier($.name),
                    $.type.transform(
                        ($) => sh.b.sub([
                            sh.b.snippet(": "),
                            Type($, $p)
                        ]),
                        () => sh.b.nothing(),
                    ),
                    sh.b.snippet(",")
                ]))),
            ]),
            sh.b.snippet(") => "),
            Type($['return'], $p)
        ]))
        case 'literal type': return _pt.ss($, ($) => String_Literal($.value, { 'delimiter': $.delimiter[0] })) //FIX, implement a switch for the delimiter
        case 'null': return _pt.ss($, ($) => sh.b.snippet("null"))
        case 'number': return _pt.ss($, ($) => sh.b.snippet("number"))
        case 'string': return _pt.ss($, ($) => sh.b.snippet("string"))
        case 'tuple': return _pt.ss($, ($) => sh.b.sub([
            $.readonly ? sh.b.snippet("readonly ") : sh.b.nothing(),
            sh.b.snippet("["),
            sh.b.sub(op_enrich_list_elements_with_position_information($['elements']).map(($) => sh.b.sub([
                Type($.value, $p),
                $['is last']
                    ? sh.b.nothing()
                    : sh.b.snippet(", ")
            ]))),
            sh.b.snippet("]"),
        ]))
        case 'type literal': return _pt.ss($, ($) => $p['replace empty type literals by null'] && $.properties.is_empty()
            ? sh.b.snippet("null")
            : sh.b.sub([
                sh.b.snippet("{"),
                sh.b.indent([
                    sh.g.sub($.properties.to_list(($, key) => sh.g.sub([
                        sh.g.nested_block([
                            $['readonly'] ? sh.b.snippet("readonly ") : sh.b.nothing(),
                            String_Literal(key, { 'delimiter': "apostrophe" }),
                            sh.b.snippet(": "),
                            Type($.type, $p),
                        ])
                    ]))),
                ]),
                sh.b.snippet("}")
            ])
        )
        case 'type reference': return _pt.ss($, ($) => sh.b.sub([
            Identifier($['start']),
            sh.b.sub($['tail'].map(($) => sh.b.sub([
                sh.b.snippet("."),
                Identifier($),
            ]))),
            $['type arguments'].is_empty()
                ? sh.b.nothing()
                : sh.b.sub([
                    sh.b.snippet("<"),
                    sh.b.sub(op_enrich_list_elements_with_position_information($['type arguments']).map(($) => sh.b.sub([
                        Type($['value'], $p),
                        $['is last'] ? sh.b.nothing() : sh.b.snippet(", "),
                    ]))),
                    sh.b.snippet(">"),
                ]),
        ]))
        case 'union': return _pt.ss($, ($) => sh.b.indent([
            sh.g.sub($.map(($) => sh.g.nested_block([
                sh.b.snippet("| "),
                Type($, $p),
            ])))
        ]))
        case 'void': return _pt.ss($, ($) => sh.b.snippet("void"))
        default: return _pt.au($[0])
    }
})