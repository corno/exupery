import * as pd from 'exupery-core-data'

import * as _out from "../generated/interface/schemas/typescript_light/data_types/target"

import {
    Raw_Or_Normal_Dictionary,
    wrap_dictionary,
    wrap_state_group,
} from 'exupery-core-data/dist/shorthands/unconstrained'

export const parameter = (
    name: string,
    type: _out.Type | null,
): _out.Type.SG._function.parameters.L => {
    return {
        'name': name,
        'type': type === null
            ? pd.not_set()
            : pd.set(type),
    }
}

export namespace t {
    export const boolean = (): _out.Type => {
        return ['boolean', null]
    }
    export const function_ = (
        type_parameters: string[],
        parameters: _out.Type.SG._function.parameters.L[],
        return_: _out.Type,
    ): _out.Type => {
        return ['function', {
            'type parameters': pd.a(type_parameters),
            'parameters': pd.a(parameters),
            'return': return_,
        }]
    }
    export const literal_type = (value: string, delimiter: 'apostrophe' | 'quote'): _out.Type => {
        return ['literal type', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const null_ = (): _out.Type => {
        return ['null', null]
    }
    export const number = (): _out.Type => {
        return ['number', null]
    }
    export const string = (): _out.Type => {
        return ['string', null]
    }
    export const tuple = (read_only: 'readonly' | '', elements: _out.Type[]): _out.Type => {
        return ['tuple', {
            'readonly': read_only === 'readonly',
            'elements': pd.a(elements)
        }]
    }
    export const type_literal = (properties: Raw_Or_Normal_Dictionary<_out.Type.SG.type_literal.properties.D>): _out.Type => {
        return ['type literal', {
            'properties': wrap_dictionary(properties),
        }]
    }
    export const type_reference = (
        start: string,
        tail: string[],
        type_arguments: _out.Type[],
    ): _out.Type => {
        return ['type reference', {
            'start': start,
            'tail': pd.a(tail),
            'type arguments': pd.a(type_arguments),
        }]
    }
    export const union = (cases: _out.Type[]): _out.Type => {
        return ['union', pd.a(cases)]
    }
    export const void_ = (): _out.Type => {
        return ['void', null]
    }
}

export namespace e {
    export const true_ = (): _out.Expression => {
        return ['true', null]
    }
    export const false_ = (): _out.Expression => {
        return ['false', null]
    }
    export const null_ = (): _out.Expression => {
        return ['null', null]
    }
    export const string_literal = (value: string, delimiter: 'apostrophe' | 'quote'): _out.Expression => {
        return ['string literal', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const object_literal = (properties: Raw_Or_Normal_Dictionary<_out.Expression.SG.object_literal.properties.D>): _out.Expression => {
        return ['object literal', {
            'properties': wrap_dictionary(properties),
        }]
    }
    export const array_literal = (elements: _out.Expression[]): _out.Expression => {
        return ['array literal', pd.a(elements)]
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