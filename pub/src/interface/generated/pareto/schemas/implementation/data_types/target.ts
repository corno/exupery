import * as _et from 'exupery-core-types'

import * as _i_core from "../../../core/unresolved"
import * as _i_imports_interface from "../../interface/data_types/target"

// **** TYPES

export type _T_Initialization<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['block', {
        readonly 'initialization': _T_Initialization<M_Source>
        readonly 'temp ordered variables': _i_core._T_List<M_Source, {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'name': string
            readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
        }>
        readonly 'variables': _T_Variables<M_Source>
    }]
    | readonly ['change context', {
        readonly 'initialization': _T_Initialization<M_Source>
        readonly 'new context': _T_Selection<M_Source>
    }]
    | readonly ['literal', {
        readonly 'value': _T_Literal<M_Source>
    }]
    | readonly ['selection', _T_Selection<M_Source>]
    | readonly ['transformation', {
        readonly 'source': _T_Selection<M_Source>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['array', _i_core._T_State_Group<M_Source, 
                | readonly ['map', _T_Initialization<M_Source>]
            >]
            | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                | readonly ['not', null]
                | readonly ['transform', {
                    readonly 'if false': _T_Initialization<M_Source>
                    readonly 'if true': _T_Initialization<M_Source>
                }]
            >]
            | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                | readonly ['map', _T_Initialization<M_Source>]
            >]
            | readonly ['function', _i_core._T_State_Group<M_Source, 
                | readonly ['call', {
                    readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                    readonly 'context': _T_Initialization<M_Source>
                }]
            >]
            | readonly ['optional', _i_core._T_State_Group<M_Source, 
                | readonly ['map', _T_Initialization<M_Source>]
                | readonly ['transform', {
                    readonly 'if not set': _T_Initialization<M_Source>
                    readonly 'if set': _T_Initialization<M_Source>
                    readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                }]
            >]
            | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                | readonly ['switch', {
                    readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                    readonly 'type': _i_core._T_State_Group<M_Source, 
                        | readonly ['full', {
                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                        }]
                        | readonly ['partial', {
                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                            readonly 'default': _T_Initialization<M_Source>
                        }]
                    >
                }]
            >]
        >
    }]
>

export type _T_Literal<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['array', _i_core._T_List<M_Source, _T_Initialization<M_Source>>]
    | readonly ['boolean', _i_core._T_State_Group<M_Source, 
        | readonly ['false', null]
        | readonly ['true', null]
    >]
    | readonly ['dictionary', _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>]
    | readonly ['function', {
        readonly 'initialization': _T_Initialization<M_Source>
        readonly 'temp has parameters': boolean
        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
    }]
    | readonly ['group', _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>]
    | readonly ['null', null]
    | readonly ['number', _i_core._T_State_Group<M_Source, 
        | readonly ['floting point', number]
        | readonly ['integer', number]
        | readonly ['signed integer', number]
    >]
    | readonly ['optional', _i_core._T_State_Group<M_Source, 
        | readonly ['not set', null]
        | readonly ['set', _T_Initialization<M_Source>]
    >]
    | readonly ['string', {
        readonly 'delimiter': _i_core._T_State_Group<M_Source, 
            | readonly ['backtick', null]
            | readonly ['quote', null]
        >
        readonly 'value': string
    }]
    | readonly ['tagged union', {
        readonly 'case': string
        readonly 'value': _T_Initialization<M_Source>
    }]
>

export type _T_Module<M_Source> = {
    readonly 'type imports': _i_imports_interface._T_Imports<M_Source>
    readonly 'variable imports': _i_core._T_Dictionary<M_Source, {
        readonly 'tail': _i_core._T_List<M_Source, string>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
    }>
    readonly 'variables': _T_Variables<M_Source>
}

export type _T_Module_Set<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
    | readonly ['module', _T_Module<M_Source>]
    | readonly ['set', _T_Module_Set<M_Source>]
>>

export type _T_Selection<M_Source> = {
    readonly 'start': _i_core._T_State_Group<M_Source, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
            readonly 'context': _T_Selection<M_Source>
            readonly 'source': _T_Selection<M_Source>
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection<M_Source>
            readonly 'if set': _T_Selection<M_Source>
            readonly 'source': _T_Selection<M_Source>
        }]
        | readonly ['variable', string]
    >
    readonly 'tail': _i_core._T_List<M_Source, string>
}

export type _T_Type_Parameters<M_Source> = _i_core._T_Dictionary<M_Source, null>

