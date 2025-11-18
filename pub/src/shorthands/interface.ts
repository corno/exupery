import * as _edata from 'exupery-core-data'

import * as _out from "../interface/generated/pareto/schemas/interface/data_types/target"

import {
    wrap_dictionary,
    wrap_list,
    Raw_Or_Normal_Dictionary,
    Raw_Or_Normal_List,
    wrap_state_group,
} from 'exupery-core-data/dist/shorthands/unresolved_data'

export namespace import_ {

    export const external = (
        key: string,
        tail: Raw_Or_Normal_List<string>,
        args: Raw_Or_Normal_Dictionary<_out.Type<_edata.Source_Location>>
    ): _out.Imports.D<_edata.Source_Location> => {
        return {
            'type': wrap_state_group(['external', key]),
            'tail': wrap_list(tail),
            'type arguments': wrap_dictionary(args),
        }
    }

    export const sibling = (
        key: string,
        tail: Raw_Or_Normal_List<string>,
        args: Raw_Or_Normal_Dictionary<_out.Type<_edata.Source_Location>>
    ): _out.Imports.D<_edata.Source_Location> => {
        return {
            'type': wrap_state_group(['sibling', key]),
            'tail': wrap_list(tail),
            'type arguments': wrap_dictionary(args),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: Raw_Or_Normal_List<string>,
        args: Raw_Or_Normal_Dictionary<_out.Type<_edata.Source_Location>>,
    ): _out.Imports.D<_edata.Source_Location> => {
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
    export const dictionary = (): _out.Type.SG.component.sub_selection.L<_edata.Source_Location> => {
        return wrap_state_group(['dictionary', null])
    }

    export const list = (): _out.Type.SG.component.sub_selection.L<_edata.Source_Location> => {
        return wrap_state_group(['list', null])
    }
    export const state_group = (name: string): _out.Type.SG.component.sub_selection.L<_edata.Source_Location> => {
        return wrap_state_group(['state group', name])
    }
    export const group = (
        name: string,
    ): _out.Type.SG.component.sub_selection.L<_edata.Source_Location> => {
        return wrap_state_group(['group', name])
    }
    export const optional = (): _out.Type.SG.component.sub_selection.L<_edata.Source_Location> => {
        return wrap_state_group(['optional', null])
    }
}

export namespace t {

    export const boolean = (): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['boolean', null])
    }

    export const computed_value = (
        type: _out.Type<_edata.Source_Location>
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['computed', type])
    }

    export const parameter_module = (
        parameter: string,
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['parameter', {
            'location': wrap_state_group(['module', null]),
            'parameter': parameter,
        }])
    }
    
    export const parameter_type = (
        parameter: string,
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['parameter', {
            'location': wrap_state_group(['type', null]),
            'parameter': parameter,
        }])
    }

    export const parameter_function = (
        parameter: string,
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['parameter', {
            'location': wrap_state_group(['function', null]),
            'parameter': parameter,
        }])
    }

    export const component_sibling = (
        sibling: string,
        args: Raw_Or_Normal_Dictionary<_out.Type<_edata.Source_Location>>,
        sub_selection: Raw_Or_Normal_List<_out.Type.SG.component.sub_selection.L<_edata.Source_Location>>,
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['component', {
            'location': wrap_state_group(['sibling', sibling]),
            'type arguments': wrap_dictionary(args),
            'sub selection': wrap_list(sub_selection)
        }])
    }

    export const component_imported = (
        imp: string,
        type: string,
        args: Raw_Or_Normal_Dictionary<_out.Type<_edata.Source_Location>>,
        sub_selection: Raw_Or_Normal_List<_out.Type.SG.component.sub_selection.L<_edata.Source_Location>>,
    ): _out.Type<_edata.Source_Location> => {
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
        type: _out.Type<_edata.Source_Location>
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['dictionary', type])
    }

    export const function_ = (
        type_parameters: Raw_Or_Normal_Dictionary<null>,
        context: _out.Type<_edata.Source_Location>,
        parameters: Raw_Or_Normal_Dictionary<_out.Type<_edata.Source_Location>>,
        return_: _out.Type<_edata.Source_Location>
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['function', {
            'type parameters': wrap_dictionary(type_parameters),
            'context': context,
            'parameters': wrap_dictionary(parameters),
            'return': return_,
        }])
    }

    export const group = (
        properties: Raw_Or_Normal_Dictionary<_out.Type<_edata.Source_Location>>
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['group', wrap_dictionary(properties)])
    }
    
    export const array = (
        type: _out.Type<_edata.Source_Location>
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['array', type])
    }

    export const null_ = (): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['null', null])
    }

    export const float = (): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['number', wrap_state_group(['float', null])])
    }

    export const integer = ($?: 'signed' | 'unsigned'): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['number', wrap_state_group(['integer', { 'signed': $ === 'signed' }])])
    }

    export const optional = (
        type: _out.Type<_edata.Source_Location>
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['optional', type])
    }

    export const tagged_union = (
        states: Raw_Or_Normal_Dictionary<_out.Type<_edata.Source_Location>>
    ): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['tagged union', wrap_dictionary(states)])
    }

    export const string = (): _out.Type<_edata.Source_Location> => {
        return wrap_state_group(['string', null])
    }

}
export namespace m {

    export const set = (
        entries: Raw_Or_Normal_Dictionary<_out.Module_Set.D<_edata.Source_Location>>
    ): _out.Module_Set.D<_edata.Source_Location> => {
        return wrap_state_group(['set', wrap_dictionary(entries)])
    }

    export const module = (
        imports: Raw_Or_Normal_Dictionary<_out.Imports.D<_edata.Source_Location>>,
        type_parameters: Raw_Or_Normal_Dictionary<null>,
        types: Raw_Or_Normal_Dictionary<_out.Module.types.D<_edata.Source_Location>>,
    ): _out.Module_Set.D<_edata.Source_Location> => {
        return wrap_state_group(['module', {
            'imports': wrap_dictionary(imports),
            'type parameters': wrap_dictionary(type_parameters),
            'types': wrap_dictionary(types),
        }])
    }

}

export const type = (
    parameters: Raw_Or_Normal_Dictionary<null>,
    type: _out.Type<_edata.Source_Location>
): _out.Module.types.D<_edata.Source_Location> => {
    return {
        'parameters': wrap_dictionary(parameters),
        'type': type,
    }
}
