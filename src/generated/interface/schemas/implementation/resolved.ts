import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/resolved"
import * as _i_imports_interface from "../interface/resolved"

// **** TYPES

export type _T_Initialization = _i_core._T_State_Group<null, 
    | readonly ['block', {
        readonly 'initialization': _T_Initialization
        readonly 'temp ordered variables': _i_core._T_List<null, {
            readonly 'initialization': _T_Initialization
            readonly 'name': string
            readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
        }>
        readonly 'variables': _T_Variables
    }]
    | readonly ['change context', {
        readonly 'initialization': _T_Initialization
        readonly 'new context': _T_Selection
    }]
    | readonly ['literal', {
        readonly 'value': _T_Literal
    }]
    | readonly ['selection', _T_Selection]
    | readonly ['transformation', {
        readonly 'source': _T_Selection
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['array', _i_core._T_State_Group<null, 
                | readonly ['map', _T_Initialization]
            >]
            | readonly ['boolean', _i_core._T_State_Group<null, 
                | readonly ['not', null]
                | readonly ['transform', {
                    readonly 'if false': _T_Initialization
                    readonly 'if true': _T_Initialization
                }]
            >]
            | readonly ['dictionary', _i_core._T_State_Group<null, 
                | readonly ['map', _T_Initialization]
            >]
            | readonly ['function', _i_core._T_State_Group<null, 
                | readonly ['call', {
                    readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                    readonly 'context': _T_Initialization
                }]
            >]
            | readonly ['optional', _i_core._T_State_Group<null, 
                | readonly ['map', _T_Initialization]
                | readonly ['transform', {
                    readonly 'if not set': _T_Initialization
                    readonly 'if set': _T_Initialization
                }]
            >]
            | readonly ['tagged union', _i_core._T_State_Group<null, 
                | readonly ['switch', {
                    readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                    readonly 'type': _i_core._T_State_Group<null, 
                        | readonly ['full', {
                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                        }]
                        | readonly ['partial', {
                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                            readonly 'default': _T_Initialization
                        }]
                    >
                }]
            >]
        >
    }]
>

export type _T_Literal = _i_core._T_State_Group<null, 
    | readonly ['array', _i_core._T_List<null, _T_Initialization>]
    | readonly ['boolean', _i_core._T_State_Group<null, 
        | readonly ['false', null]
        | readonly ['true', null]
    >]
    | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Initialization>]
    | readonly ['function', {
        readonly 'initialization': _T_Initialization
        readonly 'temp has parameters': boolean
    }]
    | readonly ['group', _i_core._T_Dictionary<null, _T_Initialization>]
    | readonly ['null', null]
    | readonly ['number', _i_core._T_State_Group<null, 
        | readonly ['floting point', number]
        | readonly ['integer', number]
        | readonly ['signed integer', number]
    >]
    | readonly ['optional', _i_core._T_State_Group<null, 
        | readonly ['not set', null]
        | readonly ['set', _T_Initialization]
    >]
    | readonly ['string', {
        readonly 'delimiter': _i_core._T_State_Group<null, 
            | readonly ['backtick', null]
            | readonly ['quote', null]
        >
        readonly 'value': string
    }]
    | readonly ['tagged union', {
        readonly 'case': string
        readonly 'value': _T_Initialization
    }]
>

export type _T_Module = {
    readonly 'type imports': _i_imports_interface._T_Imports
    readonly 'variable imports': _i_core._T_Dictionary<null, {
        readonly 'tail': _i_core._T_List<null, string>
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
    }>
    readonly 'variables': _T_Variables
}

export type _T_Module_Set = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
    | readonly ['module', _T_Module]
    | readonly ['set', _T_Module_Set]
>>

export type _T_Selection = {
    readonly 'start': _i_core._T_State_Group<null, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
            readonly 'context': _T_Selection
            readonly 'source': _T_Selection
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection
            readonly 'if set': _T_Selection
            readonly 'source': _T_Selection
        }]
        | readonly ['variable', string]
    >
    readonly 'tail': _i_core._T_List<null, string>
}

export type _T_Type_Parameters = _i_core._T_Dictionary<null, null>