export type _T_Variables<M_Source> = _i_core._T_Dictionary<M_Source, {
    readonly 'initialization': _T_Initialization<M_Source>
    readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Initialization<M_Source> = _T_Initialization<M_Source>

export type Literal<M_Source> = _T_Literal<M_Source>

export type Module<M_Source> = _T_Module<M_Source>

export type Module_Set<M_Source> = _T_Module_Set<M_Source>

export type Selection<M_Source> = _T_Selection<M_Source>

export type Type_Parameters<M_Source> = _T_Type_Parameters<M_Source>

export type Variables<M_Source> = _T_Variables<M_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Initialization {
    
    export namespace SG {
        
        export namespace block {
            
            export namespace initialization {
            }
            export type initialization<M_Source> = _T_Initialization<M_Source>
            
            export namespace temp_ordered_variables {
                
                export namespace L {
                    
                    export namespace initialization {
                    }
                    export type initialization<M_Source> = _T_Initialization<M_Source>
                    export type name<M_Source> = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
                    }
                    export type _type<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                }
                export type L<M_Source> = {
                    readonly 'initialization': _T_Initialization<M_Source>
                    readonly 'name': string
                    readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                }
            }
            export type temp_ordered_variables<M_Source> = _i_core._T_List<M_Source, {
                readonly 'initialization': _T_Initialization<M_Source>
                readonly 'name': string
                readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
            }>
            
            export namespace variables {
            }
            export type variables<M_Source> = _T_Variables<M_Source>
        }
        export type block<M_Source> = {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'temp ordered variables': _i_core._T_List<M_Source, {
                readonly 'initialization': _T_Initialization<M_Source>
                readonly 'name': string
                readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
            }>
            readonly 'variables': _T_Variables<M_Source>
        }
        
        export namespace change_context {
            
            export namespace initialization {
            }
            export type initialization<M_Source> = _T_Initialization<M_Source>
            
            export namespace new_context {
            }
            export type new_context<M_Source> = _T_Selection<M_Source>
        }
        export type change_context<M_Source> = {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'new context': _T_Selection<M_Source>
        }
        
        export namespace literal {
            
            export namespace value {
            }
            export type value<M_Source> = _T_Literal<M_Source>
        }
        export type literal<M_Source> = {
            readonly 'value': _T_Literal<M_Source>
        }
        
        export namespace selection {
        }
        export type selection<M_Source> = _T_Selection<M_Source>
        
        export namespace transformation {
            
            export namespace source {
            }
            export type source<M_Source> = _T_Selection<M_Source>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace array {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<M_Source> = _T_Initialization<M_Source>
                        }
                        export type SG<M_Source> = 
                            | readonly ['map', _T_Initialization<M_Source>]
                    }
                    export type array<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                    >
                    
                    export namespace _boolean {
                        
                        export namespace SG {
                            export type not<M_Source> = null
                            
                            export namespace transform {
                                
                                export namespace if_false {
                                }
                                export type if_false<M_Source> = _T_Initialization<M_Source>
                                
                                export namespace if_true {
                                }
                                export type if_true<M_Source> = _T_Initialization<M_Source>
                            }
                            export type transform<M_Source> = {
                                readonly 'if false': _T_Initialization<M_Source>
                                readonly 'if true': _T_Initialization<M_Source>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['not', null]
                            | readonly ['transform', {
                                readonly 'if false': _T_Initialization<M_Source>
                                readonly 'if true': _T_Initialization<M_Source>
                            }]
                    }
                    export type _boolean<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization<M_Source>
                            readonly 'if true': _T_Initialization<M_Source>
                        }]
                    >
                    
                    export namespace dictionary {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<M_Source> = _T_Initialization<M_Source>
                        }
                        export type SG<M_Source> = 
                            | readonly ['map', _T_Initialization<M_Source>]
                    }
                    export type dictionary<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                    >
                    
                    export namespace _function {
                        
                        export namespace SG {
                            
                            export namespace call {
                                
                                export namespace _arguments {
                                    
                                    export namespace O {
                                        
                                        export namespace D {
                                        }
                                        export type D<M_Source> = _T_Initialization<M_Source>
                                    }
                                    export type O<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                }
                                export type _arguments<M_Source> = _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                                
                                export namespace context {
                                }
                                export type context<M_Source> = _T_Initialization<M_Source>
                            }
                            export type call<M_Source> = {
                                readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                                readonly 'context': _T_Initialization<M_Source>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['call', {
                                readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                                readonly 'context': _T_Initialization<M_Source>
                            }]
                    }
                    export type _function<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['call', {
                            readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                            readonly 'context': _T_Initialization<M_Source>
                        }]
                    >
                    
                    export namespace optional {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<M_Source> = _T_Initialization<M_Source>
                            
                            export namespace transform {
                                
                                export namespace if_not_set {
                                }
                                export type if_not_set<M_Source> = _T_Initialization<M_Source>
                                
                                export namespace if_set {
                                }
                                export type if_set<M_Source> = _T_Initialization<M_Source>
                                
                                export namespace temp_resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
                                }
                                export type temp_resulting_node<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            }
                            export type transform<M_Source> = {
                                readonly 'if not set': _T_Initialization<M_Source>
                                readonly 'if set': _T_Initialization<M_Source>
                                readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['map', _T_Initialization<M_Source>]
                            | readonly ['transform', {
                                readonly 'if not set': _T_Initialization<M_Source>
                                readonly 'if set': _T_Initialization<M_Source>
                                readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            }]
                    }
                    export type optional<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization<M_Source>
                            readonly 'if set': _T_Initialization<M_Source>
                            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        }]
                    >
                    
                    export namespace tagged_union {
                        
                        export namespace SG {
                            
                            export namespace _switch {
                                
                                export namespace temp_resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
                                }
                                export type temp_resulting_node<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace full {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D<M_Source> = _T_Initialization<M_Source>
                                            }
                                            export type cases<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        }
                                        export type full<M_Source> = {
                                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        }
                                        
                                        export namespace partial {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D<M_Source> = _T_Initialization<M_Source>
                                            }
                                            export type cases<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                            
                                            export namespace _default {
                                            }
                                            export type _default<M_Source> = _T_Initialization<M_Source>
                                        }
                                        export type partial<M_Source> = {
                                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                            readonly 'default': _T_Initialization<M_Source>
                                        }
                                    }
                                    export type SG<M_Source> = 
                                        | readonly ['full', {
                                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        }]
                                        | readonly ['partial', {
                                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                            readonly 'default': _T_Initialization<M_Source>
                                        }]
                                }
                                export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        readonly 'default': _T_Initialization<M_Source>
                                    }]
                                >
                            }
                            export type _switch<M_Source> = {
                                readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                                readonly 'type': _i_core._T_State_Group<M_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        readonly 'default': _T_Initialization<M_Source>
                                    }]
                                >
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['switch', {
                                readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                                readonly 'type': _i_core._T_State_Group<M_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        readonly 'default': _T_Initialization<M_Source>
                                    }]
                                >
                            }]
                    }
                    export type tagged_union<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['switch', {
                            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            readonly 'type': _i_core._T_State_Group<M_Source, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    readonly 'default': _T_Initialization<M_Source>
                                }]
                            >
                        }]
                    >
                }
                export type SG<M_Source> = 
                    | readonly ['array', _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                    >]
                    | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization<M_Source>
                            readonly 'if true': _T_Initialization<M_Source>
                        }]
                    >]
                    | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                    >]
                    | readonly ['function', _i_core._T_State_Group<M_Source, 
                        | readonly ['call', {
                            readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                            readonly 'context': _T_Initialization<M_Source>
                        }]
                    >]
                    | readonly ['optional', _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization<M_Source>
                            readonly 'if set': _T_Initialization<M_Source>
                            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        }]
                    >]
                    | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                        | readonly ['switch', {
                            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            readonly 'type': _i_core._T_State_Group<M_Source, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    readonly 'default': _T_Initialization<M_Source>
                                }]
                            >
                        }]
                    >]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['array', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<M_Source>
                        readonly 'if true': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<M_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                        readonly 'context': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<M_Source>
                        readonly 'if set': _T_Initialization<M_Source>
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                    | readonly ['switch', {
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        readonly 'type': _i_core._T_State_Group<M_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                readonly 'default': _T_Initialization<M_Source>
                            }]
                        >
                    }]
                >]
            >
        }
        export type transformation<M_Source> = {
            readonly 'source': _T_Selection<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['array', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<M_Source>
                        readonly 'if true': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<M_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                        readonly 'context': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<M_Source>
                        readonly 'if set': _T_Initialization<M_Source>
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                    | readonly ['switch', {
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        readonly 'type': _i_core._T_State_Group<M_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                readonly 'default': _T_Initialization<M_Source>
                            }]
                        >
                    }]
                >]
            >
        }
    }
    export type SG<M_Source> = 
        | readonly ['block', {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'temp ordered variables': _i_core._T_List<M_Source, {
                readonly 'initialization': _T_Initialization<M_Source>
                readonly 'name': string
                readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
            }>
            readonly 'variables': _T_Variables<M_Source>
        }]
        | readonly ['change context', {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'new context': _T_Selection<M_Source>
        }]
        | readonly ['literal', {
            readonly 'value': _T_Literal<M_Source>
        }]
        | readonly ['selection', _T_Selection<M_Source>]
        | readonly ['transformation', {
            readonly 'source': _T_Selection<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['array', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<M_Source>
                        readonly 'if true': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<M_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                        readonly 'context': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<M_Source>
                        readonly 'if set': _T_Initialization<M_Source>
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                    | readonly ['switch', {
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        readonly 'type': _i_core._T_State_Group<M_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                readonly 'default': _T_Initialization<M_Source>
                            }]
                        >
                    }]
                >]
            >
        }]
}

