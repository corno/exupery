import * as pa from 'exupery-core-alg'

import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"
import * as d_in from "../../generated/interface/schemas/typescript_light/data_types/source"

import { $$ as op_create_identifier } from "../../operations/impure/create_identifier"
import { $$ as op_list_is_empty } from "pareto-standard-operations/dist/impure/list/is_empty"
import { $$ as op_dictionary_is_empty } from "pareto-standard-operations/dist/impure/dictionary/is_empty"
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-standard-operations/dist/impure/list/enrich_with_position_information"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"
import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../operations/impure/serialize_quoted_string"
import { $$ as op_serialize_approximate_number } from "exupery-standard-library/dist/approximate_number/serialize"


import {
    b, l
} from "pareto-fountain-pen/dist/shorthands/block"


export const Block = ($: d_in.Block): d_out.Block => {
    return $ //FIXME: this is a temporary solution
}

export const Identifier = (
    $: string //FIX should have been a schema type
): d_out.Line_Part => {
    return l.snippet(op_create_identifier([$]))
}

export const String_Literal = (
    $: string,
    $p: {
        'delimiter': "quote" | "apostrophe"
    }
): d_out.Line_Part => {
    return l.snippet($p.delimiter === "quote" ? op_serialize_with_quote_delimiter($) : op_serialize_with_apostrophe_delimiter($))
}

export const Statements = (
    $: d_in.Statements,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out.Block_Part => b.sub($.map(($) => b.nested_line([
    pa.cc($, ($) => {
        switch ($[0]) {
            case 'import': return pa.ss($, ($) => l.sub([
                l.snippet("import "),
                pa.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'named': return pa.ss($, ($) => l.sub([
                            l.snippet("{ "),
                            l.sub(op_dictionary_to_list($.specifiers).map(($) => l.sub([
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
                op_list_is_empty($['parameters'])
                    ? l.nothing()
                    : l.sub([
                        l.snippet("<"),
                        l.sub(op_enrich_list_elements_with_position_information($['parameters']).map(($) => l.sub([
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
    $: d_in.Expression,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out.Line_Part => pa.cc($, ($) => {
    switch ($[0]) {
        case 'array literal': return pa.ss($, ($) => l.sub([
            l.snippet("["),
            l.indent([
                b.sub(op_enrich_list_elements_with_position_information($).map(($) => b.nested_line([
                    Expression($.value, $p),
                    $['is last'] ? l.nothing() : l.snippet(", ")
                ]))),
            ]),
            l.snippet("]"),
        ]))
        case 'arrow function': return pa.ss($, ($) => l.sub([
            l.snippet("("),
            l.indent([
                b.sub($.parameters.map(($) => b.nested_line([
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
                b.sub(op_enrich_list_elements_with_position_information($['arguments']).map(($) => b.nested_line([
                    Expression($.value, $p),
                    $['is last'] ? l.nothing() : l.snippet(", ")
                ]))),
            ]),
            l.snippet(")"),
        ]))
        case 'false': return pa.ss($, ($) => l.snippet("false"))
        case 'null': return pa.ss($, ($) => l.snippet("null"))
        case 'number literal': return pa.ss($, ($) => l.snippet(op_serialize_approximate_number($)))
        case 'object literal': return pa.ss($, ($) => l.sub([
            l.snippet("{"),
            l.indent([
                b.sub(op_dictionary_to_list($.properties).map(($) => b.nested_line([
                    String_Literal($.key, { 'delimiter': "apostrophe" }),
                    l.snippet(": "),
                    Expression($.value, $p),
                    l.snippet(",")
                ]))),
            ]),
            l.snippet("}"),
        ]))
        case 'string literal': return pa.ss($, ($) => l.sub([
            l.snippet($['delimiter'][0] === "quote" ? op_serialize_with_quote_delimiter($['value']) : op_serialize_with_apostrophe_delimiter($['value']))
        ]))
        case 'true': return pa.ss($, ($) => l.snippet("true"))
        default: return pa.au($[0])
    }
})

export const Type = (
    $: d_in.Type,
    $p: {
        'replace empty type literals by null': boolean
    }
): d_out.Line_Part => pa.cc($, ($) => {
    switch ($[0]) {
        case 'boolean': return pa.ss($, ($) => l.snippet("boolean"))
        case 'function': return pa.ss($, ($) => l.sub([
            op_list_is_empty($['type parameters'])
                ? l.nothing()
                : l.sub([
                    l.snippet("<"),
                    l.sub(op_enrich_list_elements_with_position_information($['type parameters']).map(($) => l.sub([
                        Identifier($.value),
                        $['is last'] ? l.nothing() : l.snippet(", ")
                    ]))),
                    l.snippet(">"),
                ]), l.snippet("("),
            l.indent([
                b.sub($['parameters'].map(($) => b.nested_line([
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
            l.sub(op_enrich_list_elements_with_position_information($['elements']).map(($) => l.sub([
                Type($.value, $p),
                $['is last']
                    ? l.nothing()
                    : l.snippet(", ")
            ]))),
            l.snippet("]"),
        ]))
        case 'type literal': return pa.ss($, ($) => $p['replace empty type literals by null'] && op_dictionary_is_empty($['properties'])
            ? l.snippet("null")
            : l.sub([
                l.snippet("{"),
                l.indent([
                    b.sub(op_dictionary_to_list($['properties']).map(($) => b.sub([
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
            l.sub($['tail'].map(($) => l.sub([
                l.snippet("."),
                Identifier($),
            ]))),
            op_list_is_empty($['type arguments'])
                ? l.nothing()
                : l.sub([
                    l.snippet("<"),
                    l.sub(op_enrich_list_elements_with_position_information($['type arguments']).map(($) => l.sub([
                        Type($['value'], $p),
                        $['is last'] ? l.nothing() : l.snippet(", "),
                    ]))),
                    l.snippet(">"),
                ]),
        ]))
        case 'union': return pa.ss($, ($) => l.indent([
            b.sub($.map(($) => b.nested_line([
                l.snippet("| "),
                Type($, $p),
            ])))
        ]))
        case 'void': return pa.ss($, ($) => l.snippet("void"))
        default: return pa.au($[0])
    }
})