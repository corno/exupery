import * as _p from 'pareto-core-shorthands/dist/unresolved_data'
import * as _pi from 'pareto-core-interface'

import * as unresolved from "../interface/generated/pareto/schemas/implementation/data_types/target"

import * as unresolved_interface from "../interface/generated/pareto/schemas/interface/data_types/target"
export namespace vi {

    export const external = (
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): unresolved.Module.variable_imports.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': _p.wrap_state_group(['external', key]),
            'tail': _p.wrap_list(tail),
        }
    }

    export const sibling = (
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): unresolved.Module.variable_imports.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': _p.wrap_state_group(['sibling', key]),
            'tail': _p.wrap_list(tail),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: _p.Raw_Or_Normal_List<string>,
    ): unresolved.Module.variable_imports.D<_pi.Deprecated_Source_Location> => {
        return {
            'type': _p.wrap_state_group(['ancestor', {
                'number of steps': number_of_steps,
                'dependency': key,
            }]),
            'tail': _p.wrap_list(tail),
        }
    }
}

export namespace s {

    export const optional_transform = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        if_set: unresolved.Selection<_pi.Deprecated_Source_Location>,
        if_not_set: unresolved.Selection<_pi.Deprecated_Source_Location>,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>
    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['transform optional value', {
                'source': source,
                'if set': if_set,
                'if not set': if_not_set,
            }]),
            'tail': _p.wrap_list(tail),
        }
    }

    export const call = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        context: unresolved.Selection<_pi.Deprecated_Source_Location>,
        arguments_: _p.Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments.O.D<_pi.Deprecated_Source_Location>>,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>
    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        const args: unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments<_pi.Deprecated_Source_Location> = arguments_ === undefined ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(arguments_))
        return {
            'start': _p.wrap_state_group(['call', {
                'source': source,
                'context': context,
                'arguments': args,
            }]),
            'tail': _p.wrap_list(tail),
        }
    }

    export const abort = (
    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['abort', null]),
            'tail': _p.wrap_list([]),
        }
    }

    export const implement_me = (
    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['implement me', null]),
            'tail': _p.wrap_list([]),
        }
    }

    export const from_context = (
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>

    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['context', null]),
            'tail': _p.wrap_list(tail),
        }
    }
    export const from_variable = (
        name: string,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>

    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['variable', name]),
            'tail': _p.wrap_list(tail),
        }
    }
    export const from_parameter = (
        name: string,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>

    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['parameter', name]),
            'tail': _p.wrap_list(tail),
        }
    }
    export const from_variable_import = (
        imp: string,
        variable: string,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>

    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['imported variable', {
                'import': imp,
                'variable': variable,
            }]),
            'tail': _p.wrap_list(tail),
        }
    }
    export const from_argument = (
        name: string,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>

    ): unresolved.Selection<_pi.Deprecated_Source_Location> => {
        return {
            'start': _p.wrap_state_group(['argument', name]),
            'tail': _p.wrap_list(tail),
        }
    }
}

export namespace i {