export namespace _T_Literal {
    
    export namespace SG {
        
        export namespace array {
            
            export namespace L {
            }
            export type L<M_Source> = _T_Initialization<M_Source>
        }
        export type array<M_Source> = _i_core._T_List<M_Source, _T_Initialization<M_Source>>
        
        export namespace _boolean {
            
            export namespace SG {
                export type _false<M_Source> = null
                export type _true<M_Source> = null
            }
            export type SG<M_Source> = 
                | readonly ['false', null]
                | readonly ['true', null]
        }
        export type _boolean<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['false', null]
            | readonly ['true', null]
        >
        
        export namespace dictionary {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Initialization<M_Source>
        }
        export type dictionary<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
        
        export namespace _function {
            
            export namespace initialization {
            }
            export type initialization<M_Source> = _T_Initialization<M_Source>
            export type temp_has_parameters<M_Source> = boolean
            
            export namespace temp_resulting_node {
                
                export namespace O {
                }
                export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
            }
            export type temp_resulting_node<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
        }
        export type _function<M_Source> = {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'temp has parameters': boolean
            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Initialization<M_Source>
        }
        export type group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
        export type _null<M_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type floting_point<M_Source> = number
                export type integer<M_Source> = number
                export type signed_integer<M_Source> = number
            }
            export type SG<M_Source> = 
                | readonly ['floting point', number]
                | readonly ['integer', number]
                | readonly ['signed integer', number]
        }
        export type _number<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >
        
        export namespace optional {
            
            export namespace SG {
                export type not_set<M_Source> = null
                
                export namespace _set {
                }
                export type _set<M_Source> = _T_Initialization<M_Source>
            }
            export type SG<M_Source> = 
                | readonly ['not set', null]
                | readonly ['set', _T_Initialization<M_Source>]
        }
        export type optional<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization<M_Source>]
        >
        
        export namespace _string {
            
            export namespace delimiter {
                
                export namespace SG {
                    export type backtick<M_Source> = null
                    export type quote<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['backtick', null]
                    | readonly ['quote', null]
            }
            export type delimiter<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            export type value<M_Source> = string
        }
        export type _string<M_Source> = {
            readonly 'delimiter': _i_core._T_State_Group<M_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }
        
        export namespace tagged_union {
            export type _case<M_Source> = string
            
            export namespace value {
            }
            export type value<M_Source> = _T_Initialization<M_Source>
        }
        export type tagged_union<M_Source> = {
            readonly 'case': string
            readonly 'value': _T_Initialization<M_Source>
        }
    }
    export type SG<M_Source> = 
        | readonly ['array', _i_core._T_List<M_Source, _T_Initialization<M_Source>>]
        | readonly ['boolean', _i_core._T_State_Group<M_Source, 
            | readonly ['false', null]
            | readonly ['true', null]
        >]
        | readonly ['dictionary', _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>]
        | readonly ['function', {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'temp has parameters': boolean
            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
        }]
        | readonly ['group', _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<M_Source, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >]
        | readonly ['optional', _i_core._T_State_Group<M_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization<M_Source>]
        >]
        | readonly ['string', {
            readonly 'delimiter': _i_core._T_State_Group<M_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }]
        | readonly ['tagged union', {
            readonly 'case': string
            readonly 'value': _T_Initialization<M_Source>
        }]
}