export type _T_Variables = _i_core._T_Dictionary<null, {
    readonly 'initialization': _T_Initialization
    readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Initialization = _T_Initialization

export type Literal = _T_Literal

export type Module = _T_Module

export type Module_Set = _T_Module_Set

export type Selection = _T_Selection

export type Type_Parameters = _T_Type_Parameters

export type Variables = _T_Variables

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Initialization {
    
    export namespace SG {
        
        export namespace block {
            
            export namespace initialization {
            }
            export type initialization = _T_Initialization
            
            export namespace temp_ordered_variables {
                
                export namespace L {
                    
                    export namespace initialization {
                    }
                    export type initialization = _T_Initialization
                    export type name = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O = _i_imports_interface._T_Type
                    }
                    export type _type = _pt.Optional_Value<_i_imports_interface._T_Type>
                }
                export type L = {
                    readonly 'initialization': _T_Initialization
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
                }
            }
            export type temp_ordered_variables = _i_core._T_List<null, {
                readonly 'initialization': _T_Initialization
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
            }>
            
            export namespace variables {
            }
            export type variables = _T_Variables
        }
        export type block = {
            readonly 'initialization': _T_Initialization
            readonly 'temp ordered variables': _i_core._T_List<null, {
                readonly 'initialization': _T_Initialization
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
            }>
            readonly 'variables': _T_Variables
        }
        
        export namespace change_context {
            
            export namespace initialization {
            }
            export type initialization = _T_Initialization
            
            export namespace new_context {
            }
            export type new_context = _T_Selection
        }
        export type change_context = {
            readonly 'initialization': _T_Initialization
            readonly 'new context': _T_Selection
        }
        
        export namespace literal {
            
            export namespace value {
            }
            export type value = _T_Literal
        }
        export type literal = {
            readonly 'value': _T_Literal
        }
        
        export namespace selection {
        }
        export type selection = _T_Selection
        
        export namespace transformation {
            
            export namespace source {
            }
            export type source = _T_Selection
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace array {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map = _T_Initialization
                        }
                        export type SG = 
                            | readonly ['map', _T_Initialization]
                    }
                    export type array = _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                    >
                    
                    export namespace _boolean {
                        
                        export namespace SG {
                            export type not = null
                            
                            export namespace transform {
                                
                                export namespace if_false {
                                }
                                export type if_false = _T_Initialization
                                
                                export namespace if_true {
                                }
                                export type if_true = _T_Initialization
                            }
                            export type transform = {
                                readonly 'if false': _T_Initialization
                                readonly 'if true': _T_Initialization
                            }
                        }
                        export type SG = 
                            | readonly ['not', null]
                            | readonly ['transform', {
                                readonly 'if false': _T_Initialization
                                readonly 'if true': _T_Initialization
                            }]
                    }
                    export type _boolean = _i_core._T_State_Group<null, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization
                            readonly 'if true': _T_Initialization
                        }]
                    >
                    
                    export namespace dictionary {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map = _T_Initialization
                        }
                        export type SG = 
                            | readonly ['map', _T_Initialization]
                    }
                    export type dictionary = _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                    >
                    
                    export namespace _function {
                        
                        export namespace SG {
                            
                            export namespace call {
                                
                                export namespace _arguments {
                                    
                                    export namespace O {
                                        
                                        export namespace D {
                                        }
                                        export type D = _T_Initialization
                                    }
                                    export type O = _i_core._T_Dictionary<null, _T_Initialization>
                                }
                                export type _arguments = _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                                
                                export namespace context {
                                }
                                export type context = _T_Initialization
                            }
                            export type call = {
                                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                                readonly 'context': _T_Initialization
                            }
                        }
                        export type SG = 
                            | readonly ['call', {
                                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                                readonly 'context': _T_Initialization
                            }]
                    }
                    export type _function = _i_core._T_State_Group<null, 
                        | readonly ['call', {
                            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                            readonly 'context': _T_Initialization
                        }]
                    >
                    
                    export namespace optional {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map = _T_Initialization
                            
                            export namespace transform {
                                
                                export namespace if_not_set {
                                }
                                export type if_not_set = _T_Initialization
                                
                                export namespace if_set {
                                }
                                export type if_set = _T_Initialization
                            }
                            export type transform = {
                                readonly 'if not set': _T_Initialization
                                readonly 'if set': _T_Initialization
                            }
                        }
                        export type SG = 
                            | readonly ['map', _T_Initialization]
                            | readonly ['transform', {
                                readonly 'if not set': _T_Initialization
                                readonly 'if set': _T_Initialization
                            }]
                    }
                    export type optional = _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization
                            readonly 'if set': _T_Initialization
                        }]
                    >
                    
                    export namespace tagged_union {
                        
                        export namespace SG {
                            
                            export namespace _switch {
                                
                                export namespace resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O = _i_imports_interface._T_Type
                                }
                                export type resulting_node = _pt.Optional_Value<_i_imports_interface._T_Type>
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace full {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D = _T_Initialization
                                            }
                                            export type cases = _i_core._T_Dictionary<null, _T_Initialization>
                                        }
                                        export type full = {
                                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        }
                                        
                                        export namespace partial {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D = _T_Initialization
                                            }
                                            export type cases = _i_core._T_Dictionary<null, _T_Initialization>
                                            
                                            export namespace _default {
                                            }
                                            export type _default = _T_Initialization
                                        }
                                        export type partial = {
                                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                            readonly 'default': _T_Initialization
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['full', {
                                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        }]
                                        | readonly ['partial', {
                                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                            readonly 'default': _T_Initialization
                                        }]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        readonly 'default': _T_Initialization
                                    }]
                                >
                            }
                            export type _switch = {
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        readonly 'default': _T_Initialization
                                    }]
                                >
                            }
                        }
                        export type SG = 
                            | readonly ['switch', {
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        readonly 'default': _T_Initialization
                                    }]
                                >
                            }]
                    }
                    export type tagged_union = _i_core._T_State_Group<null, 
                        | readonly ['switch', {
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    readonly 'default': _T_Initialization
                                }]
                            >
                        }]
                    >
                }
                export type SG = 
                    | readonly ['array', _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                    >]
                    | readonly ['boolean', _i_core._T_State_Group<null, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization
                            readonly 'if true': _T_Initialization
                        }]
                    >]
                    | readonly ['dictionary', _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                    >]
                    | readonly ['function', _i_core._T_State_Group<null, 
                        | readonly ['call', {
                            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                            readonly 'context': _T_Initialization
                        }]
                    >]
                    | readonly ['optional', _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization
                            readonly 'if set': _T_Initialization
                        }]
                    >]
                    | readonly ['tagged union', _i_core._T_State_Group<null, 
                        | readonly ['switch', {
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    readonly 'default': _T_Initialization
                                }]
                            >
                        }]
                    >]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['array', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['boolean', _i_core._T_State_Group<null, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization
                        readonly 'if true': _T_Initialization
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['function', _i_core._T_State_Group<null, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                        readonly 'context': _T_Initialization
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization
                        readonly 'if set': _T_Initialization
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<null, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                readonly 'default': _T_Initialization
                            }]
                        >
                    }]
                >]
            >
        }
        export type transformation = {
            readonly 'source': _T_Selection
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['array', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['boolean', _i_core._T_State_Group<null, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization
                        readonly 'if true': _T_Initialization
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['function', _i_core._T_State_Group<null, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                        readonly 'context': _T_Initialization
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization
                        readonly 'if set': _T_Initialization
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<null, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                readonly 'default': _T_Initialization
                            }]
                        >
                    }]
                >]
            >
        }
    }
    export type SG = 
        | readonly ['block', {
            readonly 'initialization': _T_Initialization
            readonly 'temp ordered variables': _i_core._T_List<null, {
                readonly 'initialization': _T_Initialization
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
            }>
            readonly 'variables': _T_Variables
        }]
        | readonly ['change context', {
            readonly 'initialization': _T_Initialization
            readonly 'new context': _T_Selection
        }]
        | readonly ['literal', {
            readonly 'value': _T_Literal
        }]
        | readonly ['selection', _T_Selection]
        | readonly ['transformation', {
            readonly 'source': _T_Selection
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['array', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['boolean', _i_core._T_State_Group<null, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization
                        readonly 'if true': _T_Initialization
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['function', _i_core._T_State_Group<null, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                        readonly 'context': _T_Initialization
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization
                        readonly 'if set': _T_Initialization
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<null, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                readonly 'default': _T_Initialization
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
            export type L = _T_Initialization
        }
        export type array = _i_core._T_List<null, _T_Initialization>
        
        export namespace _boolean {
            
            export namespace SG {
                export type _false = null
                export type _true = null
            }
            export type SG = 
                | readonly ['false', null]
                | readonly ['true', null]
        }
        export type _boolean = _i_core._T_State_Group<null, 
            | readonly ['false', null]
            | readonly ['true', null]
        >
        
        export namespace dictionary {
            
            export namespace D {
            }
            export type D = _T_Initialization
        }
        export type dictionary = _i_core._T_Dictionary<null, _T_Initialization>
        
        export namespace _function {
            
            export namespace initialization {
            }
            export type initialization = _T_Initialization
            export type temp_has_parameters = boolean
        }
        export type _function = {
            readonly 'initialization': _T_Initialization
            readonly 'temp has parameters': boolean
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D = _T_Initialization
        }
        export type group = _i_core._T_Dictionary<null, _T_Initialization>
        export type _null = null
        
        export namespace _number {
            
            export namespace SG {
                export type floting_point = number
                export type integer = number
                export type signed_integer = number
            }
            export type SG = 
                | readonly ['floting point', number]
                | readonly ['integer', number]
                | readonly ['signed integer', number]
        }
        export type _number = _i_core._T_State_Group<null, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >
        
        export namespace optional {
            
            export namespace SG {
                export type not_set = null
                
                export namespace _set {
                }
                export type _set = _T_Initialization
            }
            export type SG = 
                | readonly ['not set', null]
                | readonly ['set', _T_Initialization]
        }
        export type optional = _i_core._T_State_Group<null, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization]
        >
        
        export namespace _string {
            
            export namespace delimiter {
                
                export namespace SG {
                    export type backtick = null
                    export type quote = null
                }
                export type SG = 
                    | readonly ['backtick', null]
                    | readonly ['quote', null]
            }
            export type delimiter = _i_core._T_State_Group<null, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            export type value = string
        }
        export type _string = {
            readonly 'delimiter': _i_core._T_State_Group<null, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }
        
        export namespace tagged_union {
            export type _case = string
            
            export namespace value {
            }
            export type value = _T_Initialization
        }
        export type tagged_union = {
            readonly 'case': string
            readonly 'value': _T_Initialization
        }
    }
    export type SG = 
        | readonly ['array', _i_core._T_List<null, _T_Initialization>]
        | readonly ['boolean', _i_core._T_State_Group<null, 
            | readonly ['false', null]
            | readonly ['true', null]
        >]
        | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Initialization>]
        | readonly ['function', {
            readonly 'initialization': _T_Initialization
            readonly 'temp has parameters': boolean
        }]
        | readonly ['group', _i_core._T_Dictionary<null, _T_Initialization>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<null, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >]
        | readonly ['optional', _i_core._T_State_Group<null, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization]
        >]
        | readonly ['string', {
            readonly 'delimiter': _i_core._T_State_Group<null, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }]
        | readonly ['tagged union', {
            readonly 'case': string
            readonly 'value': _T_Initialization
        }]
}

