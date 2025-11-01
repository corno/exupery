import * as _ea from 'exupery-core-alg'

import * as d_out_fp from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"
import * as d_out_tl from "../../../../interface/generated/pareto/schemas/typescript_light/data_types/source"
import * as d_in from "../../../../interface/generated/pareto/schemas/typescript_light/data_types/source"

import { $$ as op_create_identifier } from "../../operations/impure/text/create_identifier"
import { $$ as op_list_is_empty } from "pareto-standard-operations/dist/implementation/operations/impure/list/is_empty"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/implementation/operations/impure/dictionary/is_empty"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-standard-operations/dist/implementation/operations/impure/list/enrich_with_position_information"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/operations/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/text/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../operations/impure/text/serialize_quoted_string"
import { $$ as op_serialize_approximate_number } from "exupery-standard-library/dist/implementation/operations/impure/approximate_number/serialize"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"
import { Signature } from "../../../../interface/algorithms/transformations/typescript_light/fountain_pen_block"


export const Group = ($: d_in.Group): d_out_fp.Group => {
    return $.map(($) => Group_Part($))
}

export const Group_Part = ($: d_in.Group_Part): d_out_fp.Group_Part => {
    return _ea.cc($, ($): d_out_fp.Group_Part => {
        switch ($[0]) {
            case 'block': return _ea.ss($, ($) => ['block', $])
            case 'nothing': return _ea.ss($, ($) => ['nothing', null])
            case 'optional': return _ea.ss($, ($) => ['optional', $.map(($) => Group_Part($))])
            case 'nested block': return _ea.ss($, ($) => ['nested block', Block($)])
            case 'sub group': return _ea.ss($, ($) => ['sub group', Group($)])
            default: return _ea.au($[0])
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
    return _ea.cc($, ($): d_out_fp.Block_Part => {
        switch ($[0]) {
            case 'snippet': return _ea.ss($, ($) => sh.b.snippet($))
            case 'nothing': return _ea.ss($, ($) => ['nothing', null])
            case 'optional': return _ea.ss($, ($) => ['optional', $.map(($): d_out_fp.Block_Part => Block_Part($))])
            case 'indent': return _ea.ss($, ($) => ['indent', Group($)])
            case 'sub block': return _ea.ss($, ($) => ['sub block', Block($)])
            default: return _ea.au($[0])
        }
    })
}

export const Identifier = (
    $: string //FIX should have been a schema type
): d_out_fp.Block_Part => {
    return sh.b.snippet(op_create_identifier([$]))
}

export const String_Literal = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): d_out_fp.Block_Part => {
    return sh.b.snippet($p.delimiter === "quote" ? op_serialize_with_quote_delimiter($) : op_serialize_with_apostrophe_delimiter($))
}

export const Statements = (
    $: d_in.Statements,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Group_Part => sh.g.sub($.map(($) => sh.g.nested_block([
    _ea.cc($, ($) => {
        switch ($[0]) {
            case 'import': return _ea.ss($, ($) => sh.b.sub([
                sh.b.snippet("import "),
                _ea.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'named': return _ea.ss($, ($) => sh.b.sub([
                            sh.b.snippet("{ "),
                            sh.b.sub(op_dictionary_to_list($.specifiers).map(($) => sh.b.sub([
                                Identifier($.key),
                                sh.b.snippet(", ")
                            ]))),
                            sh.b.snippet("}"),
                        ]))
                        case 'namespace': return _ea.ss($, ($) => sh.b.sub([
                            sh.b.snippet("* as "),
                            Identifier($),
                        ]))
                        default: return _ea.au($[0])
                    }
                }),
                sh.b.snippet(" from "),
                String_Literal($.from, { 'delimiter': "quote" }),
            ]))
            case 'module declaration': return _ea.ss($, ($) => sh.b.sub([
                $.export ? sh.b.snippet("export ") : sh.b.nothing(),
                sh.b.snippet("namespace {"),
                sh.b.indent([
                    Statements($['block'], $p),
                ]),
                sh.b.snippet("}"),
            ]))
            case 'type alias declaration': return _ea.ss($, ($) => sh.b.sub([
                $.export ? sh.b.snippet("export ") : sh.b.nothing(),
                sh.b.snippet("type "),
                Identifier($['name']),
                op_list_is_empty($['parameters'])
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
            case 'variable': return _ea.ss($, ($) => sh.b.sub([
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
            default: return _ea.au($[0])
        }
    })
])))

export const Expression = (
    $: d_in.Expression,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Block_Part => _ea.cc($, ($) => {
    switch ($[0]) {
        case 'array literal': return _ea.ss($, ($) => sh.b.sub([
            sh.b.snippet("["),
            sh.b.indent([
                sh.g.sub(op_enrich_list_elements_with_position_information($).map(($) => sh.g.nested_block([
                    Expression($.value, $p),
                    $['is last'] ? sh.b.nothing() : sh.b.snippet(", ")
                ]))),
            ]),
            sh.b.snippet("]"),
        ]))
        case 'arrow function': return _ea.ss($, ($) => sh.b.sub([
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
            _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'block': return _ea.ss($, ($) => sh.b.sub([
                        sh.b.snippet("{"),
                        sh.b.indent([
                            Statements($, $p),
                        ]),
                        sh.b.snippet("}"),
                    ]))
                    case 'expression': return _ea.ss($, ($) => Expression($, $p))
                    default: return _ea.au($[0])
                }
            }),
        ]))
        case 'call': return _ea.ss($, ($) => sh.b.sub([
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
        case 'false': return _ea.ss($, ($) => sh.b.snippet("false"))
        case 'null': return _ea.ss($, ($) => sh.b.snippet("null"))
        case 'number literal': return _ea.ss($, ($) => sh.b.snippet(op_serialize_approximate_number($)))
        case 'object literal': return _ea.ss($, ($) => sh.b.sub([
            sh.b.snippet("{"),
            sh.b.indent([
                sh.g.sub(op_dictionary_to_list($.properties).map(($) => sh.g.nested_block([
                    String_Literal($.key, { 'delimiter': "apostrophe" }),
                    sh.b.snippet(": "),
                    Expression($.value, $p),
                    sh.b.snippet(",")
                ]))),
            ]),
            sh.b.snippet("}"),
        ]))
        case 'string literal': return _ea.ss($, ($) => sh.b.sub([
            sh.b.snippet($['delimiter'][0] === "quote" ? op_serialize_with_quote_delimiter($['value']) : op_serialize_with_apostrophe_delimiter($['value']))
        ]))
        case 'true': return _ea.ss($, ($) => sh.b.snippet("true"))
        default: return _ea.au($[0])
    }
})

export const Type = (
    $: d_in.Type,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out_fp.Block_Part => _ea.cc($, ($) => {
    switch ($[0]) {
        case 'boolean': return _ea.ss($, ($) => sh.b.snippet("boolean"))
        case 'function': return _ea.ss($, ($) => sh.b.sub([
            op_list_is_empty($['type parameters'])
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
        case 'literal type': return _ea.ss($, ($) => String_Literal($.value, { 'delimiter': $.delimiter[0] })) //FIX, implement a switch for the delimiter
        case 'null': return _ea.ss($, ($) => sh.b.snippet("null"))
        case 'number': return _ea.ss($, ($) => sh.b.snippet("number"))
        case 'string': return _ea.ss($, ($) => sh.b.snippet("string"))
        case 'tuple': return _ea.ss($, ($) => sh.b.sub([
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
        case 'type literal': return _ea.ss($, ($) => $p['replace empty type literals by null'] && op_dictionary_is_empty($['properties'])
            ? sh.b.snippet("null")
            : sh.b.sub([
                sh.b.snippet("{"),
                sh.b.indent([
                    sh.g.sub(op_dictionary_to_list($['properties']).map(($) => sh.g.sub([
                        sh.g.nested_block([
                            $.value['readonly'] ? sh.b.snippet("readonly ") : sh.b.nothing(),
                            String_Literal($.key, { 'delimiter': "apostrophe" }),
                            sh.b.snippet(": "),
                            Type($.value.type, $p),
                        ])
                    ]))),
                ]),
                sh.b.snippet("}")
            ])
        )
        case 'type reference': return _ea.ss($, ($) => sh.b.sub([
            Identifier($['start']),
            sh.b.sub($['tail'].map(($) => sh.b.sub([
                sh.b.snippet("."),
                Identifier($),
            ]))),
            op_list_is_empty($['type arguments'])
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
        case 'union': return _ea.ss($, ($) => sh.b.indent([
            sh.g.sub($.map(($) => sh.g.nested_block([
                sh.b.snippet("| "),
                Type($, $p),
            ])))
        ]))
        case 'void': return _ea.ss($, ($) => sh.b.snippet("void"))
        default: return _ea.au($[0])
    }
})