import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "pareto-core-internals/dist/algorithm_types/refiner/resolve"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/interface/data_types/source"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/interface/data_types/resolve"


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
export const r_Type_Parameters: _i_signatures._T_Type_Parameters = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => null)
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
        const p_imports: _i_out._T_Module.imports = _p.deprecated_cc($['imports'], ($) => r_Imports(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': null,
                }),
            }
        ))
        const p_type_parameters: _i_out._T_Module.type_parameters = _p.deprecated_cc($['type parameters'], ($) => r_Type_Parameters(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'values': null,
                    'lookups': null,
                }),
            }
        ))
        const p_types: _i_out._T_Module.types = _p.deprecated_cc($['types'], ($) => _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                            const p_parameters: _i_out._T_Module.types.D.parameters = _p.deprecated_cc($['parameters'], ($) => r_Type_Parameters(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            ))
                            const p_type: _i_out._T_Module.types.D._type = _p.deprecated_cc($['type'], ($) => r_Type(
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
                                'parameters': p_parameters,
                                'type': p_type,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        }))
        return ({
            'imports': p_imports,
            'type parameters': p_type_parameters,
            'types': p_types,
        })
    })
})
export const r_Imports: _i_signatures._T_Imports = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                        const p_type: _i_out._T_Imports.D._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Imports.D._type => {
                            switch ($[0]) {
                                case 'external': return _p.ss($, ($) => ['external', _p.deprecated_block(() => {
                                    return $
                                })])
                                case 'ancestor': return _p.ss($, ($) => ['ancestor', _p.deprecated_block(() => {
                                    return _p.deprecated_block(() => {
                                        const p_number_of_steps: _i_out._T_Imports.D._type.SG.ancestor.number_of_steps = _p.deprecated_cc($['number of steps'], ($) => $)
                                        const p_dependency: _i_out._T_Imports.D._type.SG.ancestor.dependency = _p.deprecated_cc($['dependency'], ($) => $)
                                        return ({
                                            'number of steps': p_number_of_steps,
                                            'dependency': p_dependency,
                                        })
                                    })
                                })])
                                case 'sibling': return _p.ss($, ($) => ['sibling', _p.deprecated_block(() => {
                                    return $
                                })])
                                default: return _p.au($[0])
                            }
                        }))
                        const p_tail: _i_out._T_Imports.D.tail = _p.deprecated_cc($['tail'], ($) => $['list'].map(($) => _p.deprecated_cc($['element'], ($) => $)))
                        const p_type_arguments: _i_out._T_Imports.D.type_arguments = _p.deprecated_cc($['type arguments'], ($) => r_Type_Arguments(
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
                            'tail': p_tail,
                            'type arguments': p_type_arguments,
                        })
                    }))
                }),
                'location 2 string': l2s,
            }
        )
    })
})
export const r_Type_Arguments: _i_signatures._T_Type_Arguments = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'map': ($, $p) => _p.deprecated_block(() => {
                    return _p.deprecated_cc($['value'], ($) => r_Type(
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
})
export const r_Type_Parameter_Selection: _i_signatures._T_Type_Parameter_Selection = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_block(() => {
        const p_location: _i_out._T_Type_Parameter_Selection.location = _p.deprecated_cc($['location'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Parameter_Selection.location => {
            switch ($[0]) {
                case 'module': return _p.ss($, ($) => ['module', _p.deprecated_block(() => {
                    return null
                })])
                case 'type': return _p.ss($, ($) => ['type', _p.deprecated_block(() => {
                    return null
                })])
                case 'function': return _p.ss($, ($) => ['function', _p.deprecated_block(() => {
                    return null
                })])
                default: return _p.au($[0])
            }
        }))
        const p_parameter: _i_out._T_Type_Parameter_Selection.parameter = _p.deprecated_cc($['parameter'], ($) => $)
        return ({
            'location': p_location,
            'parameter': p_parameter,
        })
    })
})
export const r_Type: _i_signatures._T_Type = ($, $p) => _p.deprecated_block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _p.deprecated_cc($['state group'], ($): _i_out._T_Type => {
        switch ($[0]) {
            case 'boolean': return _p.ss($, ($) => ['boolean', _p.deprecated_block(() => {
                return null
            })])
            case 'component': return _p.ss($, ($) => ['component', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_location: _i_out._T_Type.SG.component.location = _p.deprecated_cc($['location'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Type.SG.component.location => {
                        switch ($[0]) {
                            case 'import': return _p.ss($, ($) => ['import', _p.deprecated_block(() => {
                                return _p.deprecated_block(() => {
                                    const p_import: _i_out._T_Type.SG.component.location.SG._import._import = _p.deprecated_cc($['import'], ($) => $)
                                    const p_type: _i_out._T_Type.SG.component.location.SG._import._type = _p.deprecated_cc($['type'], ($) => $)
                                    return ({
                                        'import': p_import,
                                        'type': p_type,
                                    })
                                })
                            })])
                            case 'sibling': return _p.ss($, ($) => ['sibling', _p.deprecated_block(() => {
                                return $
                            })])
                            default: return _p.au($[0])
                        }
                    }))
                    const p_type_arguments: _i_out._T_Type.SG.component.type_arguments = _p.deprecated_cc($['type arguments'], ($) => r_Type_Arguments(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    const p_sub_selection: _i_out._T_Type.SG.component.sub_selection = _p.deprecated_cc($['sub selection'], ($) => $['list'].map(($) => _p.deprecated_cc($['element'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Type.SG.component.sub_selection.L => {
                        switch ($[0]) {
                            case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                                return null
                            })])
                            case 'group': return _p.ss($, ($) => ['group', _p.deprecated_block(() => {
                                return $
                            })])
                            case 'list': return _p.ss($, ($) => ['list', _p.deprecated_block(() => {
                                return null
                            })])
                            case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                                return null
                            })])
                            case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_block(() => {
                                return $
                            })])
                            default: return _p.au($[0])
                        }
                    }))))
                    return ({
                        'location': p_location,
                        'type arguments': p_type_arguments,
                        'sub selection': p_sub_selection,
                    })
                })
            })])
            case 'computed': return _p.ss($, ($) => ['computed', _p.deprecated_block(() => {
                return r_Type(
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
            case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                return r_Type(
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
            case 'function': return _p.ss($, ($) => ['function', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    const p_type_parameters: _i_out._T_Type.SG._function.type_parameters = _p.deprecated_cc($['type parameters'], ($) => r_Type_Parameters(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    const p_context: _i_out._T_Type.SG._function.context = _p.deprecated_cc($['context'], ($) => r_Type(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': null,
                            }),
                        }
                    ))
                    const p_parameters: _i_out._T_Type.SG._function.parameters = _p.deprecated_cc($['parameters'], ($) => _p.deprecated_block(() => {
                        return _i_generic.resolve_dictionary(
                            $,
                            {
                                'map': ($, $p) => _p.deprecated_block(() => {
                                    return _p.deprecated_cc($['value'], ($) => r_Type(
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
                    const p_return: _i_out._T_Type.SG._function._return = _p.deprecated_cc($['return'], ($) => r_Type(
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
                        'type parameters': p_type_parameters,
                        'context': p_context,
                        'parameters': p_parameters,
                        'return': p_return,
                    })
                })
            })])
            case 'group': return _p.ss($, ($) => ['group', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'map': ($, $p) => _p.deprecated_block(() => {
                                return _p.deprecated_cc($['value'], ($) => r_Type(
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
            case 'array': return _p.ss($, ($) => ['array', _p.deprecated_block(() => {
                return r_Type(
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
            case 'null': return _p.ss($, ($) => ['null', _p.deprecated_block(() => {
                return null
            })])
            case 'number': return _p.ss($, ($) => ['number', _p.deprecated_block(() => {
                return _p.deprecated_cc($['state group'], ($): _i_out._T_Type.SG._number => {
                    switch ($[0]) {
                        case 'integer': return _p.ss($, ($) => ['integer', _p.deprecated_block(() => {
                            return _p.deprecated_block(() => {
                                const p_signed: _i_out._T_Type.SG._number.SG.integer.signed = _p.deprecated_cc($['signed'], ($) => $)
                                return ({
                                    'signed': p_signed,
                                })
                            })
                        })])
                        case 'float': return _p.ss($, ($) => ['float', _p.deprecated_block(() => {
                            return null
                        })])
                        default: return _p.au($[0])
                    }
                })
            })])
            case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                return r_Type(
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
            case 'parameter': return _p.ss($, ($) => ['parameter', _p.deprecated_block(() => {
                return r_Type_Parameter_Selection(
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
            case 'tagged union': return _p.ss($, ($) => ['tagged union', _p.deprecated_block(() => {
                return _p.deprecated_block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'map': ($, $p) => _p.deprecated_block(() => {
                                return _p.deprecated_cc($['value'], ($) => r_Type(
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
            case 'string': return _p.ss($, ($) => ['string', _p.deprecated_block(() => {
                return null
            })])
            default: return _p.au($[0])
        }
    })
})