export namespace _T_Module {
    
    export namespace type_imports {
    }
    export type type_imports = _i_imports_interface._T_Imports
    
    export namespace variable_imports {
        
        export namespace D {
            
            export namespace tail {
                export type L = string
            }
            export type tail = _i_core._T_List<null, string>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace ancestor {
                        export type dependency = string
                        export type number_of_steps = number
                    }
                    export type ancestor = {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }
                    export type external = string
                    export type sibling = string
                }
                export type SG = 
                    | readonly ['ancestor', {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }]
                    | readonly ['external', string]
                    | readonly ['sibling', string]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
        export type D = {
            readonly 'tail': _i_core._T_List<null, string>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
    }
    export type variable_imports = _i_core._T_Dictionary<null, {
        readonly 'tail': _i_core._T_List<null, string>
        readonly 'type': _i_core._T_State_Group<null, 
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
    export type variables = _T_Variables
}

export namespace _T_Module_Set {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace _module {
            }
            export type _module = _T_Module
            
            export namespace _set {
            }
            export type _set = _T_Module_Set
        }
        export type SG = 
            | readonly ['module', _T_Module]
            | readonly ['set', _T_Module_Set]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['module', _T_Module]
        | readonly ['set', _T_Module_Set]
    >
}

export namespace _T_Selection {
    
