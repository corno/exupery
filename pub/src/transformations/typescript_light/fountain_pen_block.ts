import * as _ea from 'exupery-core-alg'

import * as d_out_fp from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"
import * as d_out_tl from "../../generated/interface/schemas/typescript_light/data_types/source"
import * as d_in from "../../generated/interface/schemas/typescript_light/data_types/source"

import { $$ as op_create_identifier } from "../../operations/impure/text/create_identifier"
import { $$ as op_list_is_empty } from "pareto-standard-operations/dist/operations/impure/list/is_empty"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/operations/impure/dictionary/is_empty"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-standard-operations/dist/operations/impure/list/enrich_with_position_information"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/text/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../operations/impure/text/serialize_quoted_string"
import { $$ as op_serialize_approximate_number } from "exupery-standard-library/dist/operations/impure/approximate_number/serialize"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Group = ($: d_in.Group): d_out_fp.Group => {
    return $.map(($) => Group_Part($))
}

export const Group_Part = ($: d_in.Group_Part): d_out_fp.Group_Part => {
    return _ea.cc($, ($): d_out_fp.Group_Part => {
        switch ($[0]) {
            case 'line': return _ea.ss($, ($) => ['line', $])
            case 'nothing': return _ea.ss($, ($) => ['nothing', null])
            case 'optional': return _ea.ss($, ($) => ['optional', $.map(($) => Group_Part($))])
            case 'nested line': return _ea.ss($, ($) => ['nested line', Line($)])
            case 'sub group': return _ea.ss($, ($) => ['sub group', Group($)])
            default: return _ea.au($[0])
        }
    })
}

export const Line = (
    $: d_in.Line
): d_out_fp.Line => {
    return $.map(($) => Line_Part($))
}

export const Line_Part = (
    $: d_in.Line_Part
): d_out_fp.Line_Part => {
    return _ea.cc($, ($): d_out_fp.Line_Part => {
        switch ($[0]) {
            case 'snippet': return _ea.ss($, ($) => sh.l.snippet($))
            case 'nothing': return _ea.ss($, ($) => ['nothing', null])
            case 'optional': return _ea.ss($, ($) => ['optional', $.map(($): d_out_fp.Line_Part => Line_Part($))])
            case 'indent': return _ea.ss($, ($) => ['indent', Group($)])
            case 'sub line': return _ea.ss($, ($) => ['sub line', Line($)])
            default: return _ea.au($[0])
        }
    })
}

export const Identifier = (
    $: string //FIX should have been a schema type
): d_out_fp.Line_Part => {
    return sh.l.snippet(op_create_identifier([$]))
}

export const String_Literal = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): d_out_fp.Line_Part => {
    return sh.l.snippet($p.delimiter === "quote" ? op_serialize_with_quote_delimiter($) : op_serialize_with_apostrophe_delimiter($))
}

export const Statements = (
    $: d_in.Statements,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Group_Part => sh.g.sub($.map(($) => sh.g.nested_line([
    _ea.cc($, ($) => {
        switch ($[0]) {
            case 'import': return _ea.ss($, ($) => sh.l.sub([
                sh.l.snippet("import "),
                _ea.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'named': return _ea.ss($, ($) => sh.l.sub([
                            sh.l.snippet("{ "),
                            sh.l.sub(op_dictionary_to_list($.specifiers).map(($) => sh.l.sub([
                                Identifier($.key),
                                sh.l.snippet(", ")
                            ]))),
                            sh.l.snippet("}"),
                        ]))
                        case 'namespace': return _ea.ss($, ($) => sh.l.sub([
                            sh.l.snippet("* as "),
                            Identifier($),
                        ]))
                        default: return _ea.au($[0])
                    }
                }),
                sh.l.snippet(" from "),
                String_Literal($.from, { 'delimiter': "quote" }),
            ]))
            case 'module declaration': return _ea.ss($, ($) => sh.l.sub([
                $.export ? sh.l.snippet("export ") : sh.l.nothing(),
                sh.l.snippet("namespace {"),
                sh.l.indent([
                    Statements($['block'], $p),
                ]),
                sh.l.snippet("}"),
            ]))
            case 'type alias declaration': return _ea.ss($, ($) => sh.l.sub([
                $.export ? sh.l.snippet("export ") : sh.l.nothing(),
                sh.l.snippet("type "),
                Identifier($['name']),
                op_list_is_empty($['parameters'])
                    ? sh.l.nothing()
                    : sh.l.sub([
                        sh.l.snippet("<"),
                        sh.l.sub(op_enrich_list_elements_with_position_information($['parameters']).map(($) => sh.l.sub([
                            Identifier($.value),
                            $['is last'] ? sh.l.nothing() : sh.l.snippet(", ")
                        ]))),
                        sh.l.snippet(">"),
                    ]),
                sh.l.snippet(" = "),
                Type($['type'], $p),
            ]))
            case 'variable': return _ea.ss($, ($) => sh.l.sub([
                $.export ? sh.l.snippet("export ") : sh.l.nothing(),
                $.const ? sh.l.snippet("const ") : sh.l.snippet("let "),
                Identifier($['name']),
                $.type.transform(
                    ($) => sh.l.sub([
                        sh.l.snippet(": "),
                        Type($, $p)
                    ]),
                    () => sh.l.nothing(),
                ),
                $.expression.transform(
                    ($) => sh.l.sub([
                        sh.l.snippet("= "),
                        Expression($, $p)
                    ]),
                    () => sh.l.nothing(),
                ),
            ]))
            default: return _ea.au($[0])
        }
    })
])))