export namespace _T_Module {
    
    export namespace type_imports {
    }
    export type type_imports<M_Source> = _i_imports_interface._T_Imports<M_Source>
    
    export namespace variable_imports {
        
        export namespace D {
            
            export namespace tail {
                export type L<M_Source> = string
            }
            export type tail<M_Source> = _i_core._T_List<M_Source, string>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace ancestor {
                        export type dependency<M_Source> = string
                        export type number_of_steps<M_Source> = number
                    }
                    export type ancestor<M_Source> = {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }
                    export type external<M_Source> = string
                    export type sibling<M_Source> = string
                }
                export type SG<M_Source> = 
                    | readonly ['ancestor', {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }]
                    | readonly ['external', string]
                    | readonly ['sibling', string]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
        export type D<M_Source> = {
            readonly 'tail': _i_core._T_List<M_Source, string>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
    }
    export type variable_imports<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'tail': _i_core._T_List<M_Source, string>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
    }>
    
    export namespace variables {
    }
    export type variables<M_Source> = _T_Variables<M_Source>
}

export namespace _T_Module_Set {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace _module {
            }
            export type _module<M_Source> = _T_Module<M_Source>
            
            export namespace _set {
            }
            export type _set<M_Source> = _T_Module_Set<M_Source>
        }
        export type SG<M_Source> = 
            | readonly ['module', _T_Module<M_Source>]
            | readonly ['set', _T_Module_Set<M_Source>]
    }
    export type D<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['module', _T_Module<M_Source>]
        | readonly ['set', _T_Module_Set<M_Source>]
    >
}

export namespace _T_Selection {
    
    export namespace start {
        
        export namespace SG {
            export type abort<M_Source> = null
            export type argument<M_Source> = string
            
            export namespace call {
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export namespace D {
                        }
                        export type D<M_Source> = _T_Initialization<M_Source>
                    }
                    export type O<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                }
                export type _arguments<M_Source> = _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                
                export namespace context {
                }
                export type context<M_Source> = _T_Selection<M_Source>
                
                export namespace source {
                }
                export type source<M_Source> = _T_Selection<M_Source>
            }
            export type call<M_Source> = {
                readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                readonly 'context': _T_Selection<M_Source>
                readonly 'source': _T_Selection<M_Source>
            }
            export type context<M_Source> = null
            export type implement_me<M_Source> = null
            
            export namespace imported_variable {
                export type _import<M_Source> = string
                export type variable<M_Source> = string
            }
            export type imported_variable<M_Source> = {
                readonly 'import': string
                readonly 'variable': string
            }
            export type parameter<M_Source> = string
            
            export namespace transform_optional_value {
                
                export namespace if_not_set {
                }
                export type if_not_set<M_Source> = _T_Selection<M_Source>
                
