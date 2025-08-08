import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Imports = _i_core._T_Dictionary<null, {
    readonly 'tail': _i_core._T_List<null, string>
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['ancestor', {
            readonly 'dependency': string
            readonly 'number of steps': number
        }]
        | readonly ['external', string]
        | readonly ['sibling', string]
    >
    readonly 'type arguments': _T_Type_Arguments
}>

export type _T_Module = {
    readonly 'imports': _T_Imports
    readonly 'type parameters': _T_Type_Parameters
    readonly 'types': _i_core._T_Dictionary<null, {
        readonly 'parameters': _T_Type_Parameters
        readonly 'type': _T_Type
    }>
}

export type _T_Module_Set = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
    | readonly ['module', _T_Module]
    | readonly ['set', _T_Module_Set]
>>

export type _T_Type = _i_core._T_State_Group<null, 
    | readonly ['array', _T_Type]
    | readonly ['boolean', null]
    | readonly ['component', {
        readonly 'location': _i_core._T_State_Group<null, 
            | readonly ['import', {
                readonly 'import': string
                readonly 'type': string
            }]
            | readonly ['sibling', string]
        >
        readonly 'sub selection': _i_core._T_List<null, _i_core._T_State_Group<null, 
            | readonly ['dictionary', null]
            | readonly ['group', string]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', string]
        >>
        readonly 'type arguments': _T_Type_Arguments
    }]
    | readonly ['computed', _T_Type]
    | readonly ['dictionary', _T_Type]
    | readonly ['function', {
        readonly 'context': _T_Type
        readonly 'parameters': _i_core._T_Dictionary<null, _T_Type>
        readonly 'return': _T_Type
        readonly 'type parameters': _T_Type_Parameters
    }]
    | readonly ['group', _i_core._T_Dictionary<null, _T_Type>]
    | readonly ['key value pair', _T_Type]
    | readonly ['null', null]
    | readonly ['number', _i_core._T_State_Group<null, 
        | readonly ['float', null]
        | readonly ['integer', {
            readonly 'signed': boolean
        }]
    >]
    | readonly ['optional', _T_Type]
    | readonly ['parameter', _T_Type_Parameter_Selection]
    | readonly ['string', null]
    | readonly ['tagged union', _i_core._T_Dictionary<null, _T_Type>]
>

export type _T_Type_Arguments = _i_core._T_Dictionary<null, _T_Type>

export type _T_Type_Parameter_Selection = {
    readonly 'location': _i_core._T_State_Group<null, 
        | readonly ['module', null]
        | readonly ['type', null]
    >
    readonly 'parameter': string
}

export type _T_Type_Parameters = _i_core._T_Dictionary<null, null>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Imports = _T_Imports

export type Module = _T_Module

export type Module_Set = _T_Module_Set

export type Type = _T_Type

export type Type_Arguments = _T_Type_Arguments

export type Type_Parameter_Selection = _T_Type_Parameter_Selection

export type Type_Parameters = _T_Type_Parameters

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Imports {
    
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
        
        export namespace type_arguments {
        }
        export type type_arguments = _T_Type_Arguments
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
        readonly 'type arguments': _T_Type_Arguments
    }
}

export namespace _T_Module {
    
    export namespace imports {
    }
    export type imports = _T_Imports
    
    export namespace type_parameters {
    }
    export type type_parameters = _T_Type_Parameters
    
    export namespace types {
        
        export namespace D {
            
            export namespace parameters {
            }
            export type parameters = _T_Type_Parameters
            
            export namespace _type {
            }
            export type _type = _T_Type
        }
        export type D = {
            readonly 'parameters': _T_Type_Parameters
            readonly 'type': _T_Type
        }
    }
    export type types = _i_core._T_Dictionary<null, {
        readonly 'parameters': _T_Type_Parameters
        readonly 'type': _T_Type
    }>
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

export namespace _T_Type {
    
    export namespace SG {
        
        export namespace array {
        }
        export type array = _T_Type
        export type _boolean = null
        
        export namespace component {
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace _import {
                        export type _import = string
                        export type _type = string
                    }
                    export type _import = {
                        readonly 'import': string
                        readonly 'type': string
                    }
                    export type sibling = string
                }
                export type SG = 
                    | readonly ['import', {
                        readonly 'import': string
                        readonly 'type': string
                    }]
                    | readonly ['sibling', string]
            }
            export type location = _i_core._T_State_Group<null, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            
            export namespace sub_selection {
                
                export namespace L {
                    
