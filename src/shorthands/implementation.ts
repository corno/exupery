import * as _edata from 'exupery-core-data'

import * as unresolved from "../generated/interface/schemas/implementation/data_types/unresolved"

import * as unresolved_interface from "../generated/interface/schemas/interface/data_types/unresolved"

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
    ): unresolved.Module.variable_imports.D<_edata.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['external', key]),
            'tail': wrap_list(1, tail),
        }
    }

    export const sibling = (
        key: string,
        tail: string[],
    ): unresolved.Module.variable_imports.D<_edata.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['sibling', key]),
            'tail': wrap_list(1, tail),
        }
    }
    export const ancestor = (
        number_of_steps: number,
        key: string,
        tail: string[],
    ): unresolved.Module.variable_imports.D<_edata.Source_Location> => {
        return {
            'type': wrap_state_group(1, ['ancestor', {
                'number of steps': number_of_steps,
                'dependency': key,
            }]),
            'tail': wrap_list(1, tail),
        }
    }
}

export namespace s {

    export const optional_transform = (
        source: unresolved.Selection<_edata.Source_Location>,
        if_set: unresolved.Selection<_edata.Source_Location>,
        if_not_set: unresolved.Selection<_edata.Source_Location>,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Selection<_edata.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['transform optional value', {
                'source': source,
                'if set': if_set,
                'if not set': if_not_set,
            }]),
            'tail': wrap_list(1, tail),
        }
    }

    export const call = (
        source: unresolved.Selection<_edata.Source_Location>,
        context: unresolved.Selection<_edata.Source_Location>,
        arguments_: Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments.O.D<_edata.Source_Location>>,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Selection<_edata.Source_Location> => {
        const args: unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments<_edata.Source_Location> = arguments_ === undefined ? _edata.not_set() : _edata.set(wrap_dictionary(1, arguments_))
        return {
            'start': wrap_state_group(1, ['call', {
                'source': source,
                'context': context,
                'arguments': args,
            }]),
            'tail': wrap_list(1, tail),
        }
    }

    export const abort = (
    ): unresolved.Selection<_edata.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['abort', null]),
            'tail': wrap_list(1, []),
        }
    }

    export const implement_me = (
    ): unresolved.Selection<_edata.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['implement me', null]),
            'tail': wrap_list(1, []),
        }
    }

    export const from_context = (
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<_edata.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['context', null]),
            'tail': wrap_list(1, tail),
        }
    }
    export const from_variable = (
        name: string,
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<_edata.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['variable', name]),
            'tail': wrap_list(1, tail),
        }
    }
    export const from_parameter = (
        name: string,
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<_edata.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['parameter', name]),
            'tail': wrap_list(1, tail),
        }
    }
    export const from_variable_import = (
        imp: string,
        variable: string,
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<_edata.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['imported variable', {
                'import': imp,
                'variable': variable,
            }]),
            'tail': wrap_list(1, tail),
        }
    }
    export const from_argument = (
        name: string,
        tail: unresolved.Selection.tail.L<string>[]

    ): unresolved.Selection<_edata.Source_Location> => {
        return {
            'start': wrap_state_group(1, ['argument', name]),
            'tail': wrap_list(1, tail),
        }
    }
}

export namespace i {

