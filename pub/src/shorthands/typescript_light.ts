import * as _edata from 'exupery-core-data'
import * as _et from 'exupery-core-types'

import * as _target from "../generated/interface/schemas/typescript_light/data_types/target"

import {
    Raw_Or_Normal_Dictionary,
    Raw_Or_Normal_Array,
    wrap_list,
    wrap_dictionary,
    wrap_state_group,
} from "exupery-core-data/dist/shorthands/unconstrained"

import * as sh from "exupery-core-data/dist/shorthands/unconstrained"


export namespace g {

    export const simple_line = (block: string): _target.Group_Part => ['block', block]

    export const nested_block = (snippets: sh.Raw_Or_Normal_Array<_target.Block.L>): _target.Group_Part => ['nested block', sh.wrap_list(snippets)]

    export const sub = (group_parts: sh.Raw_Or_Normal_Array<_target.Group.L>): _target.Group_Part => ['sub group', sh.wrap_list(group_parts)]

    export const nothing = (): _target.Group_Part => ['nothing', null]

    export const optional = (Group_Part: _et.Optional_Value<_target.Group.L>): _target.Group_Part => ['optional', Group_Part]

}

export namespace b {

    export const indent = (blocks: sh.Raw_Or_Normal_Array<_target.Group.L>): _target.Block_Part => ['indent', sh.wrap_list(blocks)]

    export const snippet = (snippet: string): _target.Block_Part => ['snippet', snippet]

    export const sub = (Block_Parts: sh.Raw_Or_Normal_Array<_target.Block.L>): _target.Block_Part => ['sub block', sh.wrap_list(Block_Parts)]

    export const nothing = (): _target.Block_Part => ['nothing', null]

    export const optional = (Block_Part: _et.Optional_Value<_target.Block.L>): _target.Block_Part => ['optional', Block_Part]

}

// export namespace n {

//     export const file = (
//         block: _target.Group
//     ): _target.Node => ['file', block]

//     export const directory = (
//         children: sh.Raw_Or_Normal_Dictionary<_target.Node>,
//     ): _target.Node => ['directory', sh.wrap_dictionary(children)]
// }

// export const directory = (
//     children: sh.Raw_Or_Normal_Dictionary<_target.Node>,
// ): _target.Directory => sh.wrap_dictionary(children)

export const group = (Group_Parts: sh.Raw_Or_Normal_Array<_target.Group.L>): _target.Group => sh.wrap_list(Group_Parts)


export const parameter = (
    name: string,
    type: _target.Type | null,
): _target.Type.SG._function.parameters.L => {
    return {
        'name': name,
        'type': type === null
            ? _edata.not_set()
            : _edata.set(type),
    }
}

export namespace t {
    export const boolean = (): _target.Type => {
        return ['boolean', null]
    }
    export const function_ = (
        type_parameters: Raw_Or_Normal_Array<string>,
        parameters: Raw_Or_Normal_Array<_target.Type.SG._function.parameters.L>,
        return_: _target.Type,
    ): _target.Type => {
        return ['function', {
            'type parameters': wrap_list(type_parameters),
            'parameters': wrap_list(parameters),
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
        elements: Raw_Or_Normal_Array<_target.Type>): _target.Type => {
        return ['tuple', {
            'readonly': read_only === 'readonly',
            'elements': wrap_list(elements)
        }]
    }
    export const type_literal = (properties: Raw_Or_Normal_Dictionary<_target.Type.SG.type_literal.properties.D>): _target.Type => {
        return ['type literal', {
            'properties': wrap_dictionary(properties),
        }]
    }
    export const type_reference = (
        start: string,
        tail: Raw_Or_Normal_Array<string>,
        type_arguments: Raw_Or_Normal_Array<_target.Type>,
    ): _target.Type => {
        return ['type reference', {
            'start': start,
            'tail': wrap_list(tail),
            'type arguments': wrap_list(type_arguments),
        }]
    }
    export const union = (cases: Raw_Or_Normal_Array<_target.Type>): _target.Type => {
        return ['union', wrap_list(cases)]
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
    export const object_literal = (properties: Raw_Or_Normal_Dictionary<_target.Expression.SG.object_literal.properties.D>): _target.Expression => {
        return ['object literal', {
            'properties': wrap_dictionary(properties),
        }]
    }
    export const array_literal = (
        elements: Raw_Or_Normal_Array<_target.Expression>
    ): _target.Expression => {
        return ['array literal', wrap_list(elements)]
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