                    export namespace SG {
                        export type dictionary = null
                        export type group = string
                        export type list = null
                        export type optional = null
                        export type state_group = string
                    }
                    export type SG = 
                        | readonly ['dictionary', null]
                        | readonly ['group', string]
                        | readonly ['list', null]
                        | readonly ['optional', null]
                        | readonly ['state group', string]
                }
                export type L = _i_core._T_State_Group<null, 
                    | readonly ['dictionary', null]
                    | readonly ['group', string]
                    | readonly ['list', null]
                    | readonly ['optional', null]
                    | readonly ['state group', string]
                >
            }
            export type sub_selection = _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            
            export namespace type_arguments {
            }
            export type type_arguments = _T_Type_Arguments
        }
        export type component = {
            readonly 'location': _i_core._T_State_Group<null, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments
        }
        
        export namespace computed {
        }
        export type computed = _T_Type
        
        export namespace dictionary {
        }
        export type dictionary = _T_Type
        
        export namespace _function {
            
            export namespace context {
            }
            export type context = _T_Type
            
            export namespace parameters {
                
                export namespace D {
                }
                export type D = _T_Type
            }
            export type parameters = _i_core._T_Dictionary<null, _T_Type>
            
            export namespace _return {
            }
            export type _return = _T_Type
            
            export namespace type_parameters {
            }
            export type type_parameters = _T_Type_Parameters
        }
        export type _function = {
            readonly 'context': _T_Type
            readonly 'parameters': _i_core._T_Dictionary<null, _T_Type>
            readonly 'return': _T_Type
            readonly 'type parameters': _T_Type_Parameters
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D = _T_Type
        }
        export type group = _i_core._T_Dictionary<null, _T_Type>
        
        export namespace key_value_pair {
        }
        export type key_value_pair = _T_Type
        export type _null = null
        
        export namespace _number {
            
            export namespace SG {
                export type float = null
                
                export namespace integer {
                    export type signed = boolean
                }
                export type integer = {
                    readonly 'signed': boolean
                }
            }
            export type SG = 
                | readonly ['float', null]
                | readonly ['integer', {
                    readonly 'signed': boolean
                }]
        }
        export type _number = _i_core._T_State_Group<null, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >
        
        export namespace optional {
        }
        export type optional = _T_Type
        
        export namespace parameter {
        }
        export type parameter = _T_Type_Parameter_Selection
        export type _string = null
        
        export namespace tagged_union {
            
            export namespace D {
            }
            export type D = _T_Type
        }
        export type tagged_union = _i_core._T_Dictionary<null, _T_Type>
    }
    export type SG = 
        | readonly ['array', _T_Type]
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'location': _i_core._T_State_Group<null, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments
        }]
        | readonly ['computed', _T_Type]
        | readonly ['dictionary', _T_Type]
        | readonly ['function', {
            readonly 'context': _T_Type
            readonly 'parameters': _i_core._T_Dictionary<null, _T_Type>
            readonly 'return': _T_Type
            readonly 'type parameters': _T_Type_Parameters
        }]
        | readonly ['group', _i_core._T_Dictionary<null, _T_Type>]
        | readonly ['key value pair', _T_Type]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<null, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >]
        | readonly ['optional', _T_Type]
        | readonly ['parameter', _T_Type_Parameter_Selection]
        | readonly ['string', null]
        | readonly ['tagged union', _i_core._T_Dictionary<null, _T_Type>]
}

export namespace _T_Type_Arguments {
    
    export namespace D {
    }
    export type D = _T_Type
}

export namespace _T_Type_Parameter_Selection {
    
    export namespace location {
        
        export namespace SG {
            export type _module = null
            export type _type = null
        }
        export type SG = 
            | readonly ['module', null]
            | readonly ['type', null]
    }
    export type location = _i_core._T_State_Group<null, 
        | readonly ['module', null]
        | readonly ['type', null]
    >
    export type parameter = string
}

export namespace _T_Type_Parameters {
    export type D = null
}

// *** ALIASES FOR NESTED TYPES

export namespace Imports {
    
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
        
        export namespace type_arguments {
        }
        export type type_arguments = _T_Type_Arguments
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
        readonly 'type arguments': _T_Type_Arguments
    }
}

export namespace Module {
    
    export namespace imports {
    }
    export type imports = _T_Imports
    
    export namespace type_parameters {
    }
    export type type_parameters = _T_Type_Parameters
    
    export namespace types {
        
        export namespace D {
            
            export namespace parameters {
            }
            export type parameters = _T_Type_Parameters
            
            export namespace _type {
            }
            export type _type = _T_Type
        }
        export type D = {
            readonly 'parameters': _T_Type_Parameters
            readonly 'type': _T_Type
        }
    }
    export type types = _i_core._T_Dictionary<null, {
        readonly 'parameters': _T_Type_Parameters
        readonly 'type': _T_Type
    }>
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

export namespace Type {
    
