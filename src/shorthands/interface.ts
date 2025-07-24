import * as pd from 'exupery-core-data'

import * as unresolved from "../generated/interface/schemas/exupery_interface/poormans_parser"

import {
    wrap_dictionary,
    wrap_list,
    Raw_Or_Normal_Dictionary,
    to_raw_array,
    wrap_state_group,
} from "exupery-core-data/dist/shorthands"

export namespace import_ {

    export const external = (
        key: string,
        tail: string[],
        args: Raw_Or_Normal_Dictionary<unresolved.Type<pd.Source_Location>>
    ): unresolved.Imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(['external', key]),
            'tail': wrap_list(tail),
            'type arguments': wrap_dictionary(args),
        }
    }

    export const sibling = (
        key: string,
        tail: string[],
        args: Raw_Or_Normal_Dictionary<unresolved.Type<pd.Source_Location>>
    ): unresolved.Imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(['sibling', key]),
            'tail': wrap_list(tail),
            'type arguments': wrap_dictionary(args),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: string[],
        args: Raw_Or_Normal_Dictionary<unresolved.Type<pd.Source_Location>>,
    ): unresolved.Imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(['ancestor', {
                'number of steps': number_of_steps,
                'dependency': key,
            }]),
            'tail': wrap_list(tail),
            'type arguments': wrap_dictionary(args),
        }
    }
}

export namespace sub {
    export const dictionary = (): unresolved.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(['dictionary', null])
    }

    export const list = (): unresolved.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(['list', null])
    }
    export const state_group = (name: string): unresolved.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(['state group', name])
    }
    export const group = (
        name: string,
    ): unresolved.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(['group', name])
    }
    export const optional = (): unresolved.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(['optional', null])
    }
}

export namespace t {

    export const boolean = (): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['boolean', null])
    }

    export const computed_value = (
        type: unresolved.Type<pd.Source_Location>
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['computed', type])
    }

    export const module_parameter = (
        parameter: string,
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['parameter', {
            'location': wrap_state_group(['module', null]),
            'parameter': parameter,
        }])
    }
    export const type_parameter = (
        parameter: string,
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['parameter', {
            'location': wrap_state_group(['type', null]),
            'parameter': parameter,
        }])
    }
    export const component_sibling = (
        sibling: string,
        args: Raw_Or_Normal_Dictionary<unresolved.Type<pd.Source_Location>>,
        sub_selection: unresolved.Type.SG.component.sub_selection.L<pd.Source_Location>[],
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['component', {
            'location': wrap_state_group(['sibling', sibling]),
            'type arguments': wrap_dictionary(args),
            'sub selection': wrap_list(sub_selection)
        }])
    }
    export const component_imported = (
        imp: string,
        type: string,
        args: Raw_Or_Normal_Dictionary<unresolved.Type<pd.Source_Location>>,
        sub_selection: unresolved.Type.SG.component.sub_selection.L<pd.Source_Location>[],
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['component', {
            'location': wrap_state_group(['import', {
                'import': imp,
                'type': type,
            }]),
            'type arguments': wrap_dictionary(args),
            'sub selection': wrap_list(sub_selection)

        }])
    }

    export const dictionary = (
        type: unresolved.Type<pd.Source_Location>
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['dictionary', type])
    }

    export const key_value_pair = (
        type: unresolved.Type<pd.Source_Location>
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['key value pair', type])
    }
    export const function_ = (
        type_parameters: Raw_Or_Normal_Dictionary<null>,
        context: unresolved.Type<pd.Source_Location>,
        parameters: Raw_Or_Normal_Dictionary<unresolved.Type<pd.Source_Location>>,
        return_: unresolved.Type<pd.Source_Location>
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['function', {
            'type parameters': wrap_dictionary(type_parameters),
            'context': context,
            'parameters': wrap_dictionary(parameters),
            'return': return_,
        }])
    }
    export const group = (
        properties: Raw_Or_Normal_Dictionary<unresolved.Type<pd.Source_Location>>
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['group', wrap_dictionary(properties)])
    }
    export const array = (
        type: unresolved.Type<pd.Source_Location>
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['array', type])
    }
    export const null_ = (): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['null', null])
    }
    export const float = (): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['number', wrap_state_group(['float', null])])
    }
    export const integer = ($?: 'signed' | 'unsigned'): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['number', wrap_state_group(['integer', { 'signed': $ === 'signed' }])])
    }
    export const optional = (
        type: unresolved.Type<pd.Source_Location>
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['optional', type])
    }
    export const tagged_union = (
        states: Raw_Or_Normal_Dictionary<unresolved.Type<pd.Source_Location>>
    ): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['tagged union', wrap_dictionary(states)])
    }

    export const string = (): unresolved.Type<pd.Source_Location> => {
        return wrap_state_group(['string', null])
    }

}
export namespace m {

    export const set = (
        entries: Raw_Or_Normal_Dictionary<unresolved.Module_Set.D<pd.Source_Location>>
    ): unresolved.Module_Set.D<pd.Source_Location> => {
        return wrap_state_group(['set', wrap_dictionary(entries)])
    }

    export const module = (
        imports: Raw_Or_Normal_Dictionary<unresolved.Imports.D<pd.Source_Location>>,
        type_parameters: Raw_Or_Normal_Dictionary<null>,
        types: Raw_Or_Normal_Dictionary<unresolved.Module.types.D<pd.Source_Location>>,
    ): unresolved.Module_Set.D<pd.Source_Location> => {
        return wrap_state_group(['module', {
            'imports': wrap_dictionary(imports),
            'type parameters': wrap_dictionary(type_parameters),
            'types': wrap_dictionary(types),
        }])
    }

}

export const type = (
    parameters: Raw_Or_Normal_Dictionary<null>,
    type: unresolved.Type<pd.Source_Location>
): unresolved.Module.types.D<pd.Source_Location> => {
    return {
        'parameters': wrap_dictionary(parameters),
        'type': type,
    }
}