    export const argument_selection = (
        argument: string,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'start': wrap_state_group(1, ['argument', argument]),
            'tail': wrap_list(1, tail),
        }])
    }

    export const array_literal = (
        elements: unresolved.Initialization<_edata.Source_Location>[]
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group(1, ['array', wrap_list(1, elements)]) }])
    }

    export const array_map = (
        source: unresolved.Selection<_edata.Source_Location>,
        expression: unresolved.Initialization<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['transformation', {
            'source': source,
            'type': wrap_state_group(1, ['array', wrap_state_group(1, ['map', expression])])
        }])
    }

    export const call = (
        source: unresolved.Selection<_edata.Source_Location>,
        context: unresolved.Initialization<_edata.Source_Location>,
        arguments_?: Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments.O.D<_edata.Source_Location>>,
    ): unresolved.Initialization<_edata.Source_Location> => {
        const args: unresolved.Initialization.SG.transformation._type.SG._function.SG.call._arguments<_edata.Source_Location> = arguments_ === undefined ? _edata.not_set() : _edata.set(wrap_dictionary(1, arguments_))
        return wrap_state_group(1, ['transformation', {
            'source': source,
            'type': wrap_state_group(1, ['function', wrap_state_group(1, ['call', {
                'context': context,
                'arguments': args,
            }])])
        }])
    }

    export const case_ = (
        name: string,
        value: unresolved.Initialization<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', {
            'value': wrap_state_group(1, ['tagged union', {
                'case': name,
                'value': value,
            }])
        }])
    }

    export const change_context = (
        new_context: unresolved.Selection<_edata.Source_Location>,
        expression: unresolved.Initialization<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['change context', {
            'new context': new_context,
            'initialization': expression
        }])
    }

    export const block = (
        ordered_variables: unresolved.Initialization.SG.block.temp_ordered_variables.L<_edata.Source_Location>[],
        variables: Raw_Or_Normal_Dictionary<unresolved.Variables.D<_edata.Source_Location>>,
        expression: unresolved.Initialization<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['block', {
            'temp ordered variables': wrap_list(1, ordered_variables),
            'variables': wrap_dictionary(1, variables),
            'initialization': expression
        }])
    }

    export const dictionary_literal = (
        entries: Raw_Or_Normal_Dictionary<unresolved.Initialization<_edata.Source_Location>>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group(1, ['dictionary', wrap_dictionary(1, entries)]) }])
    }

    export const dictionary_map = (
        source: unresolved.Selection<_edata.Source_Location>,
        expression: unresolved.Initialization<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['transformation', {
            'source': source,
            'type': wrap_state_group(1, ['dictionary', wrap_state_group(1, ['map', expression])])
        }])
    }

    export const false_ = (): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group(1, ['boolean', wrap_state_group(1, ['false', null])]) }])
    }

    export const floting_point = (
        value: number
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group<unresolved.Literal.SG<_edata.Source_Location>>(1, ['number', wrap_state_group<unresolved.Literal.SG._number.SG<_edata.Source_Location>>(1, ['floting point', value])]) }])
    }

    export const function_ = (
        has_parameters: boolean,
        expression: unresolved.Initialization<_edata.Source_Location>,
        resulting_type?: null | unresolved_interface.Type<_edata.Source_Location>,
    ): unresolved.Initialization<_edata.Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<_edata.Source_Location> = (resulting_type === null || resulting_type === undefined) ? _edata.not_set() : _edata.set(resulting_type)

        return wrap_state_group(1, ['literal', {
            'value': wrap_state_group(1, ['function', {
                'temp has parameters': has_parameters,
                'initialization': expression,
                'temp resulting node': rt,
            }])
        }])
    }

    export const group = (
        properties: Raw_Or_Normal_Dictionary<unresolved.Initialization<_edata.Source_Location>>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group(1, ['group', wrap_dictionary(1, properties)]) }])
    }

    export const implement_me = (): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'start': wrap_state_group(1, ['implement me', null]),
            'tail': wrap_list(1, [])
        }])
    }

    export const integer = (
        value: number
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group<unresolved.Literal.SG<_edata.Source_Location>>(1, ['number', wrap_state_group<unresolved.Literal.SG._number.SG<_edata.Source_Location>>(1, ['integer', value])]) }])
    }

    export const not_set = (): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group(1, ['optional', wrap_state_group(1, ['not set', null])]) }])
    }

    export const null_ = (): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group(1, ['null', null]) }])
    }

    export const optional_map = (
        source: unresolved.Selection<_edata.Source_Location>,
        expression: unresolved.Initialization<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['transformation', {
            'source': source,
            'type': wrap_state_group(1, ['optional', wrap_state_group(1, ['map', expression])])
        }])
    }

    export const optional_transform = (
        source: unresolved.Selection<_edata.Source_Location>,
        if_set: unresolved.Initialization<_edata.Source_Location>,
        if_not_set: unresolved.Initialization<_edata.Source_Location>,
        resulting_type?: null | unresolved_interface.Type<_edata.Source_Location>,
    ): unresolved.Initialization<_edata.Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<_edata.Source_Location> = (resulting_type === null || resulting_type === undefined) ? _edata.not_set() : _edata.set(resulting_type)

        return wrap_state_group(1, ['transformation', {
            'source': source,
            'type': wrap_state_group(1, ['optional', wrap_state_group(1, ['transform', {
                'if set': if_set,
                'if not set': if_not_set,
                'temp resulting node': rt,

            }])])
        }])
    }

    export const select = (
        selection: unresolved.Selection<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['selection', selection])
    }

    export const select_from_context = (
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'start': wrap_state_group(1, ['context', null]),
            'tail': wrap_list(1, tail),
        }])
    }

    export const select_from_variable = (
        variable: string,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'start': wrap_state_group(1, ['variable', variable]),
            'tail': wrap_list(1, tail),
        }])
    }

    export const select_from_parameter = (
        variable: string,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'start': wrap_state_group(1, ['parameter', variable]),
            'tail': wrap_list(1, tail),
        }])
    }

    export const set = (
        value: unresolved.Initialization<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group(1, ['optional', wrap_state_group(1, ['set', value])]) }])
    }

    export const string = (
        value: string,
        delimiter: 'quote' | 'backtick'
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', {
            'value': wrap_state_group(1, ['string', {
                'delimiter': delimiter === 'quote' ? wrap_state_group(1, ['quote', null]) : wrap_state_group(1, ['backtick', null]),
                'value': value,
            }])
        }])
    }

    export const switch_ = (
        source: unresolved.Selection<_edata.Source_Location>,
        cases: Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.full.cases.D<_edata.Source_Location>>,
        resulting_type?: null | unresolved_interface.Type<_edata.Source_Location>,
    ): unresolved.Initialization<_edata.Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<_edata.Source_Location> = (resulting_type === null || resulting_type === undefined) ? _edata.not_set() : _edata.set(resulting_type)
        return wrap_state_group(1, ['transformation', {
            'source': source,
            'type': wrap_state_group(1, ['tagged union', wrap_state_group<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG<_edata.Source_Location>>(1, ['switch', {
                'temp resulting node': rt,
                'type': wrap_state_group(1, ['full', {
                    'cases': wrap_dictionary(1, cases),
                }])
            }])])
        }])
    }
    export const switch_partial = (
        source: unresolved.Selection<_edata.Source_Location>,
        cases: Raw_Or_Normal_Dictionary<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.partial.cases.D<_edata.Source_Location>>,
        default_: unresolved.Initialization<_edata.Source_Location>,
        resulting_type?: null | unresolved_interface.Type<_edata.Source_Location>,
    ): unresolved.Initialization<_edata.Source_Location> => {
        const rt: unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node<_edata.Source_Location> = (resulting_type === null || resulting_type === undefined) ? _edata.not_set() : _edata.set(resulting_type)
        return wrap_state_group(1, ['transformation', {
            'source': source,
            'type': wrap_state_group(1, ['tagged union', wrap_state_group<unresolved.Initialization.SG.transformation._type.SG.tagged_union.SG<_edata.Source_Location>>(1, ['switch', {
                'temp resulting node': rt,
                'type': wrap_state_group(1, ['partial', {
                    'cases': wrap_dictionary(1, cases),
                    'default': default_
                }])
            }])])
        }])
    }

    export const tagged_union = (
        state: string,
        value: unresolved.Initialization<_edata.Source_Location>
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', {
            'value': wrap_state_group(1, ['tagged union', {
                'case': state,
                'value': value,
            }])
        }])
    }

    export const true_ = (): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['literal', { 'value': wrap_state_group(1, ['boolean', wrap_state_group(1, ['true', null])]) }])
    }

    export const variable_selection = (
        variable: string,
        tail: unresolved.Selection.tail.L<string>[]
    ): unresolved.Initialization<_edata.Source_Location> => {
        return wrap_state_group(1, ['selection', {
            'start': wrap_state_group(1, ['variable', variable]),
            'tail': wrap_list(1, tail),
        }])
    }
}

