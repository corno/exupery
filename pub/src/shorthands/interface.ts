import * as _psh from 'pareto-core-shorthands/dist/unresolved_data'
import * as _pi from 'pareto-core-interface'

import * as d_out from "../interface/generated/pareto/schemas/interface/data_types/target"

export namespace import_ {

    export const external = (
        key: string,
        tail: _psh.Raw_Or_Normal_List<string>,
        args: _psh.Raw_Or_Normal_Dictionary<d_out.Type<_pi.Deprecated_Source_Location>>
    ): d_out.Imports.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': _psh.wrap_state_group(['external', key]),
            'tail': _psh.wrap_list(tail),
            'type arguments': _psh.wrap_dictionary(args),
        }
    }

    export const sibling = (
        key: string,
        tail: _psh.Raw_Or_Normal_List<string>,
        args: _psh.Raw_Or_Normal_Dictionary<d_out.Type<_pi.Deprecated_Source_Location>>
    ): d_out.Imports.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': _psh.wrap_state_group(['sibling', key]),
            'tail': _psh.wrap_list(tail),
            'type arguments': _psh.wrap_dictionary(args),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: _psh.Raw_Or_Normal_List<string>,
        args: _psh.Raw_Or_Normal_Dictionary<d_out.Type<_pi.Deprecated_Source_Location>>,
    ): d_out.Imports.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': _psh.wrap_state_group(['ancestor', {
                'number of steps': number_of_steps,
                'dependency': key,
            }]),
            'tail': _psh.wrap_list(tail),
            'type arguments': _psh.wrap_dictionary(args),
        }
    }
}

export namespace sub {
    export const dictionary = (): d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['dictionary', null])
    }

    export const list = (): d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['list', null])
    }
    export const state_group = (name: string): d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['state group', name])
    }
    export const group = (
        name: string,
    ): d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['group', name])
    }
    export const optional = (): d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['optional', null])
    }
}

export namespace t {

    export const boolean = (): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['boolean', null])
    }

    export const computed_value = (
        type: d_out.Type<_pi.Deprecated_Source_Location>
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['computed', type])
    }

    export const parameter_module = (
        parameter: string,
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['parameter', {
            'location': _psh.wrap_state_group(['module', null]),
            'parameter': parameter,
        }])
    }
    
    export const parameter_type = (
        parameter: string,
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['parameter', {
            'location': _psh.wrap_state_group(['type', null]),
            'parameter': parameter,
        }])
    }

    export const parameter_function = (
        parameter: string,
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['parameter', {
            'location': _psh.wrap_state_group(['function', null]),
            'parameter': parameter,
        }])
    }

    export const component_sibling = (
        sibling: string,
        args: _psh.Raw_Or_Normal_Dictionary<d_out.Type<_pi.Deprecated_Source_Location>>,
        sub_selection: _psh.Raw_Or_Normal_List<d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>>,
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['component', {
            'location': _psh.wrap_state_group(['sibling', sibling]),
            'type arguments': _psh.wrap_dictionary(args),
            'sub selection': _psh.wrap_list(sub_selection)
        }])
    }

    export const component_imported = (
        imp: string,
        type: string,
        args: _psh.Raw_Or_Normal_Dictionary<d_out.Type<_pi.Deprecated_Source_Location>>,
        sub_selection: _psh.Raw_Or_Normal_List<d_out.Type.SG.component.sub_selection.L<_pi.Deprecated_Source_Location>>,
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['component', {
            'location': _psh.wrap_state_group(['import', {
                'import': imp,
                'type': type,
            }]),
            'type arguments': _psh.wrap_dictionary(args),
            'sub selection': _psh.wrap_list(sub_selection)

        }])
    }

    export const dictionary = (
        type: d_out.Type<_pi.Deprecated_Source_Location>
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['dictionary', type])
    }

    export const function_ = (
        type_parameters: _psh.Raw_Or_Normal_Dictionary<null>,
        context: d_out.Type<_pi.Deprecated_Source_Location>,
        parameters: _psh.Raw_Or_Normal_Dictionary<d_out.Type<_pi.Deprecated_Source_Location>>,
        return_: d_out.Type<_pi.Deprecated_Source_Location>
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['function', {
            'type parameters': _psh.wrap_dictionary(type_parameters),
            'context': context,
            'parameters': _psh.wrap_dictionary(parameters),
            'return': return_,
        }])
    }

    export const group = (
        properties: _psh.Raw_Or_Normal_Dictionary<d_out.Type<_pi.Deprecated_Source_Location>>
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['group', _psh.wrap_dictionary(properties)])
    }
    
    export const array = (
        type: d_out.Type<_pi.Deprecated_Source_Location>
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['array', type])
    }

    export const null_ = (): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['null', null])
    }

    export const float = (): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['number', _psh.wrap_state_group(['float', null])])
    }

    export const integer = ($?: 'signed' | 'unsigned'): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['number', _psh.wrap_state_group(['integer', { 'signed': $ === 'signed' }])])
    }

    export const optional = (
        type: d_out.Type<_pi.Deprecated_Source_Location>
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['optional', type])
    }

    export const tagged_union = (
        states: _psh.Raw_Or_Normal_Dictionary<d_out.Type<_pi.Deprecated_Source_Location>>
    ): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['tagged union', _psh.wrap_dictionary(states)])
    }

    export const string = (): d_out.Type<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['string', null])
    }

}
export namespace m {

    export const set = (
        entries: _psh.Raw_Or_Normal_Dictionary<d_out.Module_Set.D<_pi.Deprecated_Source_Location>>
    ): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['set', _psh.wrap_dictionary(entries)])
    }

    export const module = (
        imports: _psh.Raw_Or_Normal_Dictionary<d_out.Imports.D<_pi.Deprecated_Source_Location>>,
        type_parameters: _psh.Raw_Or_Normal_Dictionary<null>,
        types: _psh.Raw_Or_Normal_Dictionary<d_out.Module.types.D<_pi.Deprecated_Source_Location>>,
    ): d_out.Module_Set.D<_pi.Deprecated_Source_Location> => {
        return _psh.wrap_state_group(['module', {
            'imports': _psh.wrap_dictionary(imports),
            'type parameters': _psh.wrap_dictionary(type_parameters),
            'types': _psh.wrap_dictionary(types),
        }])
    }

}

export const type = (
    parameters: _psh.Raw_Or_Normal_Dictionary<null>,
    type: d_out.Type<_pi.Deprecated_Source_Location>
): d_out.Module.types.D<_pi.Deprecated_Source_Location> => {
    return {
        'parameters': _psh.wrap_dictionary(parameters),
        'type': type,
    }
}
