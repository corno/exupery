import * as pd from 'exupery-core-data'

import * as unresolved from "../generated/interface/schemas/implementation/unresolved"

import * as unresolved_interface from "../generated/interface/schemas/interface/unresolved"

import {
    Raw_Or_Normal_Dictionary,
    wrap_dictionary,
    wrap_list,
    wrap_state_group,
} from 'exupery-core-data/dist/shorthands/unresolved'

export namespace vi {

    export const external = (
        key: string,
        tail: string[],
    ): unresolved.Module.variable_imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(['external', key]),
            'tail': wrap_list(tail),
        }
    }

    export const sibling = (
        key: string,
        tail: string[],
    ): unresolved.Module.variable_imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(['sibling', key]),
            'tail': wrap_list(tail),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: string[],
    ): unresolved.Module.variable_imports.D<pd.Source_Location> => {
        return {
            'type': wrap_state_group(['ancestor', {
                'number of steps': number_of_steps,
                'dependency': key,
            }]),
            'tail': wrap_list(tail),
        }
    }
}

export namespace s {

    export const optional_transform = (
        source: unresolved.Selection<pd.Source_Location>,
        if_set: unresolved.Selection<pd.Source_Location>,
        if_not_set: unresolved.Selection<pd.Source_Location>,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(['transform optional value', {
                'source': source,
                'if set': if_set,
                'if not set': if_not_set,
            }]),
            'tail': wrap_list(tail),
        }
    }

    export const call = (
        source: unresolved.Selection<pd.Source_Location>,
        context: unresolved.Selection<pd.Source_Location>,
        arguments_: Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments.O.D<pd.Source_Location>>,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Selection<pd.Source_Location> => {
        const args: unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments<pd.Source_Location> = arguments_ === undefined ? pd.not_set() : pd.set(wrap_dictionary(arguments_))
        return {
            'start': wrap_state_group(['call', {
                'source': source,
                'context': context,
                'arguments': args,
            }]),
            'tail': wrap_list(tail),
        }
    }

    export const abort = (
    ): unresolved.Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(['abort', null]),
            'tail': wrap_list([]),
        }
    }

    export const implement_me = (
    ): unresolved.Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(['implement me', null]),
            'tail': wrap_list([]),
        }
    }

    export const from_context = (
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(['context', null]),
            'tail': wrap_list(tail),
        }
    }
    export const from_variable = (
        name: string,
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(['variable', name]),
            'tail': wrap_list(tail),
        }
    }
    export const from_parameter = (
        name: string,
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(['parameter', name]),
            'tail': wrap_list(tail),
        }
    }
    export const from_variable_import = (
        imp: string,
        variable: string,
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(['imported variable', {
                'import': imp,
                'variable': variable,
            }]),
            'tail': wrap_list(tail),
        }
    }
    export const from_argument = (
        name: string,
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<pd.Source_Location> => {
        return {
            'start': wrap_state_group(['argument', name]),
            'tail': wrap_list(tail),
        }
    }
}

export namespace i {

