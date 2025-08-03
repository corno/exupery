import * as _et from "exupery-core-types"
import * as _ea from "exupery-core-alg"
import * as _ed from "exupery-core-dev"

import * as t from "../../interface/core/astn_source"

// export const assert_text = ($: t._T_Value): string => {
//     return _ea.cc($.type, ($) => {
//         switch ($[0]) {
//             case "string": return _ea.ss($, ($) => $.value)
//             case "include": return _ea.ss($, ($) => _ed.implement_me())
//             case "indexed collection": return _ea.ss($, ($) => _ed.implement_me())
//             case "not set": return _ea.ss($, ($) => _ed.implement_me())
//             case "ordered collection": return _ea.ss($, ($) => _ed.implement_me())
//             case "set optional value": return _ea.ss($, ($) => _ed.implement_me())
//             case "tagged value": return _ea.ss($, ($) => _ed.implement_me())
//             default: return _ea.au($[0])
//         }
//     })
// }

export const process_state_group = <X>(
    $: t._T_Value,
    $p: {
        'states': _et.Dictionary<($: t._T_Value) => X>,
    }

): X => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case "string": return _ea.ss($, ($) => _ed.implement_me())
            case "include": return _ea.ss($, ($) => _ed.implement_me())
            case "indexed collection": return _ea.ss($, ($) => _ed.implement_me())
            case "not set": return _ea.ss($, ($) => _ed.implement_me())
            case "ordered collection": return _ea.ss($, ($) => _ed.implement_me())
            case "set optional value": return _ea.ss($, ($) => _ed.implement_me())
            case "tagged value": return _ea.ss($, ($) => {
                const data = $.value
                return $p.states.__get_entry(
                    $.state.value
                ).transform(
                    ($) => $(data),
                    () => _ed.implement_me()
                )
            })
            default: return _ea.au($[0])
        }
    })
}

export const process_group = <X>(
    $: t._T_Value,
    $p: {
        'properties': _et.Dictionary<($: t._T_Value) => X>,
    }

): X => {
    return _ed.implement_me()
}

export const process_dictionary = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }

): _et.Dictionary<X> => {
    return _ed.implement_me()
}


export const process_number = (
    $: t._T_Value,
    $p: null
): number => {
    return _ed.implement_me()
}

export const process_boolean = (
    $: t._T_Value,
    $p: null

): boolean => {
    return _ed.implement_me()
}

export const process_text = (
    $: t._T_Value,
    $p: null

): string => {
    return _ed.implement_me()
}

export const process_list = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }

): _et.Array<X> => {
    return _ed.implement_me()
}

export const process_optional = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }

): _et.Optional_Value<X> => {
    return _ed.implement_me()
}

export const process_nothing = (
    $: t._T_Value,
    $p: null
): null => {
    return _ed.implement_me()
}