export const Expression = (
    $: d_in.Expression,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Line_Part => _ea.cc($, ($) => {
    switch ($[0]) {
        case 'array literal': return _ea.ss($, ($) => sh.l.sub([
            sh.l.snippet("["),
            sh.l.indent([
                sh.g.sub(op_enrich_list_elements_with_position_information($).map(($) => sh.g.nested_line([
                    Expression($.value, $p),
                    $['is last'] ? sh.l.nothing() : sh.l.snippet(", ")
                ]))),
            ]),
            sh.l.snippet("]"),
        ]))
        case 'arrow function': return _ea.ss($, ($) => sh.l.sub([
            sh.l.snippet("("),
            sh.l.indent([
                sh.g.sub($.parameters.map(($) => sh.g.nested_line([
                    Identifier($.name),
                    $.type.transform(
                        ($) => sh.l.sub([
                            sh.l.snippet(": "),
                            Type($, $p)
                        ]),
                        () => sh.l.nothing(),
                    ),
                    sh.l.snippet(",")
                ]))),
            ]),
            sh.l.snippet(")"),
            $['return type'].transform(
                ($) => sh.l.sub([
                    sh.l.snippet(": "),
                    Type($, $p)
                ]),
                () => sh.l.nothing(),
            ),
            sh.l.snippet(" => "),
            _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'block': return _ea.ss($, ($) => sh.l.sub([
                        sh.l.snippet("{"),
                        sh.l.indent([
                            Statements($, $p),
                        ]),
                        sh.l.snippet("}"),
                    ]))
                    case 'expression': return _ea.ss($, ($) => Expression($, $p))
                    default: return _ea.au($[0])
                }
            }),
        ]))
        case 'call': return _ea.ss($, ($) => sh.l.sub([
            Expression($['function selection'], $p),
            sh.l.snippet("("),
            sh.l.indent([
                sh.g.sub(op_enrich_list_elements_with_position_information($['arguments']).map(($) => sh.g.nested_line([
                    Expression($.value, $p),
                    $['is last'] ? sh.l.nothing() : sh.l.snippet(", ")
                ]))),
            ]),
            sh.l.snippet(")"),
        ]))
        case 'false': return _ea.ss($, ($) => sh.l.snippet("false"))
        case 'null': return _ea.ss($, ($) => sh.l.snippet("null"))
        case 'number literal': return _ea.ss($, ($) => sh.l.snippet(op_serialize_approximate_number($)))
        case 'object literal': return _ea.ss($, ($) => sh.l.sub([
            sh.l.snippet("{"),
            sh.l.indent([
                sh.g.sub(op_dictionary_to_list($.properties).map(($) => sh.g.nested_line([
                    String_Literal($.key, { 'delimiter': "apostrophe" }),
                    sh.l.snippet(": "),
                    Expression($.value, $p),
                    sh.l.snippet(",")
                ]))),
            ]),
            sh.l.snippet("}"),
        ]))
        case 'string literal': return _ea.ss($, ($) => sh.l.sub([
            sh.l.snippet($['delimiter'][0] === "quote" ? op_serialize_with_quote_delimiter($['value']) : op_serialize_with_apostrophe_delimiter($['value']))
        ]))
        case 'true': return _ea.ss($, ($) => sh.l.snippet("true"))
        default: return _ea.au($[0])
    }
})