                export namespace if_set {
                }
                export type if_set<M_Source> = _T_Selection<M_Source>
                
                export namespace source {
                }
                export type source<M_Source> = _T_Selection<M_Source>
            }
            export type transform_optional_value<M_Source> = {
                readonly 'if not set': _T_Selection<M_Source>
                readonly 'if set': _T_Selection<M_Source>
                readonly 'source': _T_Selection<M_Source>
            }
            export type variable<M_Source> = string
        }
        export type SG<M_Source> = 
            | readonly ['abort', null]
            | readonly ['argument', string]
            | readonly ['call', {
                readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                readonly 'context': _T_Selection<M_Source>
                readonly 'source': _T_Selection<M_Source>
            }]
            | readonly ['context', null]
            | readonly ['implement me', null]
            | readonly ['imported variable', {
                readonly 'import': string
                readonly 'variable': string
            }]
            | readonly ['parameter', string]
            | readonly ['transform optional value', {
                readonly 'if not set': _T_Selection<M_Source>
                readonly 'if set': _T_Selection<M_Source>
                readonly 'source': _T_Selection<M_Source>
            }]
            | readonly ['variable', string]
    }
    export type start<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
            readonly 'context': _T_Selection<M_Source>
            readonly 'source': _T_Selection<M_Source>
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection<M_Source>
            readonly 'if set': _T_Selection<M_Source>
            readonly 'source': _T_Selection<M_Source>
        }]
        | readonly ['variable', string]
    >
    
    export namespace tail {
        export type L<M_Source> = string
    }
    export type tail<M_Source> = _i_core._T_List<M_Source, string>
}

export namespace _T_Type_Parameters {
    export type D<M_Source> = null
}

export namespace _T_Variables {
    
    export namespace D {
        
        export namespace initialization {
        }
        export type initialization<M_Source> = _T_Initialization<M_Source>
        
        export namespace _type {
            
