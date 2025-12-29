import * as _psh from 'pareto-core-shorthands/dist/unconstrained'

import * as _pi from 'pareto-core-interface'

import * as _target from "../interface/generated/pareto/schemas/typescript_light/data_types/target"

export namespace g {

    export const simple_line = (block: string): _target.Group_Part => ['block', block]

    export const nested_block = (snippets: _psh.Raw_Or_Normal_List<_target.Block.L>): _target.Group_Part => ['nested block', _psh.wrap_list(snippets)]

    export const sub = (group_parts: _psh.Raw_Or_Normal_List<_target.Group.L>): _target.Group_Part => ['sub group', _psh.wrap_list(group_parts)]

    export const nothing = (): _target.Group_Part => ['nothing', null]

    export const optional = (Group_Part: _pi.Optional_Value<_target.Group.L>): _target.Group_Part => ['optional', Group_Part]

}

export namespace b {

    export const indent = (blocks: _psh.Raw_Or_Normal_List<_target.Group.L>): _target.Block_Part => ['indent', _psh.wrap_list(blocks)]

    export const snippet = (snippet: string): _target.Block_Part => ['snippet', snippet]

    export const sub = (Block_Parts: _psh.Raw_Or_Normal_List<_target.Block.L>): _target.Block_Part => ['sub block', _psh.wrap_list(Block_Parts)]

    export const nothing = (): _target.Block_Part => ['nothing', null]

    export const optional = (Block_Part: _pi.Optional_Value<_target.Block.L>): _target.Block_Part => ['optional', Block_Part]

}

// export namespace n {

//     export const file = (
//         block: _target.Group
//     ): _target.Node => ['file', block]

//     export const directory = (
//         children: _psh.Raw_Or_Normal_Dictionary<_target.Node>,
//     ): _target.Node => ['directory', _psh.wrap_dictionary(children)]
// }

// export const directory = (
//     children: _psh.Raw_Or_Normal_Dictionary<_target.Node>,
// ): _target.Directory => _psh.wrap_dictionary(children)

export const group = (Group_Parts: _psh.Raw_Or_Normal_List<_target.Group.L>): _target.Group => _psh.wrap_list(Group_Parts)


export const parameter = (
    name: string,
    type: _target.Type | null,
): _target.Type.SG._function.parameters.L => {
    return {
        'name': name,
        'type': type === null
            ? _psh.not_set()
            : _psh.set(type),
    }
}

export namespace t {
    export const boolean = (): _target.Type => {
        return ['boolean', null]
    }
    export const function_ = (
        type_parameters: _psh.Raw_Or_Normal_List<string>,
        parameters: _psh.Raw_Or_Normal_List<_target.Type.SG._function.parameters.L>,
        return_: _target.Type,
    ): _target.Type => {
        return ['function', {
            'type parameters': _psh.wrap_list(type_parameters),
            'parameters': _psh.wrap_list(parameters),
            'return': return_,
        }]
    }
    export const literal_type = (value: string, delimiter: 'apostrophe' | 'quote'): _target.Type => {
        return ['literal type', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const null_ = (): _target.Type => {
        return ['null', null]
    }
    export const number = (): _target.Type => {
        return ['number', null]
    }
    export const string = (): _target.Type => {
        return ['string', null]
    }
    export const tuple = (
        read_only: 'readonly' | '', 
        elements: _psh.Raw_Or_Normal_List<_target.Type>): _target.Type => {
        return ['tuple', {
            'readonly': read_only === 'readonly',
            'elements': _psh.wrap_list(elements)
        }]
    }
    export const type_literal = (properties: _psh.Raw_Or_Normal_Dictionary<_target.Type.SG.type_literal.properties.D>): _target.Type => {
        return ['type literal', {
            'properties': _psh.wrap_dictionary(properties),
        }]
    }
    export const type_reference = (
        start: string,
        tail: _psh.Raw_Or_Normal_List<string>,
        type_arguments: _psh.Raw_Or_Normal_List<_target.Type>,
    ): _target.Type => {
        return ['type reference', {
            'start': start,
            'tail': _psh.wrap_list(tail),
            'type arguments': _psh.wrap_list(type_arguments),
        }]
    }
    export const union = (cases: _psh.Raw_Or_Normal_List<_target.Type>): _target.Type => {
        return ['union', _psh.wrap_list(cases)]
    }
    export const void_ = (): _target.Type => {
        return ['void', null]
    }
}

export namespace e {
    export const true_ = (): _target.Expression => {
        return ['true', null]
    }
    export const false_ = (): _target.Expression => {
        return ['false', null]
    }
    export const null_ = (): _target.Expression => {
        return ['null', null]
    }
    export const string_literal = (value: string, delimiter: 'apostrophe' | 'quote'): _target.Expression => {
        return ['string literal', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const object_literal = (properties: _psh.Raw_Or_Normal_Dictionary<_target.Expression.SG.object_literal.properties.D>): _target.Expression => {
        return ['object literal', {
            'properties': _psh.wrap_dictionary(properties),
        }]
    }
    export const list_literal = (
        elements: _psh.Raw_Or_Normal_List<_target.Expression>
    ): _target.Expression => {
        return ['array literal', _psh.wrap_list(elements)]
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