    export namespace start {
        
        export namespace SG {
            export type abort = null
            export type argument = string
            
            export namespace call {
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export namespace D {
                        }
                        export type D = _T_Initialization
                    }
                    export type O = _i_core._T_Dictionary<null, _T_Initialization>
                }
                export type _arguments = _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                
                export namespace context {
                }
                export type context = _T_Selection
                
                export namespace source {
                }
                export type source = _T_Selection
            }
            export type call = {
                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                readonly 'context': _T_Selection
                readonly 'source': _T_Selection
            }
            export type context = null
            export type implement_me = null
            
            export namespace imported_variable {
                export type _import = string
                export type variable = string
            }
            export type imported_variable = {
                readonly 'import': string
                readonly 'variable': string
            }
            export type parameter = string
            
            export namespace transform_optional_value {
                
                export namespace if_not_set {
                }
                export type if_not_set = _T_Selection
                
                export namespace if_set {
                }
                export type if_set = _T_Selection
                
                export namespace source {
                }
                export type source = _T_Selection
            }
            export type transform_optional_value = {
                readonly 'if not set': _T_Selection
                readonly 'if set': _T_Selection
                readonly 'source': _T_Selection
            }
            export type variable = string
        }
        export type SG = 
            | readonly ['abort', null]
            | readonly ['argument', string]
            | readonly ['call', {
                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                readonly 'context': _T_Selection
                readonly 'source': _T_Selection
            }]
            | readonly ['context', null]
            | readonly ['implement me', null]
            | readonly ['imported variable', {
                readonly 'import': string
                readonly 'variable': string
            }]
            | readonly ['parameter', string]
            | readonly ['transform optional value', {
                readonly 'if not set': _T_Selection
                readonly 'if set': _T_Selection
                readonly 'source': _T_Selection
            }]
            | readonly ['variable', string]
    }
    export type start = _i_core._T_State_Group<null, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
            readonly 'context': _T_Selection
            readonly 'source': _T_Selection
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection
            readonly 'if set': _T_Selection
            readonly 'source': _T_Selection
        }]
        | readonly ['variable', string]
    >
    
    export namespace tail {
        export type L = string
    }
    export type tail = _i_core._T_List<null, string>
}

