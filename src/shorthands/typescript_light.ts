import * as pd from 'exupery-core-data'

import * as unresolved from "../generated/interface/schemas/typescript_light/unresolved"

import {
    Raw_Or_Normal_Dictionary,
    wrap_dictionary,
    wrap_state_group,
} from "exupery-core-data/dist/shorthands"

export const parameter = (
    name: string,
    type: unresolved.Type | null,
): unresolved.Type.SG._function.parameters.L => {
    return {
        'name': name,
        'type': type === null
            ? pd.not_set()
            : pd.set(type),
    }
}

export namespace t {
    export const boolean = (): unresolved.Type => {
        return ['boolean', null]
    }
    export const function_ = (
        type_parameters: string[],
        parameters: unresolved.Type.SG._function.parameters.L[],
        return_: unresolved.Type,
    ): unresolved.Type => {
        return ['function', {
            'type parameters': pd.a(type_parameters),
            'parameters': pd.a(parameters),
            'return': return_,
        }]
    }
    export const literal_type = (value: string, delimiter: 'apostrophe' | 'quote'): unresolved.Type => {
        return ['literal type', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const null_ = (): unresolved.Type => {
        return ['null', null]
    }
    export const number = (): unresolved.Type => {
        return ['number', null]
    }
    export const string = (): unresolved.Type => {
        return ['string', null]
    }
    export const tuple = (read_only: 'readonly' | '', elements: unresolved.Type[]): unresolved.Type => {
        return ['tuple', {
            'readonly': read_only === 'readonly',
            'elements': pd.a(elements)
        }]
    }
    export const type_literal = (properties: Raw_Or_Normal_Dictionary<unresolved.Type.SG.type_literal.properties.D>): unresolved.Type => {
        return ['type literal', {
            'properties': wrap_dictionary(properties).dictionary.map(($) => $.entry),
        }]
    }
    export const type_reference = (
        start: string,
        tail: string[],
        type_arguments: unresolved.Type[],
    ): unresolved.Type => {
        return ['type reference', {
            'start': start,
            'tail': pd.a(tail),
            'type arguments': pd.a(type_arguments),
        }]
    }
    export const union = (cases: unresolved.Type[]): unresolved.Type => {
        return ['union', pd.a(cases)]
    }
    export const void_ = (): unresolved.Type => {
        return ['void', null]
    }
}

export namespace e {
    export const true_ = (): unresolved.Expression => {
        return ['true', null]
    }
    export const false_ = (): unresolved.Expression => {
        return ['false', null]
    }
    export const null_ = (): unresolved.Expression => {
        return ['null', null]
    }
    export const string_literal = (value: string, delimiter: 'apostrophe' | 'quote'): unresolved.Expression => {
        return ['string literal', {
            'value': value,
            'delimiter': delimiter === 'apostrophe' ? ['apostrophe', null] : ['quote', null]
        }]
    }
    export const object_literal = (properties: Raw_Or_Normal_Dictionary<unresolved.Expression.SG.object_literal.properties.D>): unresolved.Expression => {
        return ['object literal', {
            'properties': wrap_dictionary(properties).dictionary.map(($) => $.entry),
        }]
    }
    export const array_literal = (elements: unresolved.Expression[]): unresolved.Expression => {
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