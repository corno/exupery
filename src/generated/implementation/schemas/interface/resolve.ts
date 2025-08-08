import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/resolve"
import * as _i_out from "../../../interface/schemas/interface/data_types/resolved"
import * as _i_signatures from "../../../interface/schemas/interface/data_types/resolve"


export const r_Imports: _i_signatures._T_Imports<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => _pa.block(() => {
                        const p_type: _i_out._T_Imports.D._type = _pa.cc($['type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Imports.D._type => {
                            switch ($[0]) {
                                case 'ancestor': return _pa.ss($, ($) => ['ancestor', _pa.block(() => {
                                    return _pa.block(() => {
                                        const p_number_of_steps: _i_out._T_Imports.D._type.SG.ancestor.number_of_steps = _pa.cc($['number of steps'], ($) => $)
                                        const p_dependency: _i_out._T_Imports.D._type.SG.ancestor.dependency = _pa.cc($['dependency'], ($) => $)
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
                        const p_tail: _i_out._T_Imports.D.tail = _pa.cc($['tail'], ($) => $['list'].map(($) => _pa.cc($['element'], ($) => $)))
                        const p_type_arguments: _i_out._T_Imports.D.type_arguments = _pa.cc($['type arguments'], ($) => r_Type_Arguments(
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
                            'tail': p_tail,
                            'type': p_type,
                            'type arguments': p_type_arguments,
                        })
                    }))
                }),
            }
        )
    })
})
export const r_Module: _i_signatures._T_Module<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_imports: _i_out._T_Module.imports = _pa.cc($['imports'], ($) => r_Imports(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        const p_type_parameters: _i_out._T_Module.type_parameters = _pa.cc($['type parameters'], ($) => r_Type_Parameters(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        const p_types: _i_out._T_Module.types = _pa.cc($['types'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => _pa.block(() => {
                            const p_parameters: _i_out._T_Module.types.D.parameters = _pa.cc($['parameters'], ($) => r_Type_Parameters(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            ))
                            const p_type: _i_out._T_Module.types.D._type = _pa.cc($['type'], ($) => r_Type(
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
                                'parameters': p_parameters,
                                'type': p_type,
                            })
                        }))
                    }),
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
export const r_Module_Set: _i_signatures._T_Module_Set<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
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
export const r_Type: _i_signatures._T_Type<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.cc($['state group'], ($): _i_out._T_Type => {
        switch ($[0]) {
            case 'array': return _pa.ss($, ($) => ['array', _pa.block(() => {
                return r_Type(
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
            case 'boolean': return _pa.ss($, ($) => ['boolean', _pa.block(() => {
                return null
            })])
            case 'component': return _pa.ss($, ($) => ['component', _pa.block(() => {
                return _pa.block(() => {
                    const p_location: _i_out._T_Type.SG.component.location = _pa.cc($['location'], ($) => _pa.cc($['state group'], ($): _i_out._T_Type.SG.component.location => {
                        switch ($[0]) {
                            case 'import': return _pa.ss($, ($) => ['import', _pa.block(() => {
                                return _pa.block(() => {
                                    const p_import: _i_out._T_Type.SG.component.location.SG._import._import = _pa.cc($['import'], ($) => $)
                                    const p_type: _i_out._T_Type.SG.component.location.SG._import._type = _pa.cc($['type'], ($) => $)
                                    return ({
                                        'import': p_import,
                                        'type': p_type,
                                    })
                                })
                            })])
                            case 'sibling': return _pa.ss($, ($) => ['sibling', _pa.block(() => {
                                return $
                            })])
                            default: return _pa.au($[0])
                        }
                    }))
                    const p_type_arguments: _i_out._T_Type.SG.component.type_arguments = _pa.cc($['type arguments'], ($) => r_Type_Arguments(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    const p_sub_selection: _i_out._T_Type.SG.component.sub_selection = _pa.cc($['sub selection'], ($) => $['list'].map(($) => _pa.cc($['element'], ($) => _pa.cc($['state group'], ($): _i_out._T_Type.SG.component.sub_selection.L => {
                        switch ($[0]) {
                            case 'dictionary': return _pa.ss($, ($) => ['dictionary', _pa.block(() => {
                                return null
                            })])
                            case 'group': return _pa.ss($, ($) => ['group', _pa.block(() => {
                                return $
                            })])
                            case 'list': return _pa.ss($, ($) => ['list', _pa.block(() => {
                                return null
                            })])
                            case 'optional': return _pa.ss($, ($) => ['optional', _pa.block(() => {
                                return null
                            })])
                            case 'state group': return _pa.ss($, ($) => ['state group', _pa.block(() => {
                                return $
                            })])
                            default: return _pa.au($[0])
                        }
                    }))))
                    return ({
                        'location': p_location,
                        'sub selection': p_sub_selection,
                        'type arguments': p_type_arguments,
                    })
                })
            })])
            case 'computed': return _pa.ss($, ($) => ['computed', _pa.block(() => {
                return r_Type(
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
            case 'dictionary': return _pa.ss($, ($) => ['dictionary', _pa.block(() => {
                return r_Type(
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
            case 'function': return _pa.ss($, ($) => ['function', _pa.block(() => {
                return _pa.block(() => {
                    const p_type_parameters: _i_out._T_Type.SG._function.type_parameters = _pa.cc($['type parameters'], ($) => r_Type_Parameters(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    const p_context: _i_out._T_Type.SG._function.context = _pa.cc($['context'], ($) => r_Type(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': null,
                                'values': null,
                            }),
                        }
                    ))
                    const p_parameters: _i_out._T_Type.SG._function.parameters = _pa.cc($['parameters'], ($) => _pa.block(() => {
                        return _i_generic.resolve_dictionary(
                            $,
                            {
                                'location 2 string': l2s,
                                'map': ($, $p) => _pa.block(() => {
                                    return _pa.cc($['value'], ($) => r_Type(
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
                    const p_return: _i_out._T_Type.SG._function._return = _pa.cc($['return'], ($) => r_Type(
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
                        'context': p_context,
                        'parameters': p_parameters,
                        'return': p_return,
                        'type parameters': p_type_parameters,
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
                                return _pa.cc($['value'], ($) => r_Type(
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
            case 'key value pair': return _pa.ss($, ($) => ['key value pair', _pa.block(() => {
                return r_Type(
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
            case 'null': return _pa.ss($, ($) => ['null', _pa.block(() => {
                return null
            })])
            case 'number': return _pa.ss($, ($) => ['number', _pa.block(() => {
                return _pa.cc($['state group'], ($): _i_out._T_Type.SG._number => {
                    switch ($[0]) {
                        case 'float': return _pa.ss($, ($) => ['float', _pa.block(() => {
                            return null
                        })])
                        case 'integer': return _pa.ss($, ($) => ['integer', _pa.block(() => {
                            return _pa.block(() => {
                                const p_signed: _i_out._T_Type.SG._number.SG.integer.signed = _pa.cc($['signed'], ($) => $)
                                return ({
                                    'signed': p_signed,
                                })
                            })
                        })])
                        default: return _pa.au($[0])
                    }
                })
            })])
            case 'optional': return _pa.ss($, ($) => ['optional', _pa.block(() => {
                return r_Type(
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
            case 'parameter': return _pa.ss($, ($) => ['parameter', _pa.block(() => {
                return r_Type_Parameter_Selection(
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
            case 'string': return _pa.ss($, ($) => ['string', _pa.block(() => {
                return null
            })])
            case 'tagged union': return _pa.ss($, ($) => ['tagged union', _pa.block(() => {
                return _pa.block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'location 2 string': l2s,
                            'map': ($, $p) => _pa.block(() => {
                                return _pa.cc($['value'], ($) => r_Type(
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
            default: return _pa.au($[0])
        }
    })
})
export const r_Type_Arguments: _i_signatures._T_Type_Arguments<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => r_Type(
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
})
export const r_Type_Parameter_Selection: _i_signatures._T_Type_Parameter_Selection<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_location: _i_out._T_Type_Parameter_Selection.location = _pa.cc($['location'], ($) => _pa.cc($['state group'], ($): _i_out._T_Type_Parameter_Selection.location => {
            switch ($[0]) {
                case 'module': return _pa.ss($, ($) => ['module', _pa.block(() => {
                    return null
                })])
                case 'type': return _pa.ss($, ($) => ['type', _pa.block(() => {
                    return null
                })])
                default: return _pa.au($[0])
            }
        }))
        const p_parameter: _i_out._T_Type_Parameter_Selection.parameter = _pa.cc($['parameter'], ($) => $)
        return ({
            'location': p_location,
            'parameter': p_parameter,
        })
    })
})
export const r_Type_Parameters: _i_signatures._T_Type_Parameters<_i_generic._T_Location_Info> = ($, $p) => _pa.block(() => {
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