            export namespace O {
            }
            export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
        }
        export type _type<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
    }
    export type D<M_Source> = {
        readonly 'initialization': _T_Initialization<M_Source>
        readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Initialization {
    
    export namespace SG {
        
        export namespace block {
            
            export namespace initialization {
            }
            export type initialization<M_Source> = _T_Initialization<M_Source>
            
            export namespace temp_ordered_variables {
                
                export namespace L {
                    
                    export namespace initialization {
                    }
                    export type initialization<M_Source> = _T_Initialization<M_Source>
                    export type name<M_Source> = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
                    }
                    export type _type<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                }
                export type L<M_Source> = {
                    readonly 'initialization': _T_Initialization<M_Source>
                    readonly 'name': string
                    readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                }
            }
            export type temp_ordered_variables<M_Source> = _i_core._T_List<M_Source, {
                readonly 'initialization': _T_Initialization<M_Source>
                readonly 'name': string
                readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
            }>
            
            export namespace variables {
            }
            export type variables<M_Source> = _T_Variables<M_Source>
        }
        export type block<M_Source> = {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'temp ordered variables': _i_core._T_List<M_Source, {
                readonly 'initialization': _T_Initialization<M_Source>
                readonly 'name': string
                readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
            }>
            readonly 'variables': _T_Variables<M_Source>
        }
        
        export namespace change_context {
            
            export namespace initialization {
            }
            export type initialization<M_Source> = _T_Initialization<M_Source>
            
            export namespace new_context {
            }
            export type new_context<M_Source> = _T_Selection<M_Source>
        }
        export type change_context<M_Source> = {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'new context': _T_Selection<M_Source>
        }
        
        export namespace literal {
            
            export namespace value {
            }
            export type value<M_Source> = _T_Literal<M_Source>
        }
        export type literal<M_Source> = {
            readonly 'value': _T_Literal<M_Source>
        }
        
        export namespace selection {
        }
        export type selection<M_Source> = _T_Selection<M_Source>
        
        export namespace transformation {
            
            export namespace source {
            }
            export type source<M_Source> = _T_Selection<M_Source>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace array {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<M_Source> = _T_Initialization<M_Source>
                        }
                        export type SG<M_Source> = 
                            | readonly ['map', _T_Initialization<M_Source>]
                    }
                    export type array<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                    >
                    
                    export namespace _boolean {
                        
                        export namespace SG {
                            export type not<M_Source> = null
                            
                            export namespace transform {
                                
                                export namespace if_false {
                                }
                                export type if_false<M_Source> = _T_Initialization<M_Source>
                                
                                export namespace if_true {
                                }
                                export type if_true<M_Source> = _T_Initialization<M_Source>
                            }
                            export type transform<M_Source> = {
                                readonly 'if false': _T_Initialization<M_Source>
                                readonly 'if true': _T_Initialization<M_Source>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['not', null]
                            | readonly ['transform', {
                                readonly 'if false': _T_Initialization<M_Source>
                                readonly 'if true': _T_Initialization<M_Source>
                            }]
                    }
                    export type _boolean<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization<M_Source>
                            readonly 'if true': _T_Initialization<M_Source>
                        }]
                    >
                    
                    export namespace dictionary {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<M_Source> = _T_Initialization<M_Source>
                        }
                        export type SG<M_Source> = 
                            | readonly ['map', _T_Initialization<M_Source>]
                    }
                    export type dictionary<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                    >
                    
                    export namespace _function {
                        
                        export namespace SG {
                            
                            export namespace call {
                                
                                export namespace _arguments {
                                    
                                    export namespace O {
                                        
                                        export namespace D {
                                        }
                                        export type D<M_Source> = _T_Initialization<M_Source>
                                    }
                                    export type O<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                }
                                export type _arguments<M_Source> = _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                                
                                export namespace context {
                                }
                                export type context<M_Source> = _T_Initialization<M_Source>
                            }
                            export type call<M_Source> = {
                                readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                                readonly 'context': _T_Initialization<M_Source>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['call', {
                                readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                                readonly 'context': _T_Initialization<M_Source>
                            }]
                    }
                    export type _function<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['call', {
                            readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                            readonly 'context': _T_Initialization<M_Source>
                        }]
                    >
                    
                    export namespace optional {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map<M_Source> = _T_Initialization<M_Source>
                            
                            export namespace transform {
                                
                                export namespace if_not_set {
                                }
                                export type if_not_set<M_Source> = _T_Initialization<M_Source>
                                
                                export namespace if_set {
                                }
                                export type if_set<M_Source> = _T_Initialization<M_Source>
                                
                                export namespace temp_resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
                                }
                                export type temp_resulting_node<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            }
                            export type transform<M_Source> = {
                                readonly 'if not set': _T_Initialization<M_Source>
                                readonly 'if set': _T_Initialization<M_Source>
                                readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['map', _T_Initialization<M_Source>]
                            | readonly ['transform', {
                                readonly 'if not set': _T_Initialization<M_Source>
                                readonly 'if set': _T_Initialization<M_Source>
                                readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            }]
                    }
                    export type optional<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization<M_Source>
                            readonly 'if set': _T_Initialization<M_Source>
                            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        }]
                    >
                    
                    export namespace tagged_union {
                        
                        export namespace SG {
                            
                            export namespace _switch {
                                
                                export namespace temp_resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
                                }
                                export type temp_resulting_node<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace full {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D<M_Source> = _T_Initialization<M_Source>
                                            }
                                            export type cases<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        }
                                        export type full<M_Source> = {
                                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        }
                                        
                                        export namespace partial {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D<M_Source> = _T_Initialization<M_Source>
                                            }
                                            export type cases<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                            
                                            export namespace _default {
                                            }
                                            export type _default<M_Source> = _T_Initialization<M_Source>
                                        }
                                        export type partial<M_Source> = {
                                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                            readonly 'default': _T_Initialization<M_Source>
                                        }
                                    }
                                    export type SG<M_Source> = 
                                        | readonly ['full', {
                                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        }]
                                        | readonly ['partial', {
                                            readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                            readonly 'default': _T_Initialization<M_Source>
                                        }]
                                }
                                export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        readonly 'default': _T_Initialization<M_Source>
                                    }]
                                >
                            }
                            export type _switch<M_Source> = {
                                readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                                readonly 'type': _i_core._T_State_Group<M_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        readonly 'default': _T_Initialization<M_Source>
                                    }]
                                >
                            }
                        }
                        export type SG<M_Source> = 
                            | readonly ['switch', {
                                readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                                readonly 'type': _i_core._T_State_Group<M_Source, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                        readonly 'default': _T_Initialization<M_Source>
                                    }]
                                >
                            }]
                    }
                    export type tagged_union<M_Source> = _i_core._T_State_Group<M_Source, 
                        | readonly ['switch', {
                            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            readonly 'type': _i_core._T_State_Group<M_Source, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    readonly 'default': _T_Initialization<M_Source>
                                }]
                            >
                        }]
                    >
                }
                export type SG<M_Source> = 
                    | readonly ['array', _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                    >]
                    | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization<M_Source>
                            readonly 'if true': _T_Initialization<M_Source>
                        }]
                    >]
                    | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                    >]
                    | readonly ['function', _i_core._T_State_Group<M_Source, 
                        | readonly ['call', {
                            readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                            readonly 'context': _T_Initialization<M_Source>
                        }]
                    >]
                    | readonly ['optional', _i_core._T_State_Group<M_Source, 
                        | readonly ['map', _T_Initialization<M_Source>]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization<M_Source>
                            readonly 'if set': _T_Initialization<M_Source>
                            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        }]
                    >]
                    | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                        | readonly ['switch', {
                            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                            readonly 'type': _i_core._T_State_Group<M_Source, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                    readonly 'default': _T_Initialization<M_Source>
                                }]
                            >
                        }]
                    >]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['array', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<M_Source>
                        readonly 'if true': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<M_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                        readonly 'context': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<M_Source>
                        readonly 'if set': _T_Initialization<M_Source>
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                    | readonly ['switch', {
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        readonly 'type': _i_core._T_State_Group<M_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                readonly 'default': _T_Initialization<M_Source>
                            }]
                        >
                    }]
                >]
            >
        }
        export type transformation<M_Source> = {
            readonly 'source': _T_Selection<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['array', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<M_Source>
                        readonly 'if true': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<M_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                        readonly 'context': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<M_Source>
                        readonly 'if set': _T_Initialization<M_Source>
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                    | readonly ['switch', {
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        readonly 'type': _i_core._T_State_Group<M_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                readonly 'default': _T_Initialization<M_Source>
                            }]
                        >
                    }]
                >]
            >
        }
    }
    export type SG<M_Source> = 
        | readonly ['block', {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'temp ordered variables': _i_core._T_List<M_Source, {
                readonly 'initialization': _T_Initialization<M_Source>
                readonly 'name': string
                readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
            }>
            readonly 'variables': _T_Variables<M_Source>
        }]
        | readonly ['change context', {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'new context': _T_Selection<M_Source>
        }]
        | readonly ['literal', {
            readonly 'value': _T_Literal<M_Source>
        }]
        | readonly ['selection', _T_Selection<M_Source>]
        | readonly ['transformation', {
            readonly 'source': _T_Selection<M_Source>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['array', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['boolean', _i_core._T_State_Group<M_Source, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization<M_Source>
                        readonly 'if true': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                >]
                | readonly ['function', _i_core._T_State_Group<M_Source, 
                    | readonly ['call', {
                        readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                        readonly 'context': _T_Initialization<M_Source>
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<M_Source, 
                    | readonly ['map', _T_Initialization<M_Source>]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization<M_Source>
                        readonly 'if set': _T_Initialization<M_Source>
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<M_Source, 
                    | readonly ['switch', {
                        readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
                        readonly 'type': _i_core._T_State_Group<M_Source, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                                readonly 'default': _T_Initialization<M_Source>
                            }]
                        >
                    }]
                >]
            >
        }]
}

