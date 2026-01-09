import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "pareto-core-internals/dist/algorithm_types/refiner/resolve"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/implementation/data_types/source"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/implementation/data_types/resolve"
import * as _i_r_interface from "../interface/resolve"


export const r_Module_Set: _i_signatures._T_Module_Set = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Module_Set.D => {
                        switch ($[0]) {
                            case 'module': return _p.ss($, ($) => ['module', _p.deprecated_block(() => {
                                return r_Module(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'values': null,
                                            'lookups': null,
                                        }),
                                    }
                                )
                            })])
                            case 'set': return _p.ss($, ($) => ['set', _p.deprecated_block(() => {
                                return r_Module_Set(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'values': null,
                                            'lookups': null,
                                        }),
                                    }
                                )
                            })])
                            default: return _p.au($[0])
                        }
                    }))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Module: _i_signatures._T_Module = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_type: _i_out._T_Module._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Module._type => {
            switch ($[0]) {
                case 'serializer': return _p.ss($, ($) => ['serializer', _p.deprecated_block(() => {
                    return null
                })])
                case 'deserializer': return _p.ss($, ($) => ['deserializer', _p.deprecated_block(() => {
                    return null
                })])
                case 'transformer': return _p.ss($, ($) => ['transformer', _p.deprecated_block(() => {
                    return null
                })])
                case 'refiner': return _p.ss($, ($) => ['refiner', _p.deprecated_block(() => {
                    return null
                })])
                default: return _p.au($[0])
            }
        }))
        const p_type_imports: _i_out._T_Module.type_imports = _p.deprecated_cc($['type imports'], ($) => _i_r_interface.r_Imports(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': null,
                }),
            }
        ))
        const p_variable_imports: _i_out._T_Module.variable_imports = _p.deprecated_cc($['variable imports'], ($) => _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                            const p_tail: _i_out._T_Module.variable_imports.D.tail = _p.deprecated_cc($['tail'], ($) => $['list'].map(($) => _p.deprecated_cc($['element'], ($) => $)))
                            const p_type: _i_out._T_Module.variable_imports.D._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Module.variable_imports.D._type => {
                                switch ($[0]) {
                                    case 'ancestor': return _p.ss($, ($) => ['ancestor', _p.deprecated_block(() => {
                                        return _p.deprecated_block(() => {
                                            const p_dependency: _i_out._T_Module.variable_imports.D._type.SG.ancestor.dependency = _p.deprecated_cc($['dependency'], ($) => $)
                                            const p_number_of_steps: _i_out._T_Module.variable_imports.D._type.SG.ancestor.number_of_steps = _p.deprecated_cc($['number of steps'], ($) => $)
                                            return ({
                                                'dependency': p_dependency,
                                                'number of steps': p_number_of_steps,
                                            })
                                        })
                                    })])
                                    case 'external': return _p.ss($, ($) => ['external', _p.deprecated_block(() => {
                                        return $
                                    })])
                                    case 'sibling': return _p.ss($, ($) => ['sibling', _p.deprecated_block(() => {
                                        return $
                                    })])
                                    default: return _p.au($[0])
                                }
                            }))
                            return ({
                                'tail': p_tail,
                                'type': p_type,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        const p_variables: _i_out._T_Module.variables = _p.deprecated_cc($['variables'], ($) => r_Variables(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': null,
                }),
            }
        ))
        return ({
            'type': p_type,
            'type imports': p_type_imports,
            'variable imports': p_variable_imports,
            'variables': p_variables,
        })
    })
})
export const r_Variables: _i_signatures._T_Variables = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                        const p_type: _i_out._T_Variables.D._type = _p.deprecated_cc($['type'], ($) => $.map(($) => _p.deprecated_block(() => {
                            return _i_r_interface.r_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            )
                        })))
                        const p_initialization: _i_out._T_Variables.D.initialization = _p.deprecated_cc($['initialization'], ($) => r_Initialization(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                        return ({
                            'type': p_type,
                            'initialization': p_initialization,
                        })
                    }))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Initialization: _i_signatures._T_Initialization = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization => {
        switch ($[0]) {
            case 'block': return _p.ss($, ($) => ['block', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_variables: _i_out._T_Initialization.SG.block.variables = _p.deprecated_cc($['variables'], ($) => r_Variables(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    const p_temp_ordered_variables: _i_out._T_Initialization.SG.block.temp_ordered_variables = _p.deprecated_cc($['temp ordered variables'], ($) => $['list'].map(($) => _p.deprecated_cc($['element'], ($) => _p.deprecated_block(() => {
                        const p_name: _i_out._T_Initialization.SG.block.temp_ordered_variables.L.name = _p.deprecated_cc($['name'], ($) => $)
                        const p_type: _i_out._T_Initialization.SG.block.temp_ordered_variables.L._type = _p.deprecated_cc($['type'], ($) => $.map(($) => _p.deprecated_block(() => {
                            return _i_r_interface.r_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            )
                        })))
                        const p_initialization: _i_out._T_Initialization.SG.block.temp_ordered_variables.L.initialization = _p.deprecated_cc($['initialization'], ($) => r_Initialization(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                        return ({
                            'name': p_name,
                            'type': p_type,
                            'initialization': p_initialization,
                        })
                    }))))
                    const p_initialization: _i_out._T_Initialization.SG.block.initialization = _p.deprecated_cc($['initialization'], ($) => r_Initialization(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    return ({
                        'variables': p_variables,
                        'temp ordered variables': p_temp_ordered_variables,
                        'initialization': p_initialization,
                    })
                })
            })])
            case 'change context': return _p.ss($, ($) => ['change context', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_new_context: _i_out._T_Initialization.SG.change_context.new_context = _p.deprecated_cc($['new context'], ($) => r_Selection(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    const p_initialization: _i_out._T_Initialization.SG.change_context.initialization = _p.deprecated_cc($['initialization'], ($) => r_Initialization(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    return ({
                        'new context': p_new_context,
                        'initialization': p_initialization,
                    })
                })
            })])
            case 'literal': return _p.ss($, ($) => ['literal', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_value: _i_out._T_Initialization.SG.literal.value = _p.deprecated_cc($['value'], ($) => r_Literal(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    return ({
                        'value': p_value,
                    })
                })
            })])
            case 'selection': return _p.ss($, ($) => ['selection', _p.deprecated_block(() => {
                return r_Selection(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': null,
                            'lookups': null,
                        }),
                    }
                )
            })])
            case 'transformation': return _p.ss($, ($) => ['transformation', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_source: _i_out._T_Initialization.SG.transformation.source = _p.deprecated_cc($['source'], ($) => r_Selection(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    const p_type: _i_out._T_Initialization.SG.transformation._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type => {
                        switch ($[0]) {
                            case 'array': return _p.ss($, ($) => ['array', _p.deprecated_block(() => {
                                return _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.array => {
                                    switch ($[0]) {
                                        case 'map': return _p.ss($, ($) => ['map', _p.deprecated_block(() => {
                                            return r_Initialization(
                                                $,
                                                {
                                                    'location 2 string': l2s,
                                                    'parameters': ({
                                                        'values': null,
                                                        'lookups': null,
                                                    }),
                                                }
                                            )
                                        })])
                                        default: return _p.au($[0])
                                    }
                                })
                            })])
                            case 'boolean': return _p.ss($, ($) => ['boolean', _p.deprecated_block(() => {
                                return _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG._boolean => {
                                    switch ($[0]) {
                                        case 'not': return _p.ss($, ($) => ['not', _p.deprecated_block(() => {
                                            return null
                                        })])
                                        case 'transform': return _p.ss($, ($) => ['transform', _p.deprecated_block(() => {
                                            return _p.deprecated_block(() => {
                                                const p_if_false: _i_out._T_Initialization.SG.transformation._type.SG._boolean.SG.transform.if_false = _p.deprecated_cc($['if false'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'values': null,
                                                            'lookups': null,
                                                        }),
                                                    }
                                                ))
                                                const p_if_true: _i_out._T_Initialization.SG.transformation._type.SG._boolean.SG.transform.if_true = _p.deprecated_cc($['if true'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'values': null,
                                                            'lookups': null,
                                                        }),
                                                    }
                                                ))
                                                return ({
                                                    'if false': p_if_false,
                                                    'if true': p_if_true,
                                                })
                                            })
                                        })])
                                        default: return _p.au($[0])
                                    }
                                })
                            })])
                            case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                                return _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.dictionary => {
                                    switch ($[0]) {
                                        case 'map': return _p.ss($, ($) => ['map', _p.deprecated_block(() => {
                                            return r_Initialization(
                                                $,
                                                {
                                                    'location 2 string': l2s,
                                                    'parameters': ({
                                                        'values': null,
                                                        'lookups': null,
                                                    }),
                                                }
                                            )
                                        })])
                                        default: return _p.au($[0])
                                    }
                                })
                            })])
                            case 'function': return _p.ss($, ($) => ['function', _p.deprecated_block(() => {
                                return _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG._function => {
                                    switch ($[0]) {
                                        case 'call': return _p.ss($, ($) => ['call', _p.deprecated_block(() => {
                                            return _p.deprecated_block(() => {
                                                const p_context: _i_out._T_Initialization.SG.transformation._type.SG._function.SG.call.context = _p.deprecated_cc($['context'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'values': null,
                                                            'lookups': null,
                                                        }),
                                                    }
                                                ))
                                                const p_arguments: _i_out._T_Initialization.SG.transformation._type.SG._function.SG.call._arguments = _p.deprecated_cc($['arguments'], ($) => $.map(($) => _p.deprecated_block(() => {
                                                    return _p.deprecated_block(() => {
                                                        return _i_generic.resolve_dictionary(
                                                            $,
                                                            {
                                                                'map': ($, $p) => _p.deprecated_block(() => {
                                                                    return _p.deprecated_cc($['value'], ($) => r_Initialization(
                                                                        $,
                                                                        {
                                                                            'location 2 string': l2s,
                                                                            'parameters': ({
                                                                                'values': null,
                                                                                'lookups': null,
                                                                            }),
                                                                        }
                                                                    ))
                                                                }),
                                                                'location 2 string': l2s,
                                                            }
                                                        )
                                                    })
                                                })))
                                                return ({
                                                    'context': p_context,
                                                    'arguments': p_arguments,
                                                })
                                            })
                                        })])
                                        default: return _p.au($[0])
                                    }
                                })
                            })])
                            case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                                return _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.optional => {
                                    switch ($[0]) {
                                        case 'map': return _p.ss($, ($) => ['map', _p.deprecated_block(() => {
                                            return r_Initialization(
                                                $,
                                                {
                                                    'location 2 string': l2s,
                                                    'parameters': ({
                                                        'values': null,
                                                        'lookups': null,
                                                    }),
                                                }
                                            )
                                        })])
                                        case 'transform': return _p.ss($, ($) => ['transform', _p.deprecated_block(() => {
                                            return _p.deprecated_block(() => {
                                                const p_if_not_set: _i_out._T_Initialization.SG.transformation._type.SG.optional.SG.transform.if_not_set = _p.deprecated_cc($['if not set'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'values': null,
                                                            'lookups': null,
                                                        }),
                                                    }
                                                ))
                                                const p_if_set: _i_out._T_Initialization.SG.transformation._type.SG.optional.SG.transform.if_set = _p.deprecated_cc($['if set'], ($) => r_Initialization(
                                                    $,
                                                    {
                                                        'location 2 string': l2s,
                                                        'parameters': ({
                                                            'values': null,
                                                            'lookups': null,
                                                        }),
                                                    }
                                                ))
                                                const p_temp_resulting_node: _i_out._T_Initialization.SG.transformation._type.SG.optional.SG.transform.temp_resulting_node = _p.deprecated_cc($['temp resulting node'], ($) => $.map(($) => _p.deprecated_block(() => {
                                                    return _i_r_interface.r_Type(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'values': null,
                                                                'lookups': null,
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
                                        default: return _p.au($[0])
                                    }
                                })
                            })])
                            case 'tagged union': return _p.ss($, ($) => ['tagged union', _p.deprecated_block(() => {
                                return _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union => {
                                    switch ($[0]) {
                                        case 'switch': return _p.ss($, ($) => ['switch', _p.deprecated_block(() => {
                                            return _p.deprecated_block(() => {
                                                const p_temp_resulting_node: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch.temp_resulting_node = _p.deprecated_cc($['temp resulting node'], ($) => $.map(($) => _p.deprecated_block(() => {
                                                    return _i_r_interface.r_Type(
                                                        $,
                                                        {
                                                            'location 2 string': l2s,
                                                            'parameters': ({
                                                                'values': null,
                                                                'lookups': null,
                                                            }),
                                                        }
                                                    )
                                                })))
                                                const p_type: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type => {
                                                    switch ($[0]) {
                                                        case 'partial': return _p.ss($, ($) => ['partial', _p.deprecated_block(() => {
                                                            return _p.deprecated_block(() => {
                                                                const p_cases: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.partial.cases = _p.deprecated_cc($['cases'], ($) => _p.deprecated_block(() => {
                                                                    return _i_generic.resolve_dictionary(
                                                                        $,
                                                                        {
                                                                            'map': ($, $p) => _p.deprecated_block(() => {
                                                                                return _p.deprecated_cc($['value'], ($) => r_Initialization(
                                                                                    $,
                                                                                    {
                                                                                        'location 2 string': l2s,
                                                                                        'parameters': ({
                                                                                            'values': null,
                                                                                            'lookups': null,
                                                                                        }),
                                                                                    }
                                                                                ))
                                                                            }),
                                                                            'location 2 string': l2s,
                                                                        }
                                                                    )
                                                                }))
                                                                const p_default: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.partial._default = _p.deprecated_cc($['default'], ($) => r_Initialization(
                                                                    $,
                                                                    {
                                                                        'location 2 string': l2s,
                                                                        'parameters': ({
                                                                            'values': null,
                                                                            'lookups': null,
                                                                        }),
                                                                    }
                                                                ))
                                                                return ({
                                                                    'cases': p_cases,
                                                                    'default': p_default,
                                                                })
                                                            })
                                                        })])
                                                        case 'full': return _p.ss($, ($) => ['full', _p.deprecated_block(() => {
                                                            return _p.deprecated_block(() => {
                                                                const p_cases: _i_out._T_Initialization.SG.transformation._type.SG.tagged_union.SG._switch._type.SG.full.cases = _p.deprecated_cc($['cases'], ($) => _p.deprecated_block(() => {
                                                                    return _i_generic.resolve_dictionary(
                                                                        $,
                                                                        {
                                                                            'map': ($, $p) => _p.deprecated_block(() => {
                                                                                return _p.deprecated_cc($['value'], ($) => r_Initialization(
                                                                                    $,
                                                                                    {
                                                                                        'location 2 string': l2s,
                                                                                        'parameters': ({
                                                                                            'values': null,
                                                                                            'lookups': null,
                                                                                        }),
                                                                                    }
                                                                                ))
                                                                            }),
                                                                            'location 2 string': l2s,
                                                                        }
                                                                    )
                                                                }))
                                                                return ({
                                                                    'cases': p_cases,
                                                                })
                                                            })
                                                        })])
                                                        default: return _p.au($[0])
                                                    }
                                                }))
                                                return ({
                                                    'temp resulting node': p_temp_resulting_node,
                                                    'type': p_type,
                                                })
                                            })
                                        })])
                                        default: return _p.au($[0])
                                    }
                                })
                            })])
                            default: return _p.au($[0])
                        }
                    }))
                    return ({
                        'source': p_source,
                        'type': p_type,
                    })
                })
            })])
            default: return _p.au($[0])
        }
    })
})
export const r_Literal: _i_signatures._T_Literal = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Literal => {
        switch ($[0]) {
            case 'array': return _p.ss($, ($) => ['array', _p.deprecated_block(() => {
                return $['list'].map(($) => _p.deprecated_cc($['element'], ($) => r_Initialization(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'values': null,
                            'lookups': null,
                        }),
                    }
                )))
            })])
            case 'boolean': return _p.ss($, ($) => ['boolean', _p.deprecated_block(() => {
                return _p.deprecated_cc($['state group'], ($): _i_out._T_Literal.SG._boolean => {
                    switch ($[0]) {
                        case 'false': return _p.ss($, ($) => ['false', _p.deprecated_block(() => {
                            return null
                        })])
                        case 'true': return _p.ss($, ($) => ['true', _p.deprecated_block(() => {
                            return null
                        })])
                        default: return _p.au($[0])
                    }
                })
            })])
            case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'map': ($, $p) => _p.deprecated_block(() => {
                                return _p.deprecated_cc($['value'], ($) => r_Initialization(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'values': null,
                                            'lookups': null,
                                        }),
                                    }
                                ))
                            }),
                            'location 2 string': l2s,
                        }
                    )
                })
            })])
            case 'function': return _p.ss($, ($) => ['function', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_initialization: _i_out._T_Literal.SG._function.initialization = _p.deprecated_cc($['initialization'], ($) => r_Initialization(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    const p_temp_has_parameters: _i_out._T_Literal.SG._function.temp_has_parameters = _p.deprecated_cc($['temp has parameters'], ($) => $)
                    const p_temp_resulting_node: _i_out._T_Literal.SG._function.temp_resulting_node = _p.deprecated_cc($['temp resulting node'], ($) => $.map(($) => _p.deprecated_block(() => {
                        return _i_r_interface.r_Type(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
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
            case 'group': return _p.ss($, ($) => ['group', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'map': ($, $p) => _p.deprecated_block(() => {
                                return _p.deprecated_cc($['value'], ($) => r_Initialization(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'values': null,
                                            'lookups': null,
                                        }),
                                    }
                                ))
                            }),
                            'location 2 string': l2s,
                        }
                    )
                })
            })])
            case 'null': return _p.ss($, ($) => ['null', _p.deprecated_block(() => {
                return null
            })])
            case 'number': return _p.ss($, ($) => ['number', _p.deprecated_block(() => {
                return _p.deprecated_cc($['state group'], ($): _i_out._T_Literal.SG._number => {
                    switch ($[0]) {
                        case 'floting point': return _p.ss($, ($) => ['floting point', _p.deprecated_block(() => {
                            return $
                        })])
                        case 'integer': return _p.ss($, ($) => ['integer', _p.deprecated_block(() => {
                            return $
                        })])
                        case 'signed integer': return _p.ss($, ($) => ['signed integer', _p.deprecated_block(() => {
                            return $
                        })])
                        default: return _p.au($[0])
                    }
                })
            })])
            case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                return _p.deprecated_cc($['state group'], ($): _i_out._T_Literal.SG.optional => {
                    switch ($[0]) {
                        case 'not set': return _p.ss($, ($) => ['not set', _p.deprecated_block(() => {
                            return null
                        })])
                        case 'set': return _p.ss($, ($) => ['set', _p.deprecated_block(() => {
                            return r_Initialization(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            )
                        })])
                        default: return _p.au($[0])
                    }
                })
            })])
            case 'string': return _p.ss($, ($) => ['string', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_delimiter: _i_out._T_Literal.SG._string.delimiter = _p.deprecated_cc($['delimiter'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Literal.SG._string.delimiter => {
                        switch ($[0]) {
                            case 'backtick': return _p.ss($, ($) => ['backtick', _p.deprecated_block(() => {
                                return null
                            })])
                            case 'quote': return _p.ss($, ($) => ['quote', _p.deprecated_block(() => {
                                return null
                            })])
                            default: return _p.au($[0])
                        }
                    }))
                    const p_value: _i_out._T_Literal.SG._string.value = _p.deprecated_cc($['value'], ($) => $)
                    return ({
                        'delimiter': p_delimiter,
                        'value': p_value,
                    })
                })
            })])
            case 'tagged union': return _p.ss($, ($) => ['tagged union', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_case: _i_out._T_Literal.SG.tagged_union._case = _p.deprecated_cc($['case'], ($) => $)
                    const p_value: _i_out._T_Literal.SG.tagged_union.value = _p.deprecated_cc($['value'], ($) => r_Initialization(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    return ({
                        'case': p_case,
                        'value': p_value,
                    })
                })
            })])
            default: return _p.au($[0])
        }
    })
})
export const r_Selection: _i_signatures._T_Selection = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_start: _i_out._T_Selection.start = _p.deprecated_cc($['start'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Selection.start => {
            switch ($[0]) {
                case 'abort': return _p.ss($, ($) => ['abort', _p.deprecated_block(() => {
                    return null
                })])
                case 'transform optional value': return _p.ss($, ($) => ['transform optional value', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        const p_source: _i_out._T_Selection.start.SG.transform_optional_value.source = _p.deprecated_cc($['source'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                        const p_if_not_set: _i_out._T_Selection.start.SG.transform_optional_value.if_not_set = _p.deprecated_cc($['if not set'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                        const p_if_set: _i_out._T_Selection.start.SG.transform_optional_value.if_set = _p.deprecated_cc($['if set'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                        return ({
                            'source': p_source,
                            'if not set': p_if_not_set,
                            'if set': p_if_set,
                        })
                    })
                })])
                case 'call': return _p.ss($, ($) => ['call', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        const p_source: _i_out._T_Selection.start.SG.call.source = _p.deprecated_cc($['source'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                        const p_context: _i_out._T_Selection.start.SG.call.context = _p.deprecated_cc($['context'], ($) => r_Selection(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': null,
                                }),
                            }
                        ))
                        const p_arguments: _i_out._T_Selection.start.SG.call._arguments = _p.deprecated_cc($['arguments'], ($) => $.map(($) => _p.deprecated_block(() => {
                            return _p.deprecated_block(() => {
                                return _i_generic.resolve_dictionary(
                                    $,
                                    {
                                        'map': ($, $p) => _p.deprecated_block(() => {
                                            return _p.deprecated_cc($['value'], ($) => r_Initialization(
                                                $,
                                                {
                                                    'location 2 string': l2s,
                                                    'parameters': ({
                                                        'values': null,
                                                        'lookups': null,
                                                    }),
                                                }
                                            ))
                                        }),
                                        'location 2 string': l2s,
                                    }
                                )
                            })
                        })))
                        return ({
                            'source': p_source,
                            'context': p_context,
                            'arguments': p_arguments,
                        })
                    })
                })])
                case 'implement me': return _p.ss($, ($) => ['implement me', _p.deprecated_block(() => {
                    return null
                })])
                case 'argument': return _p.ss($, ($) => ['argument', _p.deprecated_block(() => {
                    return $
                })])
                case 'context': return _p.ss($, ($) => ['context', _p.deprecated_block(() => {
                    return null
                })])
                case 'variable': return _p.ss($, ($) => ['variable', _p.deprecated_block(() => {
                    return $
                })])
                case 'parameter': return _p.ss($, ($) => ['parameter', _p.deprecated_block(() => {
                    return $
                })])
                case 'imported variable': return _p.ss($, ($) => ['imported variable', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        const p_import: _i_out._T_Selection.start.SG.imported_variable._import = _p.deprecated_cc($['import'], ($) => $)
                        const p_variable: _i_out._T_Selection.start.SG.imported_variable.variable = _p.deprecated_cc($['variable'], ($) => $)
                        return ({
                            'import': p_import,
                            'variable': p_variable,
                        })
                    })
                })])
                default: return _p.au($[0])
            }
        }))
        const p_tail: _i_out._T_Selection.tail = _p.deprecated_cc($['tail'], ($) => $['list'].map(($) => _p.deprecated_cc($['element'], ($) => $)))
        return ({
            'start': p_start,
            'tail': p_tail,
        })
    })
})