export namespace _T_Type_Parameters {
    export type D = null
}

export namespace _T_Variables {
    
    export namespace D {
        
        export namespace initialization {
        }
        export type initialization = _T_Initialization
        
        export namespace _type {
            
            export namespace O {
            }
            export type O = _i_imports_interface._T_Type
        }
        export type _type = _pt.Optional_Value<_i_imports_interface._T_Type>
    }
    export type D = {
        readonly 'initialization': _T_Initialization
        readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Initialization {
    
    export namespace SG {
        
        export namespace block {
            
            export namespace initialization {
            }
            export type initialization = _T_Initialization
            
            export namespace temp_ordered_variables {
                
                export namespace L {
                    
                    export namespace initialization {
                    }
                    export type initialization = _T_Initialization
                    export type name = string
                    
                    export namespace _type {
                        
                        export namespace O {
                        }
                        export type O = _i_imports_interface._T_Type
                    }
                    export type _type = _pt.Optional_Value<_i_imports_interface._T_Type>
                }
                export type L = {
                    readonly 'initialization': _T_Initialization
                    readonly 'name': string
                    readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
                }
            }
            export type temp_ordered_variables = _i_core._T_List<null, {
                readonly 'initialization': _T_Initialization
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
            }>
            
            export namespace variables {
            }
            export type variables = _T_Variables
        }
        export type block = {
            readonly 'initialization': _T_Initialization
            readonly 'temp ordered variables': _i_core._T_List<null, {
                readonly 'initialization': _T_Initialization
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
            }>
            readonly 'variables': _T_Variables
        }
        
        export namespace change_context {
            
            export namespace initialization {
            }
            export type initialization = _T_Initialization
            
            export namespace new_context {
            }
            export type new_context = _T_Selection
        }
        export type change_context = {
            readonly 'initialization': _T_Initialization
            readonly 'new context': _T_Selection
        }
        
        export namespace literal {
            
            export namespace value {
            }
            export type value = _T_Literal
        }
        export type literal = {
            readonly 'value': _T_Literal
        }
        
        export namespace selection {
        }
        export type selection = _T_Selection
        
        export namespace transformation {
            
            export namespace source {
            }
            export type source = _T_Selection
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace array {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map = _T_Initialization
                        }
                        export type SG = 
                            | readonly ['map', _T_Initialization]
                    }
                    export type array = _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                    >
                    
                    export namespace _boolean {
                        
                        export namespace SG {
                            export type not = null
                            
                            export namespace transform {
                                
                                export namespace if_false {
                                }
                                export type if_false = _T_Initialization
                                
                                export namespace if_true {
                                }
                                export type if_true = _T_Initialization
                            }
                            export type transform = {
                                readonly 'if false': _T_Initialization
                                readonly 'if true': _T_Initialization
                            }
                        }
                        export type SG = 
                            | readonly ['not', null]
                            | readonly ['transform', {
                                readonly 'if false': _T_Initialization
                                readonly 'if true': _T_Initialization
                            }]
                    }
                    export type _boolean = _i_core._T_State_Group<null, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization
                            readonly 'if true': _T_Initialization
                        }]
                    >
                    
                    export namespace dictionary {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map = _T_Initialization
                        }
                        export type SG = 
                            | readonly ['map', _T_Initialization]
                    }
                    export type dictionary = _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                    >
                    
                    export namespace _function {
                        
                        export namespace SG {
                            
                            export namespace call {
                                
                                export namespace _arguments {
                                    
                                    export namespace O {
                                        
                                        export namespace D {
                                        }
                                        export type D = _T_Initialization
                                    }
                                    export type O = _i_core._T_Dictionary<null, _T_Initialization>
                                }
                                export type _arguments = _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                                
                                export namespace context {
                                }
                                export type context = _T_Initialization
                            }
                            export type call = {
                                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                                readonly 'context': _T_Initialization
                            }
                        }
                        export type SG = 
                            | readonly ['call', {
                                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                                readonly 'context': _T_Initialization
                            }]
                    }
                    export type _function = _i_core._T_State_Group<null, 
                        | readonly ['call', {
                            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                            readonly 'context': _T_Initialization
                        }]
                    >
                    
                    export namespace optional {
                        
                        export namespace SG {
                            
                            export namespace map {
                            }
                            export type map = _T_Initialization
                            
                            export namespace transform {
                                
                                export namespace if_not_set {
                                }
                                export type if_not_set = _T_Initialization
                                
