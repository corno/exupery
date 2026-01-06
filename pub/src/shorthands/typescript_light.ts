import * as _p from 'pareto-core-shorthands/dist/unconstrained'

import * as _pi from 'pareto-core-interface'

import * as d_target from "../interface/generated/pareto/schemas/typescript_light/data_types/target"

export namespace g {

    export const simple_line = (block: string): d_target.Group_Part => ['block', block]

    export const nested_block = (snippets: _p.Raw_Or_Normal_List<d_target.Block.L>): d_target.Group_Part => ['nested block', _p.list.literal(snippets)]

    export const sub = (group_parts: _p.Raw_Or_Normal_List<d_target.Group.L>): d_target.Group_Part => ['sub group', _p.list.literal(group_parts)]

    export const nothing = (): d_target.Group_Part => ['nothing', null]

    export const optional = (Group_Part: _pi.Optional_Value<d_target.Group.L>): d_target.Group_Part => ['optional', Group_Part]

}

export namespace b {

    export const indent = (blocks: _p.Raw_Or_Normal_List<d_target.Group.L>): d_target.Block_Part => ['indent', _p.list.literal(blocks)]

    export const snippet = (snippet: string): d_target.Block_Part => ['snippet', snippet]

    export const sub = (Block_Parts: _p.Raw_Or_Normal_List<d_target.Block.L>): d_target.Block_Part => ['sub block', _p.list.literal(Block_Parts)]
    export const nothing = (): d_target.Block_Part => ['nothing', null]

    export const optional = (Block_Part: _pi.Optional_Value<d_target.Block.L>): d_target.Block_Part => ['optional', Block_Part]

}

// export namespace n {

//     export const file = (
//         block: _target.Group
//     ): _target.Node => ['file', block]

//     export const directory = (
//         children: _psh.Raw_Or_Normal_Dictionary<_target.Node>,
//     ): _target.Node => ['directory', _psh.dictionary.literal(children)]
// }

// export const directory = (
//     children: _psh.Raw_Or_Normal_Dictionary<_target.Node>,
// ): _target.Directory => _psh.dictionary.literal(children)

export const group = (Group_Parts: _p.Raw_Or_Normal_List<d_target.Group.L>): d_target.Group => _p.list.literal(Group_Parts)


export const parameter = (
    name: string,
    type: d_target.Type | null,
): d_target.Type.SG._function.parameters.L => {
    return {
        'name': name,
        'type': type === null
            ? _p.optional.not_set()
            : _p.optional.set(type),
    }
}

export namespace t {
    export const boolean = (): d_target.Type => {
        return ['boolean', null]
    }
    export const function_ = (
        type_parameters: _p.Raw_Or_Normal_List<string>,
        parameters: _p.Raw_Or_Normal_List<d_target.Type.SG._function.parameters.L>,
        return_: d_target.Type,
    ): d_target.Type => {
        return ['function', {
            'type parameters': _p.list.literal(type_parameters),
            'parameters': _p.list.literal(parameters),
            'return': return_,
        }]
    }
    export const literal_type = (value: string, delimiter: 'apostrophe' | 'quote'): d_target.Type => {
        return ['literal type', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const null_ = (): d_target.Type => {
        return ['null', null]
    }
    export const number = (): d_target.Type => {
        return ['number', null]
    }
    export const string = (): d_target.Type => {
        return ['string', null]
    }
    export const tuple = (
        read_only: 'readonly' | '', 
        elements: _p.Raw_Or_Normal_List<d_target.Type>): d_target.Type => {
        return ['tuple', {
            'readonly': read_only === 'readonly',
            'elements': _p.list.literal(elements)
        }]
    }
    export const type_literal = (properties: _p.Raw_Or_Normal_Dictionary<d_target.Type.SG.type_literal.properties.D>): d_target.Type => {
        return ['type literal', {
            'properties': _p.dictionary.literal(properties),
        }]
    }
    export const type_reference = (
        start: string,
        tail: _p.Raw_Or_Normal_List<string>,
        type_arguments: _p.Raw_Or_Normal_List<d_target.Type>,
    ): d_target.Type => {
        return ['type reference', {
            'start': start,
            'tail': _p.list.literal(tail),
            'type arguments': _p.list.literal(type_arguments),
        }]
    }
    export const union = (cases: _p.Raw_Or_Normal_List<d_target.Type>): d_target.Type => {
        return ['union', _p.list.literal(cases)]
    }
    export const void_ = (): d_target.Type => {
        return ['void', null]
    }
}

export namespace e {
    export const true_ = (): d_target.Expression => {
        return ['true', null]
    }
    export const false_ = (): d_target.Expression => {
        return ['false', null]
    }
    export const null_ = (): d_target.Expression => {
        return ['null', null]
    }
    export const string_literal = (value: string, delimiter: 'apostrophe' | 'quote'): d_target.Expression => {
        return ['string literal', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const object_literal = (properties: _p.Raw_Or_Normal_Dictionary<d_target.Expression.SG.object_literal.properties.D>): d_target.Expression => {
        return ['object literal', {
            'properties': _p.dictionary.literal(properties),
        }]
    }
    export const list_literal = (
        elements: _p.Raw_Or_Normal_List<d_target.Expression>
    ): d_target.Expression => {
        return ['array literal', _p.list.literal(elements)]
    }
    // export const arrow_function = (
    //     parameters: unresolved.Expression.SG.arrow_function.parameters.L[],
    //     return_type: unresolved.Type | null,
    //     //type: unresolved.Expression.SG.arrow_function.type,
    // ): unresolved.Expression => {
    //     return ['arrow function', {
    //         'parameters': pd.a(parameters),
    //         'return type': return_type,
    //         'type': type
    //     }]
    // }
}