export const Type = (
    $: d_in.Type,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Line_Part => _ea.cc($, ($) => {
    switch ($[0]) {
        case 'boolean': return _ea.ss($, ($) => sh.l.snippet("boolean"))
        case 'function': return _ea.ss($, ($) => sh.l.sub([
            op_list_is_empty($['type parameters'])
                ? sh.l.nothing()
                : sh.l.sub([
                    sh.l.snippet("<"),
                    sh.l.sub(op_enrich_list_elements_with_position_information($['type parameters']).map(($) => sh.l.sub([
                        Identifier($.value),
                        $['is last'] ? sh.l.nothing() : sh.l.snippet(", ")
                    ]))),
                    sh.l.snippet(">"),
                ]), sh.l.snippet("("),
            sh.l.indent([
                sh.g.sub($['parameters'].map(($) => sh.g.nested_line([
                    Identifier($.name),
                    $.type.transform(
                        ($) => sh.l.sub([
                            sh.l.snippet(": "),
                            Type($, $p)
                        ]),
                        () => sh.l.nothing(),
                    ),
                    sh.l.snippet(",")
                ]))),
            ]),
            sh.l.snippet(") => "),
            Type($['return'], $p)
        ]))
        case 'literal type': return _ea.ss($, ($) => String_Literal($.value, { 'delimiter': $.delimiter[0] })) //FIX, implement a switch for the delimiter
        case 'null': return _ea.ss($, ($) => sh.l.snippet("null"))
        case 'number': return _ea.ss($, ($) => sh.l.snippet("number"))
        case 'string': return _ea.ss($, ($) => sh.l.snippet("string"))
        case 'tuple': return _ea.ss($, ($) => sh.l.sub([
            $.readonly ? sh.l.snippet("readonly ") : sh.l.nothing(),
            sh.l.snippet("["),
            sh.l.sub(op_enrich_list_elements_with_position_information($['elements']).map(($) => sh.l.sub([
                Type($.value, $p),
                $['is last']
                    ? sh.l.nothing()
                    : sh.l.snippet(", ")
            ]))),
            sh.l.snippet("]"),
        ]))
        case 'type literal': return _ea.ss($, ($) => $p['replace empty type literals by null'] && op_dictionary_is_empty($['properties'])
            ? sh.l.snippet("null")
            : sh.l.sub([
                sh.l.snippet("{"),
                sh.l.indent([
                    sh.g.sub(op_dictionary_to_list($['properties']).map(($) => sh.g.sub([
                        sh.g.nested_line([
                            $.value['readonly'] ? sh.l.snippet("readonly ") : sh.l.nothing(),
                            String_Literal($.key, { 'delimiter': "apostrophe" }),
                            sh.l.snippet(": "),
                            Type($.value.type, $p),
                        ])
                    ]))),
                ]),
                sh.l.snippet("}")
            ])
        )
        case 'type reference': return _ea.ss($, ($) => sh.l.sub([
            Identifier($['start']),
            sh.l.sub($['tail'].map(($) => sh.l.sub([
                sh.l.snippet("."),
                Identifier($),
            ]))),
            op_list_is_empty($['type arguments'])
                ? sh.l.nothing()
                : sh.l.sub([
                    sh.l.snippet("<"),
                    sh.l.sub(op_enrich_list_elements_with_position_information($['type arguments']).map(($) => sh.l.sub([
                        Type($['value'], $p),
                        $['is last'] ? sh.l.nothing() : sh.l.snippet(", "),
                    ]))),
                    sh.l.snippet(">"),
                ]),
        ]))
        case 'union': return _ea.ss($, ($) => sh.l.indent([
            sh.g.sub($.map(($) => sh.g.nested_line([
                sh.l.snippet("| "),
                Type($, $p),
            ])))
        ]))
        case 'void': return _ea.ss($, ($) => sh.l.snippet("void"))
        default: return _ea.au($[0])
    }
})