export namespace Literal {
    
    export namespace SG {
        
        export namespace array {
            
            export namespace L {
            }
            export type L<M_Source> = _T_Initialization<M_Source>
        }
        export type array<M_Source> = _i_core._T_List<M_Source, _T_Initialization<M_Source>>
        
        export namespace _boolean {
            
            export namespace SG {
                export type _false<M_Source> = null
                export type _true<M_Source> = null
            }
            export type SG<M_Source> = 
                | readonly ['false', null]
                | readonly ['true', null]
        }
        export type _boolean<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['false', null]
            | readonly ['true', null]
        >
        
        export namespace dictionary {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Initialization<M_Source>
        }
        export type dictionary<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
        
        export namespace _function {
            
            export namespace initialization {
            }
            export type initialization<M_Source> = _T_Initialization<M_Source>
            export type temp_has_parameters<M_Source> = boolean
            
            export namespace temp_resulting_node {
                
                export namespace O {
                }
                export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
            }
            export type temp_resulting_node<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
        }
        export type _function<M_Source> = {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'temp has parameters': boolean
            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Initialization<M_Source>
        }
        export type group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
        export type _null<M_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type floting_point<M_Source> = number
                export type integer<M_Source> = number
                export type signed_integer<M_Source> = number
            }
            export type SG<M_Source> = 
                | readonly ['floting point', number]
                | readonly ['integer', number]
                | readonly ['signed integer', number]
        }
        export type _number<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >
        
        export namespace optional {
            
            export namespace SG {
                export type not_set<M_Source> = null
                
                export namespace _set {
                }
                export type _set<M_Source> = _T_Initialization<M_Source>
            }
            export type SG<M_Source> = 
                | readonly ['not set', null]
                | readonly ['set', _T_Initialization<M_Source>]
        }
        export type optional<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization<M_Source>]
        >
        
        export namespace _string {
            
            export namespace delimiter {
                
                export namespace SG {
                    export type backtick<M_Source> = null
                    export type quote<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['backtick', null]
                    | readonly ['quote', null]
            }
            export type delimiter<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            export type value<M_Source> = string
        }
        export type _string<M_Source> = {
            readonly 'delimiter': _i_core._T_State_Group<M_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }
        
        export namespace tagged_union {
            export type _case<M_Source> = string
            
            export namespace value {
            }
            export type value<M_Source> = _T_Initialization<M_Source>
        }
        export type tagged_union<M_Source> = {
            readonly 'case': string
            readonly 'value': _T_Initialization<M_Source>
        }
    }
    export type SG<M_Source> = 
        | readonly ['array', _i_core._T_List<M_Source, _T_Initialization<M_Source>>]
        | readonly ['boolean', _i_core._T_State_Group<M_Source, 
            | readonly ['false', null]
            | readonly ['true', null]
        >]
        | readonly ['dictionary', _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>]
        | readonly ['function', {
            readonly 'initialization': _T_Initialization<M_Source>
            readonly 'temp has parameters': boolean
            readonly 'temp resulting node': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
        }]
        | readonly ['group', _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<M_Source, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >]
        | readonly ['optional', _i_core._T_State_Group<M_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization<M_Source>]
        >]
        | readonly ['string', {
            readonly 'delimiter': _i_core._T_State_Group<M_Source, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }]
        | readonly ['tagged union', {
            readonly 'case': string
            readonly 'value': _T_Initialization<M_Source>
        }]
}