                                export namespace if_set {
                                }
                                export type if_set = _T_Initialization
                            }
                            export type transform = {
                                readonly 'if not set': _T_Initialization
                                readonly 'if set': _T_Initialization
                            }
                        }
                        export type SG = 
                            | readonly ['map', _T_Initialization]
                            | readonly ['transform', {
                                readonly 'if not set': _T_Initialization
                                readonly 'if set': _T_Initialization
                            }]
                    }
                    export type optional = _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization
                            readonly 'if set': _T_Initialization
                        }]
                    >
                    
                    export namespace tagged_union {
                        
                        export namespace SG {
                            
                            export namespace _switch {
                                
                                export namespace resulting_node {
                                    
                                    export namespace O {
                                    }
                                    export type O = _i_imports_interface._T_Type
                                }
                                export type resulting_node = _pt.Optional_Value<_i_imports_interface._T_Type>
                                
                                export namespace _type {
                                    
                                    export namespace SG {
                                        
                                        export namespace full {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D = _T_Initialization
                                            }
                                            export type cases = _i_core._T_Dictionary<null, _T_Initialization>
                                        }
                                        export type full = {
                                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        }
                                        
                                        export namespace partial {
                                            
                                            export namespace cases {
                                                
                                                export namespace D {
                                                }
                                                export type D = _T_Initialization
                                            }
                                            export type cases = _i_core._T_Dictionary<null, _T_Initialization>
                                            
                                            export namespace _default {
                                            }
                                            export type _default = _T_Initialization
                                        }
                                        export type partial = {
                                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                            readonly 'default': _T_Initialization
                                        }
                                    }
                                    export type SG = 
                                        | readonly ['full', {
                                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        }]
                                        | readonly ['partial', {
                                            readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                            readonly 'default': _T_Initialization
                                        }]
                                }
                                export type _type = _i_core._T_State_Group<null, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        readonly 'default': _T_Initialization
                                    }]
                                >
                            }
                            export type _switch = {
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        readonly 'default': _T_Initialization
                                    }]
                                >
                            }
                        }
                        export type SG = 
                            | readonly ['switch', {
                                readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                                readonly 'type': _i_core._T_State_Group<null, 
                                    | readonly ['full', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    }]
                                    | readonly ['partial', {
                                        readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                        readonly 'default': _T_Initialization
                                    }]
                                >
                            }]
                    }
                    export type tagged_union = _i_core._T_State_Group<null, 
                        | readonly ['switch', {
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    readonly 'default': _T_Initialization
                                }]
                            >
                        }]
                    >
                }
                export type SG = 
                    | readonly ['array', _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                    >]
                    | readonly ['boolean', _i_core._T_State_Group<null, 
                        | readonly ['not', null]
                        | readonly ['transform', {
                            readonly 'if false': _T_Initialization
                            readonly 'if true': _T_Initialization
                        }]
                    >]
                    | readonly ['dictionary', _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                    >]
                    | readonly ['function', _i_core._T_State_Group<null, 
                        | readonly ['call', {
                            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                            readonly 'context': _T_Initialization
                        }]
                    >]
                    | readonly ['optional', _i_core._T_State_Group<null, 
                        | readonly ['map', _T_Initialization]
                        | readonly ['transform', {
                            readonly 'if not set': _T_Initialization
                            readonly 'if set': _T_Initialization
                        }]
                    >]
                    | readonly ['tagged union', _i_core._T_State_Group<null, 
                        | readonly ['switch', {
                            readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                            readonly 'type': _i_core._T_State_Group<null, 
                                | readonly ['full', {
                                    readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                }]
                                | readonly ['partial', {
                                    readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                    readonly 'default': _T_Initialization
                                }]
                            >
                        }]
                    >]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['array', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['boolean', _i_core._T_State_Group<null, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization
                        readonly 'if true': _T_Initialization
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['function', _i_core._T_State_Group<null, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                        readonly 'context': _T_Initialization
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization
                        readonly 'if set': _T_Initialization
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<null, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                readonly 'default': _T_Initialization
                            }]
                        >
                    }]
                >]
            >
        }
        export type transformation = {
            readonly 'source': _T_Selection
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['array', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['boolean', _i_core._T_State_Group<null, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization
                        readonly 'if true': _T_Initialization
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['function', _i_core._T_State_Group<null, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                        readonly 'context': _T_Initialization
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization
                        readonly 'if set': _T_Initialization
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<null, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                readonly 'default': _T_Initialization
                            }]
                        >
                    }]
                >]
            >
        }
    }
    export type SG = 
        | readonly ['block', {
            readonly 'initialization': _T_Initialization
            readonly 'temp ordered variables': _i_core._T_List<null, {
                readonly 'initialization': _T_Initialization
                readonly 'name': string
                readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
            }>
            readonly 'variables': _T_Variables
        }]
        | readonly ['change context', {
            readonly 'initialization': _T_Initialization
            readonly 'new context': _T_Selection
        }]
        | readonly ['literal', {
            readonly 'value': _T_Literal
        }]
        | readonly ['selection', _T_Selection]
        | readonly ['transformation', {
            readonly 'source': _T_Selection
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['array', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['boolean', _i_core._T_State_Group<null, 
                    | readonly ['not', null]
                    | readonly ['transform', {
                        readonly 'if false': _T_Initialization
                        readonly 'if true': _T_Initialization
                    }]
                >]
                | readonly ['dictionary', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                >]
                | readonly ['function', _i_core._T_State_Group<null, 
                    | readonly ['call', {
                        readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                        readonly 'context': _T_Initialization
                    }]
                >]
                | readonly ['optional', _i_core._T_State_Group<null, 
                    | readonly ['map', _T_Initialization]
                    | readonly ['transform', {
                        readonly 'if not set': _T_Initialization
                        readonly 'if set': _T_Initialization
                    }]
                >]
                | readonly ['tagged union', _i_core._T_State_Group<null, 
                    | readonly ['switch', {
                        readonly 'resulting node': _pt.Optional_Value<_i_imports_interface._T_Type>
                        readonly 'type': _i_core._T_State_Group<null, 
                            | readonly ['full', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                            }]
                            | readonly ['partial', {
                                readonly 'cases': _i_core._T_Dictionary<null, _T_Initialization>
                                readonly 'default': _T_Initialization
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
            export type L = _T_Initialization
        }
        export type array = _i_core._T_List<null, _T_Initialization>
        
        export namespace _boolean {
            
            export namespace SG {
                export type _false = null
                export type _true = null
            }
            export type SG = 
                | readonly ['false', null]
                | readonly ['true', null]
        }
        export type _boolean = _i_core._T_State_Group<null, 
            | readonly ['false', null]
            | readonly ['true', null]
        >
        
        export namespace dictionary {
            
            export namespace D {
            }
            export type D = _T_Initialization
        }
        export type dictionary = _i_core._T_Dictionary<null, _T_Initialization>
        
        export namespace _function {
            
            export namespace initialization {
            }
            export type initialization = _T_Initialization
            export type temp_has_parameters = boolean
        }
        export type _function = {
            readonly 'initialization': _T_Initialization
            readonly 'temp has parameters': boolean
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D = _T_Initialization
        }
        export type group = _i_core._T_Dictionary<null, _T_Initialization>
        export type _null = null
        
        export namespace _number {
            
            export namespace SG {
                export type floting_point = number
                export type integer = number
                export type signed_integer = number
            }
            export type SG = 
                | readonly ['floting point', number]
                | readonly ['integer', number]
                | readonly ['signed integer', number]
        }
        export type _number = _i_core._T_State_Group<null, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >
        
        export namespace optional {
            
            export namespace SG {
                export type not_set = null
                
                export namespace _set {
                }
                export type _set = _T_Initialization
            }
            export type SG = 
                | readonly ['not set', null]
                | readonly ['set', _T_Initialization]
        }
        export type optional = _i_core._T_State_Group<null, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization]
        >
        
        export namespace _string {
            
            export namespace delimiter {
                
                export namespace SG {
                    export type backtick = null
                    export type quote = null
                }
                export type SG = 
                    | readonly ['backtick', null]
                    | readonly ['quote', null]
            }
            export type delimiter = _i_core._T_State_Group<null, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            export type value = string
        }
        export type _string = {
            readonly 'delimiter': _i_core._T_State_Group<null, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }
        
        export namespace tagged_union {
            export type _case = string
            
            export namespace value {
            }
            export type value = _T_Initialization
        }
        export type tagged_union = {
            readonly 'case': string
            readonly 'value': _T_Initialization
        }
    }
    export type SG = 
        | readonly ['array', _i_core._T_List<null, _T_Initialization>]
        | readonly ['boolean', _i_core._T_State_Group<null, 
            | readonly ['false', null]
            | readonly ['true', null]
        >]
        | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Initialization>]
        | readonly ['function', {
            readonly 'initialization': _T_Initialization
            readonly 'temp has parameters': boolean
        }]
        | readonly ['group', _i_core._T_Dictionary<null, _T_Initialization>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<null, 
            | readonly ['floting point', number]
            | readonly ['integer', number]
            | readonly ['signed integer', number]
        >]
        | readonly ['optional', _i_core._T_State_Group<null, 
            | readonly ['not set', null]
            | readonly ['set', _T_Initialization]
        >]
        | readonly ['string', {
            readonly 'delimiter': _i_core._T_State_Group<null, 
                | readonly ['backtick', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }]
        | readonly ['tagged union', {
            readonly 'case': string
            readonly 'value': _T_Initialization
        }]
}

export namespace Module {
    
    export namespace type_imports {
    }
    export type type_imports = _i_imports_interface._T_Imports
    
    export namespace variable_imports {
        
        export namespace D {
            
            export namespace tail {
                export type L = string
            }
            export type tail = _i_core._T_List<null, string>
            
            export namespace _type {
                
                export namespace SG {
                    
                    export namespace ancestor {
                        export type dependency = string
                        export type number_of_steps = number
                    }
                    export type ancestor = {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }
                    export type external = string
                    export type sibling = string
                }
                export type SG = 
                    | readonly ['ancestor', {
                        readonly 'dependency': string
                        readonly 'number of steps': number
                    }]
                    | readonly ['external', string]
                    | readonly ['sibling', string]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
        export type D = {
            readonly 'tail': _i_core._T_List<null, string>
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
            >
        }
    }
    export type variable_imports = _i_core._T_Dictionary<null, {
        readonly 'tail': _i_core._T_List<null, string>
        readonly 'type': _i_core._T_State_Group<null, 
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
    export type variables = _T_Variables
}

export namespace Module_Set {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace _module {
            }
            export type _module = _T_Module
            
            export namespace _set {
            }
            export type _set = _T_Module_Set
        }
        export type SG = 
            | readonly ['module', _T_Module]
            | readonly ['set', _T_Module_Set]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['module', _T_Module]
        | readonly ['set', _T_Module_Set]
    >
}

export namespace Selection {
    
    export namespace start {
        
        export namespace SG {
            export type abort = null
            export type argument = string
            
            export namespace call {
                
                export namespace _arguments {
                    
                    export namespace O {
                        
                        export namespace D {
                        }
                        export type D = _T_Initialization
                    }
                    export type O = _i_core._T_Dictionary<null, _T_Initialization>
                }
                export type _arguments = _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                
                export namespace context {
                }
                export type context = _T_Selection
                
                export namespace source {
                }
                export type source = _T_Selection
            }
            export type call = {
                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                readonly 'context': _T_Selection
                readonly 'source': _T_Selection
            }
            export type context = null
            export type implement_me = null
            
            export namespace imported_variable {
                export type _import = string
                export type variable = string
            }
            export type imported_variable = {
                readonly 'import': string
                readonly 'variable': string
            }
            export type parameter = string
            
            export namespace transform_optional_value {
                
                export namespace if_not_set {
                }
                export type if_not_set = _T_Selection
                
                export namespace if_set {
                }
                export type if_set = _T_Selection
                
                export namespace source {
                }
                export type source = _T_Selection
            }
            export type transform_optional_value = {
                readonly 'if not set': _T_Selection
                readonly 'if set': _T_Selection
                readonly 'source': _T_Selection
            }
            export type variable = string
        }
        export type SG = 
            | readonly ['abort', null]
            | readonly ['argument', string]
            | readonly ['call', {
                readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
                readonly 'context': _T_Selection
                readonly 'source': _T_Selection
            }]
            | readonly ['context', null]
            | readonly ['implement me', null]
            | readonly ['imported variable', {
                readonly 'import': string
                readonly 'variable': string
            }]
            | readonly ['parameter', string]
            | readonly ['transform optional value', {
                readonly 'if not set': _T_Selection
                readonly 'if set': _T_Selection
                readonly 'source': _T_Selection
            }]
            | readonly ['variable', string]
    }
    export type start = _i_core._T_State_Group<null, 
        | readonly ['abort', null]
        | readonly ['argument', string]
        | readonly ['call', {
            readonly 'arguments': _pt.Optional_Value<_i_core._T_Dictionary<null, _T_Initialization>>
            readonly 'context': _T_Selection
            readonly 'source': _T_Selection
        }]
        | readonly ['context', null]
        | readonly ['implement me', null]
        | readonly ['imported variable', {
            readonly 'import': string
            readonly 'variable': string
        }]
        | readonly ['parameter', string]
        | readonly ['transform optional value', {
            readonly 'if not set': _T_Selection
            readonly 'if set': _T_Selection
            readonly 'source': _T_Selection
        }]
        | readonly ['variable', string]
    >
    
    export namespace tail {
        export type L = string
    }
    export type tail = _i_core._T_List<null, string>
}

export namespace Type_Parameters {
    export type D = null
}

export namespace Variables {
    
    export namespace D {
        
        export namespace initialization {
        }
        export type initialization = _T_Initialization
        
        export namespace _type {
            
            export namespace O {
            }
            export type O = _i_imports_interface._T_Type
        }
        export type _type = _pt.Optional_Value<_i_imports_interface._T_Type>
    }
    export type D = {
        readonly 'initialization': _T_Initialization
        readonly 'type': _pt.Optional_Value<_i_imports_interface._T_Type>
    }
}
