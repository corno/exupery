import * as pd from 'exupery-core-data'

import * as _out from "../generated/interface/schemas/interface/data_types/unresolved"

import {
    wrap_dictionary,
    wrap_list,
    Raw_Or_Normal_Dictionary,
    to_raw_array,
    wrap_state_group,
} from 'exupery-core-data/dist/shorthands/unresolved'

export namespace import_ {

    export const external = (
        key: string,
        tail: string[],
        args: Raw_Or_Normal_Dictionary<_out.Type<pd.Source_Location>>
    ): _out.Imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['external', key]),
            'tail': wrap_list(1, tail),
            'type arguments': wrap_dictionary(1, args),
        }
    }

    export const sibling = (
        key: string,
        tail: string[],
        args: Raw_Or_Normal_Dictionary<_out.Type<pd.Source_Location>>
    ): _out.Imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['sibling', key]),
            'tail': wrap_list(1, tail),
            'type arguments': wrap_dictionary(1, args),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: string[],
        args: Raw_Or_Normal_Dictionary<_out.Type<pd.Source_Location>>,
    ): _out.Imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['ancestor', {
                'number of steps': number_of_steps,
                'dependency': key,
            }]),
            'tail': wrap_list(1, tail),
            'type arguments': wrap_dictionary(1, args),
        }
    }
}

export namespace sub {
    export const dictionary = (): _out.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(1, ['dictionary', null])
    }

    export const list = (): _out.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(1, ['list', null])
    }
    export const state_group = (name: string): _out.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(1, ['state group', name])
    }
    export const group = (
        name: string,
    ): _out.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(1, ['group', name])
    }
    export const optional = (): _out.Type.SG.component.sub_selection.L<pd.Source_Location> => {
        return wrap_state_group(1, ['optional', null])
    }
}

export namespace t {

    export const boolean = (): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['boolean', null])
    }

    export const computed_value = (
        type: _out.Type<pd.Source_Location>
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['computed', type])
    }

    export const parameter_module = (
        parameter: string,
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['parameter', {
            'location': wrap_state_group(1, ['module', null]),
            'parameter': parameter,
        }])
    }
    export const parameter_type = (
        parameter: string,
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['parameter', {
            'location': wrap_state_group(1, ['type', null]),
            'parameter': parameter,
        }])
    }
    export const parameter_function = (
        parameter: string,
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['parameter', {
            'location': wrap_state_group(1, ['function', null]),
            'parameter': parameter,
        }])
    }
    export const component_sibling = (
        sibling: string,
        args: Raw_Or_Normal_Dictionary<_out.Type<pd.Source_Location>>,
        sub_selection: _out.Type.SG.component.sub_selection.L<pd.Source_Location>[],
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['component', {
            'location': wrap_state_group(1, ['sibling', sibling]),
            'type arguments': wrap_dictionary(1, args),
            'sub selection': wrap_list(1, sub_selection)
        }])
    }
    export const component_imported = (
        imp: string,
        type: string,
        args: Raw_Or_Normal_Dictionary<_out.Type<pd.Source_Location>>,
        sub_selection: _out.Type.SG.component.sub_selection.L<pd.Source_Location>[],
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['component', {
            'location': wrap_state_group(1, ['import', {
                'import': imp,
                'type': type,
            }]),
            'type arguments': wrap_dictionary(1, args),
            'sub selection': wrap_list(1, sub_selection)

        }])
    }

    export const dictionary = (
        type: _out.Type<pd.Source_Location>
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['dictionary', type])
    }

    export const key_value_pair = (
        type: _out.Type<pd.Source_Location>
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['key value pair', type])
    }
    export const function_ = (
        type_parameters: Raw_Or_Normal_Dictionary<null>,
        context: _out.Type<pd.Source_Location>,
        parameters: Raw_Or_Normal_Dictionary<_out.Type<pd.Source_Location>>,
        return_: _out.Type<pd.Source_Location>
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['function', {
            'type parameters': wrap_dictionary(1, type_parameters),
            'context': context,
            'parameters': wrap_dictionary(1, parameters),
            'return': return_,
        }])
    }
    export const group = (
        properties: Raw_Or_Normal_Dictionary<_out.Type<pd.Source_Location>>
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['group', wrap_dictionary(1, properties)])
    }
    export const array = (
        type: _out.Type<pd.Source_Location>
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['array', type])
    }
    export const null_ = (): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['null', null])
    }
    export const float = (): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['number', wrap_state_group(1, ['float', null])])
    }
    export const integer = ($?: 'signed' | 'unsigned'): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['number', wrap_state_group(1, ['integer', { 'signed': $ === 'signed' }])])
    }
    export const optional = (
        type: _out.Type<pd.Source_Location>
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['optional', type])
    }
    export const tagged_union = (
        states: Raw_Or_Normal_Dictionary<_out.Type<pd.Source_Location>>
    ): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['tagged union', wrap_dictionary(1, states)])
    }

    export const string = (): _out.Type<pd.Source_Location> => {
        return wrap_state_group(1, ['string', null])
    }

}
export namespace m {

    export const set = (
        entries: Raw_Or_Normal_Dictionary<_out.Module_Set.D<pd.Source_Location>>
    ): _out.Module_Set.D<pd.Source_Location> => {
        return wrap_state_group(1, ['set', wrap_dictionary(1, entries)])
    }

    export const module = (
        imports: Raw_Or_Normal_Dictionary<_out.Imports.D<pd.Source_Location>>,
        type_parameters: Raw_Or_Normal_Dictionary<null>,
        types: Raw_Or_Normal_Dictionary<_out.Module.types.D<pd.Source_Location>>,
    ): _out.Module_Set.D<pd.Source_Location> => {
        return wrap_state_group(1, ['module', {
            'imports': wrap_dictionary(1, imports),
            'type parameters': wrap_dictionary(1, type_parameters),
            'types': wrap_dictionary(1, types),
        }])
    }

}

export const type = (
    parameters: Raw_Or_Normal_Dictionary<null>,
    type: _out.Type<pd.Source_Location>
): _out.Module.types.D<pd.Source_Location> => {
    return {
        'parameters': wrap_dictionary(1, parameters),
        'type': type,
    }
}