    export const argument_selection = (
        argument: string,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['selection', {
            'start': wrap_state_group(['argument', argument]),
            'tail': wrap_list(tail),
        }])
    }

    export const array_literal = (
        elements: unresolved.Initialization<pd.Source_Location>[]
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group(['array', wrap_list(elements)]) }])
    }

    export const array_map = (
        source: unresolved.Selection<pd.Source_Location>,
        expression: unresolved.Initialization<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['transformation', {
            'source': source,
            'type': wrap_state_group(['array', wrap_state_group(['map', expression])])
        }])
    }

    export const call = (
        source: unresolved.Selection<pd.Source_Location>,
        context: unresolved.Initialization<pd.Source_Location>,
        arguments_?: Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments.O.D<pd.Source_Location>>,
    ): unresolved.Initialization<pd.Source_Location> => {
        const args: unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments<pd.Source_Location> = arguments_ === undefined ? pd.not_set() : pd.set(wrap_dictionary(arguments_))
        return wrap_state_group(['transformation', {
            'source': source,
            'type': wrap_state_group(['function', wrap_state_group(['call', {
                'context': context,
                'arguments': args,
            }])])
        }])
    }

    export const case_ = (
        name: string,
        value: unresolved.Initialization<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', {
            'value': wrap_state_group(['tagged union', {
                'case': name,
                'value': value,
            }])
        }])
    }

    export const change_context = (
        new_context: unresolved.Selection<pd.Source_Location>,
        expression: unresolved.Initialization<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['change context', {
            'new context': new_context,
            'initialization': expression
        }])
    }

    export const block = (
        ordered_variables: unresolved.Initialization.SG.block.temp_ordered_variables.L<pd.Source_Location>[],
        variables: Raw_Or_Normal_Dictionary<unresolved.Variables.D<pd.Source_Location>>,
        expression: unresolved.Initialization<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['block', {
            'temp ordered variables': wrap_list(ordered_variables),
            'variables': wrap_dictionary(variables),
            'initialization': expression
        }])
    }

    export const dictionary_literal = (
        entries: Raw_Or_Normal_Dictionary<unresolved.Initialization<pd.Source_Location>>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group(['dictionary', wrap_dictionary(entries)]) }])
    }

    export const dictionary_map = (
        source: unresolved.Selection<pd.Source_Location>,
        expression: unresolved.Initialization<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['transformation', {
            'source': source,
            'type': wrap_state_group(['dictionary', wrap_state_group(['map', expression])])
        }])
    }

    export const false_ = (): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group(['boolean', wrap_state_group(['false', null])]) }])
    }

    export const floting_point = (
        value: number
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group<unresolved.Literal.SG<pd.Source_Location>>(['number', wrap_state_group<unresolved.Literal.SG._number.SG<pd.Source_Location>>(['floting point', value])]) }])
    }

    export const function_ = (
        has_parameters: boolean,
        expression: unresolved.Initialization<pd.Source_Location>,
        resulting_type?: null | unresolved_interface.Type<pd.Source_Location>,
    ): unresolved.Initialization<pd.Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<pd.Source_Location> = (resulting_type === null || resulting_type === undefined) ? pd.not_set() : pd.set(resulting_type)

        return wrap_state_group(['literal', {
            'value': wrap_state_group(['function', {
                'temp has parameters': has_parameters,
                'initialization': expression,
                'temp resulting node': rt,
            }])
        }])
    }

    export const group = (
        properties: Raw_Or_Normal_Dictionary<unresolved.Initialization<pd.Source_Location>>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group(['group', wrap_dictionary(properties)]) }])
    }

    export const implement_me = (): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['selection', {
            'start': wrap_state_group(['implement me', null]),
            'tail': wrap_list([])
        }])
    }

    export const integer = (
        value: number
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group<unresolved.Literal.SG<pd.Source_Location>>(['number', wrap_state_group<unresolved.Literal.SG._number.SG<pd.Source_Location>>(['integer', value])]) }])
    }

    export const not_set = (): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group(['optional', wrap_state_group(['not set', null])]) }])
    }

    export const null_ = (): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group(['null', null]) }])
    }

    export const optional_map = (
        source: unresolved.Selection<pd.Source_Location>,
        expression: unresolved.Initialization<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['transformation', {
            'source': source,
            'type': wrap_state_group(['optional', wrap_state_group(['map', expression])])
        }])
    }

    export const optional_transform = (
        source: unresolved.Selection<pd.Source_Location>,
        if_set: unresolved.Initialization<pd.Source_Location>,
        if_not_set: unresolved.Initialization<pd.Source_Location>,
        resulting_type?: null | unresolved_interface.Type<pd.Source_Location>,
    ): unresolved.Initialization<pd.Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<pd.Source_Location> = (resulting_type === null || resulting_type === undefined) ? pd.not_set() : pd.set(resulting_type)

        return wrap_state_group(['transformation', {
            'source': source,
            'type': wrap_state_group(['optional', wrap_state_group(['transform', {
                'if set': if_set,
                'if not set': if_not_set,
                'temp resulting node': rt,

            }])])
        }])
    }

    export const select = (
        selection: unresolved.Selection<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['selection', selection])
    }

    export const select_from_context = (
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['selection', {
            'start': wrap_state_group(['context', null]),
            'tail': wrap_list(tail),
        }])
    }

    export const select_from_variable = (
        variable: string,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['selection', {
            'start': wrap_state_group(['variable', variable]),
            'tail': wrap_list(tail),
        }])
    }

    export const select_from_parameter = (
        variable: string,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['selection', {
            'start': wrap_state_group(['parameter', variable]),
            'tail': wrap_list(tail),
        }])
    }

    export const set = (
        value: unresolved.Initialization<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group(['optional', wrap_state_group(['set', value])]) }])
    }

    export const string = (
        value: string,
        delimiter: 'quote' | 'backtick'
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', {
            'value': wrap_state_group(['string', {
                'delimiter': delimiter === 'quote' ? wrap_state_group(['quote', null]) : wrap_state_group(['backtick', null]),
                'value': value,
            }])
        }])
    }

    export const switch_ = (
        source: unresolved.Selection<pd.Source_Location>,
        cases: Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.full.cases.D<pd.Source_Location>>,
        resulting_type?: null | unresolved_interface.Type<pd.Source_Location>,
    ): unresolved.Initialization<pd.Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<pd.Source_Location> = (resulting_type === null || resulting_type === undefined) ? pd.not_set() : pd.set(resulting_type)
        return wrap_state_group(['transformation', {
            'source': source,
            'type': wrap_state_group(['tagged union', wrap_state_group<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG<pd.Source_Location>>(['switch', {
                'temp resulting node': rt,
                'type': wrap_state_group(['full', {
                    'cases': wrap_dictionary(cases),
                }])
            }])])
        }])
    }
    export const switch_partial = (
        source: unresolved.Selection<pd.Source_Location>,
        cases: Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.partial.cases.D<pd.Source_Location>>,
        default_: unresolved.Initialization<pd.Source_Location>,
        resulting_type?: null | unresolved_interface.Type<pd.Source_Location>,
    ): unresolved.Initialization<pd.Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<pd.Source_Location> = (resulting_type === null || resulting_type === undefined) ? pd.not_set() : pd.set(resulting_type)
        return wrap_state_group(['transformation', {
            'source': source,
            'type': wrap_state_group(['tagged union', wrap_state_group<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG<pd.Source_Location>>(['switch', {
                'temp resulting node': rt,
                'type': wrap_state_group(['partial', {
                    'cases': wrap_dictionary(cases),
                    'default': default_
                }])
            }])])
        }])
    }

    export const tagged_union = (
        state: string,
        value: unresolved.Initialization<pd.Source_Location>
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', {
            'value': wrap_state_group(['tagged union', {
                'case': state,
                'value': value,
            }])
        }])
    }

    export const true_ = (): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['literal', { 'value': wrap_state_group(['boolean', wrap_state_group(['true', null])]) }])
    }

    export const variable_selection = (
        variable: string,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<pd.Source_Location> => {
        return wrap_state_group(['selection', {
            'start': wrap_state_group(['variable', variable]),
            'tail': wrap_list(tail),
        }])
    }
}