export namespace m {

    export const set = (
        entries: Raw_Or_Normal_Dictionary<unresolved.Module_Set.D<_edata.Source_Location>>
    ): unresolved.Module_Set.D<_edata.Source_Location> => {
        return wrap_state_group(1, ['set', wrap_dictionary(1, entries)])
    }

    export const module = (
        type_imports: Raw_Or_Normal_Dictionary<unresolved_interface.Imports.D<_edata.Source_Location>>,
        variable_imports: Raw_Or_Normal_Dictionary<unresolved.Module.variable_imports.D<_edata.Source_Location>>,
        variables: Raw_Or_Normal_Dictionary<unresolved.Variables.D<_edata.Source_Location>>,
    ): unresolved.Module_Set.D<_edata.Source_Location> => {
        return wrap_state_group(1, ['module', {
            'type imports': wrap_dictionary(1, type_imports),
            'variable imports': wrap_dictionary(1, variable_imports),
            'variables': wrap_dictionary(1, variables),
        }])
    }

}

export const variable = (
    type: null | unresolved_interface.Type<_edata.Source_Location>,
    expression: unresolved.Initialization<_edata.Source_Location>,
): unresolved.Variables.D<_edata.Source_Location> => {
    return {
        'type': type === null ? _edata.not_set() : _edata.set(type),
        'initialization': expression,
    }
}
export const temp_ordered_variable = (
    name: string,
    type: null | unresolved_interface.Type<_edata.Source_Location>,
    expression: unresolved.Initialization<_edata.Source_Location>,
): unresolved.Initialization.SG.block.temp_ordered_variables.L<_edata.Source_Location> => {
    return {
        'name': name,
        'type': type === null ? _edata.not_set() : _edata.set(type),
        'initialization': expression,
    }
}