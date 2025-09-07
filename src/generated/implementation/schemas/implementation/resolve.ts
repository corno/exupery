import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/resolve"
import * as _i_out from "../../../interface/schemas/implementation/data_types/resolved"
import * as _i_r_interface from "../interface/resolve"
import * as _i_signatures from "../../../interface/schemas/implementation/data_types/resolve"


export const r_Initialization: _i_signatures._T_Initialization = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.cc($['state group'], ($): _i_out._T_Initialization => {
        switch ($[0]) {
            case 'block': return _pa.ss($, ($) => ['block', _pa.block(() => {
                return _pa.block(() => {
                    const p_variables: _i_out._T_Initialization.SG.block.variables = _pa.cc($['variables'], ($) => r_Variables(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    const p_temp_ordered_variables: _i_out._T_Initialization.SG.block.temp_ordered_variables = _pa.cc($['temp ordered variables'], ($) => $['list'].map(($) => _pa.cc($['element'], ($) => _pa.block(() => {
                        const p_name: _i_out._T_Initialization.SG.block.temp_ordered_variables.L.name = _pa.cc($['name'], ($) => $)
                        const p_type: _i_out._T_Initialization.SG.block.temp_ordered_variables.L._type = _pa.cc($['type'], ($) => $.map(($) => _pa.block(() => {
                            return _i_r_interface.r_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            )
                        })))
                        const p_initialization: _i_out._T_Initialization.SG.block.temp_ordered_variables.L.initialization = _pa.cc($['initialization'], ($) => r_Initialization(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                        return ({
                            'initialization': p_initialization,
                            'name': p_name,
                            'type': p_type,
                        })
                    }))))
                    const p_initialization: _i_out._T_Initialization.SG.block.initialization = _pa.cc($['initialization'], ($) => r_Initialization(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    return ({
                        'initialization': p_initialization,
                        'temp ordered variables': p_temp_ordered_variables,
                        'variables': p_variables,
                    })
                })
            })])
            case 'change context': return _pa.ss($, ($) => ['change context', _pa.block(() => {
                return _pa.block(() => {
                    const p_new_context: _i_out._T_Initialization.SG.change_context.new_context = _pa.cc($['new context'], ($) => r_Selection(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    const p_initialization: _i_out._T_Initialization.SG.change_context.initialization = _pa.cc($['initialization'], ($) => r_Initialization(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    return ({
                        'initialization': p_initialization,
                        'new context': p_new_context,
                    })
                })
            })])
            case 'literal': return _pa.ss($, ($) => ['literal', _pa.block(() => {
                return _pa.block(() => {
                    const p_value: _i_out._T_Initialization.SG.literal.value = _pa.cc($['value'], ($) => r_Literal(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    return ({
                        'value': p_value,
                    })
                })
            })])
            case 'selection': return _pa.ss($, ($) => ['selection', _pa.block(() => {
                return r_Selection(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': null,
                            'values': null,
                        }),
                    }
                )
            })])
            case 'transformation': return _pa.ss($, ($) => ['transformation', _pa.block(() => {
                return _pa.block(() => {
                    const p_source: _i_out._T_Initialization.SG.transformation.source = _pa.cc($['source'], ($) => r_Selection(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    const p_type: _i_out._T_Initialization.SG.transformation._type = _pa.cc($['type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type => {
                        switch ($[0]) {
                            case 'array': return _pa.ss($, ($) => ['array', _pa.block(() => {
                                return _pa.cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.array => {
                                    switch ($[0]) {
                                        case 'map': return _pa.ss($, ($) => ['map', _pa.block(() => {
                                            return r_Initialization(
                                                $,
                                                {
                                                    'location 2 string': l2s,
                                                    'parameters': ({
                                                        'lookups': null,
                                                        'values': null,
                                                    }),
                                                }
                                            )
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                })
                            })])
                            case 'boolean': return _pa.ss($, ($) => ['boolean', _pa.block(() => {
                                return _pa.cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean => {
                                    switch ($[0]) {
                                        case 'not': return _pa.ss($, ($) => ['not', _pa.block(() => {
                                            return null
                                        })])
                                        case 'transform': return _pa.ss($, ($) => ['transform', _pa.block(() => {
                                            return _pa.block(() => {
                                                const p_if_false: _i_out._T_Initialization.SG.transformation._type.SG._boolean.SG.transform.if_false = _pa.cc($['if false'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'lookups': null,
                                                            'values': null,
                                                        }),
                                                    }
                                                ))
                                                const p_if_true: _i_out._T_Initialization.SG.transformation._type.SG._boolean.SG.transform.if_true = _pa.cc($['if true'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'lookups': null,
                                                            'values': null,
                                                        }),
                                                    }
                                                ))
                                                return ({
                                                    'if false': p_if_false,
                                                    'if true': p_if_true,
                                                })
                                            })
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                })
                            })])
                            case 'dictionary': return _pa.ss($, ($) => ['dictionary', _pa.block(() => {
                                return _pa.cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.dictionary => {
                                    switch ($[0]) {
                                        case 'map': return _pa.ss($, ($) => ['map', _pa.block(() => {
                                            return r_Initialization(
                                                $,
                                                {
                                                    'location 2 string': l2s,
                                                    'parameters': ({
                                                        'lookups': null,
                                                        'values': null,
                                                    }),
                                                }
                                            )
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                })
                            })])
                            case 'function': return _pa.ss($, ($) => ['function', _pa.block(() => {
                                return _pa.cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG._function => {
                                    switch ($[0]) {
                                        case 'call': return _pa.ss($, ($) => ['call', _pa.block(() => {
                                            return _pa.block(() => {
                                                const p_context: _i_out._T_Initialization.SG.transformation._type.SG._function.SG.call.context = _pa.cc($['context'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'lookups': null,
                                                            'values': null,
                                                        }),
                                                    }
                                                ))
                                                const p_arguments: _i_out._T_Initialization.SG.transformation._type.SG._function.SG.call._arguments = _pa.cc($['arguments'], ($) => $.map(($) => _pa.block(() => {
                                                    return _pa.block(() => {
                                                        return _i_generic.resolve_dictionary(
                                                            $,
                                                            {
                                                                'location 2 string': l2s,
                                                                'map': ($, $p) => _pa.block(() => {
                                                                    return _pa.cc($['value'], ($) => r_Initialization(
                                                                        $,
                                                                        {
                                                                            'location 2 string': l2s,
                                                                            'parameters': ({
                                                                                'lookups': null,
                                                                                'values': null,
                                                                            }),
                                                                        }
                                                                    ))
                                                                }),
                                                            }
                                                        )
                                                    })
                                                })))
                                                return ({
                                                    'arguments': p_arguments,
                                                    'context': p_context,
                                                })
                                            })
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                })
                            })])
                            case 'optional': return _pa.ss($, ($) => ['optional', _pa.block(() => {
                                return _pa.cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.optional => {
                                    switch ($[0]) {
                                        case 'map': return _pa.ss($, ($) => ['map', _pa.block(() => {
                                            return r_Initialization(
                                                $,
                                                {
                                                    'location 2 string': l2s,
                                                    'parameters': ({
                                                        'lookups': null,
                                                        'values': null,
                                                    }),
                                                }
                                            )
                                        })])
                                        case 'transform': return _pa.ss($, ($) => ['transform', _pa.block(() => {
                                            return _pa.block(() => {
                                                const p_if_not_set: _i_out._T_Initialization.SG.transformation._type.SG.optional.SG.transform.if_not_set = _pa.cc($['if not set'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'lookups': null,
                                                            'values': null,
                                                        }),
                                                    }
                                                ))
                                                const p_if_set: _i_out._T_Initialization.SG.transformation._type.SG.optional.SG.transform.if_set = _pa.cc($['if set'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'lookups': null,
                                                            'values': null,
                                                        }),
                                                    }
                                                ))
                                                const p_temp_resulting_node: _i_out._T_Initialization.SG.transformation._type.SG.optional.SG.transform.temp_resulting_node = _pa.cc($['temp resulting node'], ($) => $.map(($) => _pa.block(() => {
                                                    return _i_r_interface.r_Type(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'lookups': null,
                                                                'values': null,
                                                            }),
                                                        }
                                                    )
                                                })))
                                                return ({
                                                    'if not set': p_if_not_set,
                                                    'if set': p_if_set,
                                                    'temp resulting node': p_temp_resulting_node,
                                                })
                                            })
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                })
                            })])
                            case 'tagged union': return _pa.ss($, ($) => ['tagged union', _pa.block(() => {
                                return _pa.cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union => {
                                    switch ($[0]) {
                                        case 'switch': return _pa.ss($, ($) => ['switch', _pa.block(() => {
                                            return _pa.block(() => {
                                                const p_temp_resulting_node: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node = _pa.cc($['temp resulting node'], ($) => $.map(($) => _pa.block(() => {
                                                    return _i_r_interface.r_Type(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'lookups': null,
                                                                'values': null,
                                                            }),
                                                        }
                                                    )
                                                })))
                                                const p_type: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type = _pa.cc($['type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type => {
                                                    switch ($[0]) {
                                                        case 'full': return _pa.ss($, ($) => ['full', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_cases: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.full.cases = _pa.cc($['cases'], ($) => _pa.block(() => {
                                                                    return _i_generic.resolve_dictionary(
                                                                        $,
                                                                        {
                                                                            'location 2 string': l2s,
                                                                            'map': ($, $p) => _pa.block(() => {
                                                                                return _pa.cc($['value'], ($) => r_Initialization(
                                                                                    $,
                                                                                    {
                                                                                        'location 2 string': l2s,
                                                                                        'parameters': ({
                                                                                            'lookups': null,
                                                                                            'values': null,
                                                                                        }),
                                                                                    }
                                                                                ))
                                                                            }),
                                                                        }
                                                                    )
                                                                }))
                                                                return ({
                                                                    'cases': p_cases,
                                                                })
                                                            })
                                                        })])
                                                        case 'partial': return _pa.ss($, ($) => ['partial', _pa.block(() => {
                                                            return _pa.block(() => {
                                                                const p_cases: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.partial.cases = _pa.cc($['cases'], ($) => _pa.block(() => {
                                                                    return _i_generic.resolve_dictionary(
                                                                        $,
                                                                        {
                                                                            'location 2 string': l2s,
                                                                            'map': ($, $p) => _pa.block(() => {
                                                                                return _pa.cc($['value'], ($) => r_Initialization(
                                                                                    $,
                                                                                    {
                                                                                        'location 2 string': l2s,
                                                                                        'parameters': ({
                                                                                            'lookups': null,
                                                                                            'values': null,
                                                                                        }),
                                                                                    }
                                                                                ))
                                                                            }),
                                                                        }
                                                                    )
                                                                }))
                                                                const p_default: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.partial._default = _pa.cc($['default'], ($) => r_Initialization(
                                                                    $,
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'parameters': ({
                                                                            'lookups': null,
                                                                            'values': null,
                                                                        }),
                                                                    }
                                                                ))
                                                                return ({
                                                                    'cases': p_cases,
                                                                    'default': p_default,
                                                                })
                                                            })
                                                        })])
                                                        default: return _pa.au($[0])
                                                    }
                                                }))
                                                return ({
                                                    'temp resulting node': p_temp_resulting_node,
                                                    'type': p_type,
                                                })
                                            })
                                        })])
                                        default: return _pa.au($[0])
                                    }
                                })
                            })])
                            default: return _pa.au($[0])
                        }
                    }))
                    return ({
                        'source': p_source,
                        'type': p_type,
                    })
                })
            })])
            default: return _pa.au($[0])
        }
    })
})
export const r_Literal: _i_signatures._T_Literal = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.cc($['state group'], ($): _i_out._T_Literal => {
        switch ($[0]) {
            case 'array': return _pa.ss($, ($) => ['array', _pa.block(() => {
                return $['list'].map(($) => _pa.cc($['element'], ($) => r_Initialization(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': null,
                            'values': null,
                        }),
                    }
                )))
            })])
            case 'boolean': return _pa.ss($, ($) => ['boolean', _pa.block(() => {
                return _pa.cc($['state group'], ($): _i_out._T_Literal.SG._boolean => {
                    switch ($[0]) {
                        case 'false': return _pa.ss($, ($) => ['false', _pa.block(() => {
                            return null
                        })])
                        case 'true': return _pa.ss($, ($) => ['true', _pa.block(() => {
                            return null
                        })])
                        default: return _pa.au($[0])
                    }
                })
            })])
            case 'dictionary': return _pa.ss($, ($) => ['dictionary', _pa.block(() => {
                return _pa.block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'location 2 string': l2s,
                            'map': ($, $p) => _pa.block(() => {
                                return _pa.cc($['value'], ($) => r_Initialization(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': null,
                                            'values': null,
                                        }),
                                    }
                                ))
                            }),
                        }
                    )
                })
            })])
            case 'function': return _pa.ss($, ($) => ['function', _pa.block(() => {
                return _pa.block(() => {
                    const p_initialization: _i_out._T_Literal.SG._function.initialization = _pa.cc($['initialization'], ($) => r_Initialization(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    const p_temp_has_parameters: _i_out._T_Literal.SG._function.temp_has_parameters = _pa.cc($['temp has parameters'], ($) => $)
                    const p_temp_resulting_node: _i_out._T_Literal.SG._function.temp_resulting_node = _pa.cc($['temp resulting node'], ($) => $.map(($) => _pa.block(() => {
                        return _i_r_interface.r_Type(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        )
                    })))
                    return ({
                        'initialization': p_initialization,
                        'temp has parameters': p_temp_has_parameters,
                        'temp resulting node': p_temp_resulting_node,
                    })
                })
            })])
            case 'group': return _pa.ss($, ($) => ['group', _pa.block(() => {
                return _pa.block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'location 2 string': l2s,
                            'map': ($, $p) => _pa.block(() => {
                                return _pa.cc($['value'], ($) => r_Initialization(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': null,
                                            'values': null,
                                        }),
                                    }
                                ))
                            }),
                        }
                    )
                })
            })])
            case 'null': return _pa.ss($, ($) => ['null', _pa.block(() => {
                return null
            })])
            case 'number': return _pa.ss($, ($) => ['number', _pa.block(() => {
                return _pa.cc($['state group'], ($): _i_out._T_Literal.SG._number => {
                    switch ($[0]) {
                        case 'floting point': return _pa.ss($, ($) => ['floting point', _pa.block(() => {
                            return $
                        })])
                        case 'integer': return _pa.ss($, ($) => ['integer', _pa.block(() => {
                            return $
                        })])
                        case 'signed integer': return _pa.ss($, ($) => ['signed integer', _pa.block(() => {
                            return $
                        })])
                        default: return _pa.au($[0])
                    }
                })
            })])
            case 'optional': return _pa.ss($, ($) => ['optional', _pa.block(() => {
                return _pa.cc($['state group'], ($): _i_out._T_Literal.SG.optional => {
                    switch ($[0]) {
                        case 'not set': return _pa.ss($, ($) => ['not set', _pa.block(() => {
                            return null
                        })])
                        case 'set': return _pa.ss($, ($) => ['set', _pa.block(() => {
                            return r_Initialization(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            )
                        })])
                        default: return _pa.au($[0])
                    }
                })
            })])
            case 'string': return _pa.ss($, ($) => ['string', _pa.block(() => {
                return _pa.block(() => {
                    const p_delimiter: _i_out._T_Literal.SG._string.delimiter = _pa.cc($['delimiter'], ($) => _pa.cc($['state group'], ($): _i_out._T_Literal.SG._string.delimiter => {
                        switch ($[0]) {
                            case 'backtick': return _pa.ss($, ($) => ['backtick', _pa.block(() => {
                                return null
                            })])
                            case 'quote': return _pa.ss($, ($) => ['quote', _pa.block(() => {
                                return null
                            })])
                            default: return _pa.au($[0])
                        }
                    }))
                    const p_value: _i_out._T_Literal.SG._string.value = _pa.cc($['value'], ($) => $)
                    return ({
                        'delimiter': p_delimiter,
                        'value': p_value,
                    })
                })
            })])
            case 'tagged union': return _pa.ss($, ($) => ['tagged union', _pa.block(() => {
                return _pa.block(() => {
                    const p_case: _i_out._T_Literal.SG.tagged_union._case = _pa.cc($['case'], ($) => $)
                    const p_value: _i_out._T_Literal.SG.tagged_union.value = _pa.cc($['value'], ($) => r_Initialization(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    return ({
                        'case': p_case,
                        'value': p_value,
                    })
                })
            })])
            default: return _pa.au($[0])
        }
    })
})
export const r_Module: _i_signatures._T_Module = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_type_imports: _i_out._T_Module.type_imports = _pa.cc($['type imports'], ($) => _i_r_interface.r_Imports(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        const p_variable_imports: _i_out._T_Module.variable_imports = _pa.cc($['variable imports'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_tail: _i_out._T_Module.variable_imports.D.tail = _pa.cc($['tail'], ($) => $['list'].map(($) => _pa.cc($['element'], ($) => $)))
                            const p_type: _i_out._T_Module.variable_imports.D._type = _pa.cc($['type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Module.variable_imports.D._type => {
                                switch ($[0]) {
                                    case 'ancestor': return _pa.ss($, ($) => ['ancestor', _pa.block(() => {
                                        return _pa.block(() => {
                                            const p_dependency: _i_out._T_Module.variable_imports.D._type.SG.ancestor.dependency = _pa.cc($['dependency'], ($) => $)
                                            const p_number_of_steps: _i_out._T_Module.variable_imports.D._type.SG.ancestor.number_of_steps = _pa.cc($['number of steps'], ($) => $)
                                            return ({
                                                'dependency': p_dependency,
                                                'number of steps': p_number_of_steps,
                                            })
                                        })
                                    })])
                                    case 'external': return _pa.ss($, ($) => ['external', _pa.block(() => {
                                        return $
                                    })])
                                    case 'sibling': return _pa.ss($, ($) => ['sibling', _pa.block(() => {
                                        return $
                                    })])
                                    default: return _pa.au($[0])
                                }
                            }))
                            return ({
                                'tail': p_tail,
                                'type': p_type,
                            })
                        }))
                    }),
                }
            )
        }))
        const p_variables: _i_out._T_Module.variables = _pa.cc($['variables'], ($) => r_Variables(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        return ({
            'type imports': p_type_imports,
            'variable imports': p_variable_imports,
            'variables': p_variables,
        })
    })
})
export const r_Module_Set: _i_signatures._T_Module_Set = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => _pa.cc($['state group'], ($): _i_out._T_Module_Set.D => {
                        switch ($[0]) {
                            case 'module': return _pa.ss($, ($) => ['module', _pa.block(() => {
                                return r_Module(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': null,
                                            'values': null,
                                        }),
                                    }
                                )
                            })])
                            case 'set': return _pa.ss($, ($) => ['set', _pa.block(() => {
                                return r_Module_Set(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': null,
                                            'values': null,
                                        }),
                                    }
                                )
                            })])
                            default: return _pa.au($[0])
                        }
                    }))
                }),
            }
        )
    })
})
export const r_Selection: _i_signatures._T_Selection = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_start: _i_out._T_Selection.start = _pa.cc($['start'], ($) => _pa.cc($['state group'], ($): _i_out._T_Selection.start => {
            switch ($[0]) {
                case 'abort': return _pa.ss($, ($) => ['abort', _pa.block(() => {
                    return null
                })])
                case 'argument': return _pa.ss($, ($) => ['argument', _pa.block(() => {
                    return $
                })])
                case 'call': return _pa.ss($, ($) => ['call', _pa.block(() => {
                    return _pa.block(() => {
                        const p_source: _i_out._T_Selection.start.SG.call.source = _pa.cc($['source'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                        const p_context: _i_out._T_Selection.start.SG.call.context = _pa.cc($['context'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                        const p_arguments: _i_out._T_Selection.start.SG.call._arguments = _pa.cc($['arguments'], ($) => $.map(($) => _pa.block(() => {
                            return _pa.block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'map': ($, $p) => _pa.block(() => {
                                            return _pa.cc($['value'], ($) => r_Initialization(
                                                $,
                                                {
                                                    'location 2 string': l2s,
                                                    'parameters': ({
                                                        'lookups': null,
                                                        'values': null,
                                                    }),
                                                }
                                            ))
                                        }),
                                    }
                                )
                            })
                        })))
                        return ({
                            'arguments': p_arguments,
                            'context': p_context,
                            'source': p_source,
                        })
                    })
                })])
                case 'context': return _pa.ss($, ($) => ['context', _pa.block(() => {
                    return null
                })])
                case 'implement me': return _pa.ss($, ($) => ['implement me', _pa.block(() => {
                    return null
                })])
                case 'imported variable': return _pa.ss($, ($) => ['imported variable', _pa.block(() => {
                    return _pa.block(() => {
                        const p_import: _i_out._T_Selection.start.SG.imported_variable._import = _pa.cc($['import'], ($) => $)
                        const p_variable: _i_out._T_Selection.start.SG.imported_variable.variable = _pa.cc($['variable'], ($) => $)
                        return ({
                            'import': p_import,
                            'variable': p_variable,
                        })
                    })
                })])
                case 'parameter': return _pa.ss($, ($) => ['parameter', _pa.block(() => {
                    return $
                })])
                case 'transform optional value': return _pa.ss($, ($) => ['transform optional value', _pa.block(() => {
                    return _pa.block(() => {
                        const p_source: _i_out._T_Selection.start.SG.transform_optional_value.source = _pa.cc($['source'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                        const p_if_not_set: _i_out._T_Selection.start.SG.transform_optional_value.if_not_set = _pa.cc($['if not set'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                        const p_if_set: _i_out._T_Selection.start.SG.transform_optional_value.if_set = _pa.cc($['if set'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                        return ({
                            'if not set': p_if_not_set,
                            'if set': p_if_set,
                            'source': p_source,
                        })
                    })
                })])
                case 'variable': return _pa.ss($, ($) => ['variable', _pa.block(() => {
                    return $
                })])
                default: return _pa.au($[0])
            }
        }))
        const p_tail: _i_out._T_Selection.tail = _pa.cc($['tail'], ($) => $['list'].map(($) => _pa.cc($['element'], ($) => $)))
        return ({
            'start': p_start,
            'tail': p_tail,
        })
    })
})
export const r_Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => null)
                }),
            }
        )
    })
})
export const r_Variables: _i_signatures._T_Variables = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => _pa.block(() => {
                        const p_type: _i_out._T_Variables.D._type = _pa.cc($['type'], ($) => $.map(($) => _pa.block(() => {
                            return _i_r_interface.r_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            )
                        })))
                        const p_initialization: _i_out._T_Variables.D.initialization = _pa.cc($['initialization'], ($) => r_Initialization(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                        return ({
                            'initialization': p_initialization,
                            'type': p_type,
                        })
                    }))
                }),
            }
        )
    })
})