export namespace m {

    export const set = (
        entries: Raw_Or_Normal_Dictionary<unresolved.Module_Set.D<pd.Source_Location>>
    ): unresolved.Module_Set.D<pd.Source_Location> => {
        return wrap_state_group(['set', wrap_dictionary(entries)])
    }

    export const module = (
        type_imports: Raw_Or_Normal_Dictionary<unresolved_interface.Imports.D<pd.Source_Location>>,
        variable_imports: Raw_Or_Normal_Dictionary<unresolved.Module.variable_imports.D<pd.Source_Location>>,
        variables: Raw_Or_Normal_Dictionary<unresolved.Variables.D<pd.Source_Location>>,
    ): unresolved.Module_Set.D<pd.Source_Location> => {
        return wrap_state_group(['module', {
            'type imports': wrap_dictionary(type_imports),
            'variable imports': wrap_dictionary(variable_imports),
            'variables': wrap_dictionary(variables),
        }])
    }

}

export const variable = (
    type: null | unresolved_interface.Type<pd.Source_Location>,
    expression: unresolved.Initialization<pd.Source_Location>,
): unresolved.Variables.D<pd.Source_Location> => {
    return {
        'type': type === null ? pd.not_set() : pd.set(type),
        'initialization': expression,
    }
}
export const temp_ordered_variable = (
    name: string,
    type: null | unresolved_interface.Type<pd.Source_Location>,
    expression: unresolved.Initialization<pd.Source_Location>,
): unresolved.Initialization.SG.block.temp_ordered_variables.L<pd.Source_Location> => {
    return {
        'name': name,
        'type': type === null ? pd.not_set() : pd.set(type),
        'initialization': expression,
    }
}