    export namespace SG {
        
        export namespace array {
        }
        export type array = _T_Type
        export type _boolean = null
        
        export namespace component {
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace _import {
                        export type _import = string
                        export type _type = string
                    }
                    export type _import = {
                        readonly 'import': string
                        readonly 'type': string
                    }
                    export type sibling = string
                }
                export type SG = 
                    | readonly ['import', {
                        readonly 'import': string
                        readonly 'type': string
                    }]
                    | readonly ['sibling', string]
            }
            export type location = _i_core._T_State_Group<null, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            
            export namespace sub_selection {
                
                export namespace L {
                    
                    export namespace SG {
                        export type dictionary = null
                        export type group = string
                        export type list = null
                        export type optional = null
                        export type state_group = string
                    }
                    export type SG = 
                        | readonly ['dictionary', null]
                        | readonly ['group', string]
                        | readonly ['list', null]
                        | readonly ['optional', null]
                        | readonly ['state group', string]
                }
                export type L = _i_core._T_State_Group<null, 
                    | readonly ['dictionary', null]
                    | readonly ['group', string]
                    | readonly ['list', null]
                    | readonly ['optional', null]
                    | readonly ['state group', string]
                >
            }
            export type sub_selection = _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            
            export namespace type_arguments {
            }
            export type type_arguments = _T_Type_Arguments
        }
        export type component = {
            readonly 'location': _i_core._T_State_Group<null, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments
        }
        
        export namespace computed {
        }
        export type computed = _T_Type
        
        export namespace dictionary {
        }
        export type dictionary = _T_Type
        
        export namespace _function {
            
            export namespace context {
            }
            export type context = _T_Type
            
            export namespace parameters {
                
                export namespace D {
                }
                export type D = _T_Type
            }
            export type parameters = _i_core._T_Dictionary<null, _T_Type>
            
            export namespace _return {
            }
            export type _return = _T_Type
            
            export namespace type_parameters {
            }
            export type type_parameters = _T_Type_Parameters
        }
        export type _function = {
            readonly 'context': _T_Type
            readonly 'parameters': _i_core._T_Dictionary<null, _T_Type>
            readonly 'return': _T_Type
            readonly 'type parameters': _T_Type_Parameters
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D = _T_Type
        }
        export type group = _i_core._T_Dictionary<null, _T_Type>
        
        export namespace key_value_pair {
        }
        export type key_value_pair = _T_Type
        export type _null = null
        
        export namespace _number {
            
            export namespace SG {
                export type float = null
                
                export namespace integer {
                    export type signed = boolean
                }
                export type integer = {
                    readonly 'signed': boolean
                }
            }
            export type SG = 
                | readonly ['float', null]
                | readonly ['integer', {
                    readonly 'signed': boolean
                }]
        }
        export type _number = _i_core._T_State_Group<null, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >
        
        export namespace optional {
        }
        export type optional = _T_Type
        
        export namespace parameter {
        }
        export type parameter = _T_Type_Parameter_Selection
        export type _string = null
        
        export namespace tagged_union {
            
            export namespace D {
            }
            export type D = _T_Type
        }
        export type tagged_union = _i_core._T_Dictionary<null, _T_Type>
    }
    export type SG = 
        | readonly ['array', _T_Type]
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'location': _i_core._T_State_Group<null, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments
        }]
        | readonly ['computed', _T_Type]
        | readonly ['dictionary', _T_Type]
        | readonly ['function', {
            readonly 'context': _T_Type
            readonly 'parameters': _i_core._T_Dictionary<null, _T_Type>
            readonly 'return': _T_Type
            readonly 'type parameters': _T_Type_Parameters
        }]
        | readonly ['group', _i_core._T_Dictionary<null, _T_Type>]
        | readonly ['key value pair', _T_Type]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<null, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >]
        | readonly ['optional', _T_Type]
        | readonly ['parameter', _T_Type_Parameter_Selection]
        | readonly ['string', null]
        | readonly ['tagged union', _i_core._T_Dictionary<null, _T_Type>]
}

export namespace Type_Arguments {
    
    export namespace D {
    }
    export type D = _T_Type
}

export namespace Type_Parameter_Selection {
    
    export namespace location {
        
        export namespace SG {
            export type _module = null
            export type _type = null
        }
        export type SG = 
            | readonly ['module', null]
            | readonly ['type', null]
    }
    export type location = _i_core._T_State_Group<null, 
        | readonly ['module', null]
        | readonly ['type', null]
    >
    export type parameter = string
}

export namespace Type_Parameters {
    export type D = null
}