    export const argument_selection = (
        argument: string,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'start': _p.wrap_state_group(['argument', argument]),
            'tail': _p.wrap_list(tail),
        }])
    }

    export const list_literal = (
        elements: _p.Raw_Or_Normal_List<unresolved.Initialization<_pi.Deprecated_Source_Location>>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group(['array', _p.wrap_list(elements)]) }])
    }

    export const array_map = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        expression: unresolved.Initialization<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['transformation', {
            'source': source,
            'type': _p.wrap_state_group(['array', _p.wrap_state_group(['map', expression])])
        }])
    }

    export const call = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        context: unresolved.Initialization<_pi.Deprecated_Source_Location>,
        arguments_?: _p.Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments.O.D<_pi.Deprecated_Source_Location>>,
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        const args: unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments<_pi.Deprecated_Source_Location> = arguments_ === undefined ? _p.optional.not_set() : _p.optional.set(_p.wrap_dictionary(arguments_))
        return _p.wrap_state_group(['transformation', {
            'source': source,
            'type': _p.wrap_state_group(['function', _p.wrap_state_group(['call', {
                'context': context,
                'arguments': args,
            }])])
        }])
    }

    export const case_ = (
        name: string,
        value: unresolved.Initialization<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', {
            'value': _p.wrap_state_group(['tagged union', {
                'case': name,
                'value': value,
            }])
        }])
    }

    export const change_context = (
        new_context: unresolved.Selection<_pi.Deprecated_Source_Location>,
        expression: unresolved.Initialization<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['change context', {
            'new context': new_context,
            'initialization': expression
        }])
    }

    export const block = (
        ordered_variables: _p.Raw_Or_Normal_List<unresolved.Initialization.SG.block.temp_ordered_variables.L<_pi.Deprecated_Source_Location>>,
        variables: _p.Raw_Or_Normal_Dictionary<unresolved.Variables.D<_pi.Deprecated_Source_Location>>,
        expression: unresolved.Initialization<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['block', {
            'temp ordered variables': _p.wrap_list(ordered_variables),
            'variables': _p.wrap_dictionary(variables),
            'initialization': expression
        }])
    }

    export const dictionary_literal = (
        entries: _p.Raw_Or_Normal_Dictionary<unresolved.Initialization<_pi.Deprecated_Source_Location>>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group(['dictionary', _p.wrap_dictionary(entries)]) }])
    }

    export const dictionary_map = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        expression: unresolved.Initialization<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['transformation', {
            'source': source,
            'type': _p.wrap_state_group(['dictionary', _p.wrap_state_group(['map', expression])])
        }])
    }

    export const false_ = (): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group(['boolean', _p.wrap_state_group(['false', null])]) }])
    }

    export const floting_point = (
        value: number
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group<unresolved.Literal.SG<_pi.Deprecated_Source_Location>>(['number', _p.wrap_state_group<unresolved.Literal.SG._number.SG<_pi.Deprecated_Source_Location>>(['floting point', value])]) }])
    }

    export const function_ = (
        has_parameters: boolean,
        expression: unresolved.Initialization<_pi.Deprecated_Source_Location>,
        resulting_type?: null | unresolved_interface.Type<_pi.Deprecated_Source_Location>,
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<_pi.Deprecated_Source_Location> = (resulting_type === null || resulting_type === undefined) ? _p.optional.not_set() : _p.optional.set(resulting_type)

        return _p.wrap_state_group(['literal', {
            'value': _p.wrap_state_group(['function', {
                'temp has parameters': has_parameters,
                'initialization': expression,
                'temp resulting node': rt,
            }])
        }])
    }

    export const group = (
        properties: _p.Raw_Or_Normal_Dictionary<unresolved.Initialization<_pi.Deprecated_Source_Location>>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group(['group', _p.wrap_dictionary(properties)]) }])
    }

    export const implement_me = (): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'start': _p.wrap_state_group(['implement me', null]),
            'tail': _p.wrap_list([])
        }])
    }

    export const integer = (
        value: number
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group<unresolved.Literal.SG<_pi.Deprecated_Source_Location>>(['number', _p.wrap_state_group<unresolved.Literal.SG._number.SG<_pi.Deprecated_Source_Location>>(['integer', value])]) }])
    }

    export const not_set = (): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group(['optional', _p.wrap_state_group(['not set', null])]) }])
    }

    export const null_ = (): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group(['null', null]) }])
    }

    export const optional_map = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        expression: unresolved.Initialization<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['transformation', {
            'source': source,
            'type': _p.wrap_state_group(['optional', _p.wrap_state_group(['map', expression])])
        }])
    }

    export const optional_transform = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        if_set: unresolved.Initialization<_pi.Deprecated_Source_Location>,
        if_not_set: unresolved.Initialization<_pi.Deprecated_Source_Location>,
        resulting_type?: null | unresolved_interface.Type<_pi.Deprecated_Source_Location>,
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<_pi.Deprecated_Source_Location> = (resulting_type === null || resulting_type === undefined) ? _p.optional.not_set() : _p.optional.set(resulting_type)

        return _p.wrap_state_group(['transformation', {
            'source': source,
            'type': _p.wrap_state_group(['optional', _p.wrap_state_group(['transform', {
                'if set': if_set,
                'if not set': if_not_set,
                'temp resulting node': rt,

            }])])
        }])
    }

    export const select = (
        selection: unresolved.Selection<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', selection])
    }

    export const select_from_context = (
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'start': _p.wrap_state_group(['context', null]),
            'tail': _p.wrap_list(tail),
        }])
    }

    export const select_from_variable = (
        variable: string,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'start': _p.wrap_state_group(['variable', variable]),
            'tail': _p.wrap_list(tail),
        }])
    }

    export const select_from_parameter = (
        variable: string,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'start': _p.wrap_state_group(['parameter', variable]),
            'tail': _p.wrap_list(tail),
        }])
    }

    export const set = (
        value: unresolved.Initialization<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group(['optional', _p.wrap_state_group(['set', value])]) }])
    }

    export const string = (
        value: string,
        delimiter: 'quote' | 'backtick'
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', {
            'value': _p.wrap_state_group(['string', {
                'delimiter': delimiter === 'quote' ? _p.wrap_state_group(['quote', null]) : _p.wrap_state_group(['backtick', null]),
                'value': value,
            }])
        }])
    }

    export const switch_ = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        cases: _p.Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.full.cases.D<_pi.Deprecated_Source_Location>>,
        resulting_type?: null | unresolved_interface.Type<_pi.Deprecated_Source_Location>,
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<_pi.Deprecated_Source_Location> = (resulting_type === null || resulting_type === undefined) ? _p.optional.not_set() : _p.optional.set(resulting_type)
        return _p.wrap_state_group(['transformation', {
            'source': source,
            'type': _p.wrap_state_group(['tagged union', _p.wrap_state_group<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG<_pi.Deprecated_Source_Location>>(['switch', {
                'temp resulting node': rt,
                'type': _p.wrap_state_group(['full', {
                    'cases': _p.wrap_dictionary(cases),
                }])
            }])])
        }])
    }
    export const switch_partial = (
        source: unresolved.Selection<_pi.Deprecated_Source_Location>,
        cases: _p.Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.partial.cases.D<_pi.Deprecated_Source_Location>>,
        default_: unresolved.Initialization<_pi.Deprecated_Source_Location>,
        resulting_type?: null | unresolved_interface.Type<_pi.Deprecated_Source_Location>,
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<_pi.Deprecated_Source_Location> = (resulting_type === null || resulting_type === undefined) ? _p.optional.not_set() : _p.optional.set(resulting_type)
        return _p.wrap_state_group(['transformation', {
            'source': source,
            'type': _p.wrap_state_group(['tagged union', _p.wrap_state_group<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG<_pi.Deprecated_Source_Location>>(['switch', {
                'temp resulting node': rt,
                'type': _p.wrap_state_group(['partial', {
                    'cases': _p.wrap_dictionary(cases),
                    'default': default_
                }])
            }])])
        }])
    }

    export const tagged_union = (
        state: string,
        value: unresolved.Initialization<_pi.Deprecated_Source_Location>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', {
            'value': _p.wrap_state_group(['tagged union', {
                'case': state,
                'value': value,
            }])
        }])
    }

    export const true_ = (): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['literal', { 'value': _p.wrap_state_group(['boolean', _p.wrap_state_group(['true', null])]) }])
    }

    export const variable_selection = (
        variable: string,
        tail: _p.Raw_Or_Normal_List<unresolved.Selection.tail.L<_pi.Deprecated_Source_Location>>
    ): unresolved.Initialization<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['selection', {
            'start': _p.wrap_state_group(['variable', variable]),
            'tail': _p.wrap_list(tail),
        }])
    }
}