export namespace Module {
    
    export namespace type_imports {
    }
    export type type_imports<M_Source> = _i_imports_interface._T_Imports<M_Source>
    
    export namespace variable_imports {
        
        export namespace D {
            
            export namespace tail {
                export type L<M_Source> = string
            }
            export type tail<M_Source> = _i_core._T_List<M_Source, string>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace ancestor {
                        export type dependency<M_Source> = string
                        export type number_of_steps<M_Source> = number
                    }
                    export type ancestor<M_Source> = {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }
                    export type external<M_Source> = string
                    export type sibling<M_Source> = string
                }
                export type SG<M_Source> = 
                    | readonly ['ancestor', {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }]
                    | readonly ['external', string]
                    | readonly ['sibling', string]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
        export type D<M_Source> = {
            readonly 'tail': _i_core._T_List<M_Source, string>
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
    }
    export type variable_imports<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'tail': _i_core._T_List<M_Source, string>
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
    }>
    
    export namespace variables {
    }
    export type variables<M_Source> = _T_Variables<M_Source>
}

export namespace Module_Set {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace _module {
            }
            export type _module<M_Source> = _T_Module<M_Source>
            
            export namespace _set {
            }
            export type _set<M_Source> = _T_Module_Set<M_Source>
        }
        export type SG<M_Source> = 
            | readonly ['module', _T_Module<M_Source>]
            | readonly ['set', _T_Module_Set<M_Source>]
    }
    export type D<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['module', _T_Module<M_Source>]
        | readonly ['set', _T_Module_Set<M_Source>]
    >
}

export namespace Selection {
    
    export namespace start {
        
        export namespace SG {
            export type abort<M_Source> = null
            export type argument<M_Source> = string
            
            export namespace call {
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export namespace D {
                        }
                        export type D<M_Source> = _T_Initialization<M_Source>
                    }
                    export type O<M_Source> = _i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>
                }
                export type _arguments<M_Source> = _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                
                export namespace context {
                }
                export type context<M_Source> = _T_Selection<M_Source>
                
                export namespace source {
                }
                export type source<M_Source> = _T_Selection<M_Source>
            }
            export type call<M_Source> = {
                readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                readonly 'context': _T_Selection<M_Source>
                readonly 'source': _T_Selection<M_Source>
            }
            export type context<M_Source> = null
            export type implement_me<M_Source> = null
            
            export namespace imported_variable {
                export type _import<M_Source> = string
                export type variable<M_Source> = string
            }
            export type imported_variable<M_Source> = {
                readonly 'import': string
                readonly 'variable': string
            }
            export type parameter<M_Source> = string
            
            export namespace transform_optional_value {
                
                export namespace if_not_set {
                }
                export type if_not_set<M_Source> = _T_Selection<M_Source>
                
                export namespace if_set {
                }
                export type if_set<M_Source> = _T_Selection<M_Source>
                
                export namespace source {
                }
                export type source<M_Source> = _T_Selection<M_Source>
            }
            export type transform_optional_value<M_Source> = {
                readonly 'if not set': _T_Selection<M_Source>
                readonly 'if set': _T_Selection<M_Source>
                readonly 'source': _T_Selection<M_Source>
            }
            export type variable<M_Source> = string
        }
        export type SG<M_Source> = 
            | readonly ['abort', null]
            | readonly ['argument', string]
            | readonly ['call', {
                readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
                readonly 'context': _T_Selection<M_Source>
                readonly 'source': _T_Selection<M_Source>
            }]
            | readonly ['context', null]
            | readonly ['implement me', null]
            | readonly ['imported variable', {
                readonly 'import': string
                readonly 'variable': string
            }]
            | readonly ['parameter', string]
            | readonly ['transform optional value', {
                readonly 'if not set': _T_Selection<M_Source>
                readonly 'if set': _T_Selection<M_Source>
                readonly 'source': _T_Selection<M_Source>
            }]
            | readonly ['variable', string]
    }
    export type start<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _et.Optional_Value<_i_core._T_Dictionary<M_Source, _T_Initialization<M_Source>>>
            readonly 'context': _T_Selection<M_Source>
            readonly 'source': _T_Selection<M_Source>
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection<M_Source>
            readonly 'if set': _T_Selection<M_Source>
            readonly 'source': _T_Selection<M_Source>
        }]
        | readonly ['variable', string]
    >
    
    export namespace tail {
        export type L<M_Source> = string
    }
    export type tail<M_Source> = _i_core._T_List<M_Source, string>
}

export namespace Type_Parameters {
    export type D<M_Source> = null
}

export namespace Variables {
    
    export namespace D {
        
        export namespace initialization {
        }
        export type initialization<M_Source> = _T_Initialization<M_Source>
        
        export namespace _type {
            
            export namespace O {
            }
            export type O<M_Source> = _i_imports_interface._T_Type<M_Source>
        }
        export type _type<M_Source> = _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
    }
    export type D<M_Source> = {
        readonly 'initialization': _T_Initialization<M_Source>
        readonly 'type': _et.Optional_Value<_i_imports_interface._T_Type<M_Source>>
    }
}