export namespace m {

    export const set = (
        entries: _p.Raw_Or_Normal_Dictionary<unresolved.Module_Set.D<_pi.Deprecated_Source_Location>>
    ): unresolved.Module_Set.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['set', _p.wrap_dictionary(entries)])
    }

    export const module = (
        type_imports: _p.Raw_Or_Normal_Dictionary<unresolved_interface.Imports.D<_pi.Deprecated_Source_Location>>,
        variable_imports: _p.Raw_Or_Normal_Dictionary<unresolved.Module.variable_imports.D<_pi.Deprecated_Source_Location>>,
        variables: _p.Raw_Or_Normal_Dictionary<unresolved.Variables.D<_pi.Deprecated_Source_Location>>,
    ): unresolved.Module_Set.D<_pi.Deprecated_Source_Location> => {
        return _p.wrap_state_group(['module', {
            'type imports': _p.wrap_dictionary(type_imports),
            'variable imports': _p.wrap_dictionary(variable_imports),
            'variables': _p.wrap_dictionary(variables),
        }])
    }

}

export const variable = (
    type: null | unresolved_interface.Type<_pi.Deprecated_Source_Location>,
    expression: unresolved.Initialization<_pi.Deprecated_Source_Location>,
): unresolved.Variables.D<_pi.Deprecated_Source_Location> => {
    return {
        'type': type === null ? _p.optional.not_set() : _p.optional.set(type),
        'initialization': expression,
    }
}
export const temp_ordered_variable = (
    name: string,
    type: null | unresolved_interface.Type<_pi.Deprecated_Source_Location>,
    expression: unresolved.Initialization<_pi.Deprecated_Source_Location>,
): unresolved.Initialization.SG.block.temp_ordered_variables.L<_pi.Deprecated_Source_Location> => {
    return {
        'name': name,
        'type': type === null ? _p.optional.not_set() : _p.optional.set(type),
        'initialization': expression,
    }
}