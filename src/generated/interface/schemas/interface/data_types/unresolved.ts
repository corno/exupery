import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unresolved"

// **** TYPES

export type _T_Imports<G_Source> = _i_core._T_Dictionary<G_Source, {
    readonly 'tail': _i_core._T_List<G_Source, string>
    readonly 'type': _i_core._T_State_Group<G_Source, 
        | readonly ['ancestor', {
            readonly 'dependency': string
            readonly 'number of steps': number
        }]
        | readonly ['external', string]
        | readonly ['sibling', string]
    >
    readonly 'type arguments': _T_Type_Arguments<G_Source>
}>

export type _T_Module<G_Source> = {
    readonly 'imports': _T_Imports<G_Source>
    readonly 'type parameters': _T_Type_Parameters<G_Source>
    readonly 'types': _i_core._T_Dictionary<G_Source, {
        readonly 'parameters': _T_Type_Parameters<G_Source>
        readonly 'type': _T_Type<G_Source>
    }>
}

export type _T_Module_Set<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['module', _T_Module<G_Source>]
    | readonly ['set', _T_Module_Set<G_Source>]
>>

export type _T_Type<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['array', _T_Type<G_Source>]
    | readonly ['boolean', null]
    | readonly ['component', {
        readonly 'location': _i_core._T_State_Group<G_Source, 
            | readonly ['import', {
                readonly 'import': string
                readonly 'type': string
            }]
            | readonly ['sibling', string]
        >
        readonly 'sub selection': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', null]
            | readonly ['group', string]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', string]
        >>
        readonly 'type arguments': _T_Type_Arguments<G_Source>
    }]
    | readonly ['computed', _T_Type<G_Source>]
    | readonly ['dictionary', _T_Type<G_Source>]
    | readonly ['function', {
        readonly 'context': _T_Type<G_Source>
        readonly 'parameters': _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
        readonly 'return': _T_Type<G_Source>
        readonly 'type parameters': _T_Type_Parameters<G_Source>
    }]
    | readonly ['group', _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>]
    | readonly ['key value pair', _T_Type<G_Source>]
    | readonly ['null', null]
    | readonly ['number', _i_core._T_State_Group<G_Source, 
        | readonly ['float', null]
        | readonly ['integer', {
            readonly 'signed': boolean
        }]
    >]
    | readonly ['optional', _T_Type<G_Source>]
    | readonly ['parameter', _T_Type_Parameter_Selection<G_Source>]
    | readonly ['string', null]
    | readonly ['tagged union', _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>]
>

export type _T_Type_Arguments<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>

export type _T_Type_Parameter_Selection<G_Source> = {
    readonly 'location': _i_core._T_State_Group<G_Source, 
        | readonly ['module', null]
        | readonly ['type', null]
    >
    readonly 'parameter': string
}

export type _T_Type_Parameters<G_Source> = _i_core._T_Dictionary<G_Source, null>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Imports<G_Source> = _T_Imports<G_Source>

export type Module<G_Source> = _T_Module<G_Source>

export type Module_Set<G_Source> = _T_Module_Set<G_Source>

export type Type<G_Source> = _T_Type<G_Source>

export type Type_Arguments<G_Source> = _T_Type_Arguments<G_Source>

export type Type_Parameter_Selection<G_Source> = _T_Type_Parameter_Selection<G_Source>

export type Type_Parameters<G_Source> = _T_Type_Parameters<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Imports {
    
    export namespace D {
        
        export namespace tail {
            export type L<G_Source> = string
        }
        export type tail<G_Source> = _i_core._T_List<G_Source, string>
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace ancestor {
                    export type dependency<G_Source> = string
                    export type number_of_steps<G_Source> = number
                }
                export type ancestor<G_Source> = {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }
                export type external<G_Source> = string
                export type sibling<G_Source> = string
            }
            export type SG<G_Source> = 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
        }
        export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
        
        export namespace type_arguments {
        }
        export type type_arguments<G_Source> = _T_Type_Arguments<G_Source>
    }
    export type D<G_Source> = {
        readonly 'tail': _i_core._T_List<G_Source, string>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
        readonly 'type arguments': _T_Type_Arguments<G_Source>
    }
}

export namespace _T_Module {
    
    export namespace imports {
    }
    export type imports<G_Source> = _T_Imports<G_Source>
    
    export namespace type_parameters {
    }
    export type type_parameters<G_Source> = _T_Type_Parameters<G_Source>
    
    export namespace types {
        
        export namespace D {
            
            export namespace parameters {
            }
            export type parameters<G_Source> = _T_Type_Parameters<G_Source>
            
            export namespace _type {
            }
            export type _type<G_Source> = _T_Type<G_Source>
        }
        export type D<G_Source> = {
            readonly 'parameters': _T_Type_Parameters<G_Source>
            readonly 'type': _T_Type<G_Source>
        }
    }
    export type types<G_Source> = _i_core._T_Dictionary<G_Source, {
        readonly 'parameters': _T_Type_Parameters<G_Source>
        readonly 'type': _T_Type<G_Source>
    }>
}

export namespace _T_Module_Set {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace _module {
            }
            export type _module<G_Source> = _T_Module<G_Source>
            
            export namespace _set {
            }
            export type _set<G_Source> = _T_Module_Set<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['module', _T_Module<G_Source>]
            | readonly ['set', _T_Module_Set<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['module', _T_Module<G_Source>]
        | readonly ['set', _T_Module_Set<G_Source>]
    >
}

export namespace _T_Type {
    
    export namespace SG {
        
        export namespace array {
        }
        export type array<G_Source> = _T_Type<G_Source>
        export type _boolean<G_Source> = null
        
        export namespace component {
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace _import {
                        export type _import<G_Source> = string
                        export type _type<G_Source> = string
                    }
                    export type _import<G_Source> = {
                        readonly 'import': string
                        readonly 'type': string
                    }
                    export type sibling<G_Source> = string
                }
                export type SG<G_Source> = 
                    | readonly ['import', {
                        readonly 'import': string
                        readonly 'type': string
                    }]
                    | readonly ['sibling', string]
            }
            export type location<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            
            export namespace sub_selection {
                
                export namespace L {
                    
                    export namespace SG {
                        export type dictionary<G_Source> = null
                        export type group<G_Source> = string
                        export type list<G_Source> = null
                        export type optional<G_Source> = null
                        export type state_group<G_Source> = string
                    }
                    export type SG<G_Source> = 
                        | readonly ['dictionary', null]
                        | readonly ['group', string]
                        | readonly ['list', null]
                        | readonly ['optional', null]
                        | readonly ['state group', string]
                }
                export type L<G_Source> = _i_core._T_State_Group<G_Source, 
                    | readonly ['dictionary', null]
                    | readonly ['group', string]
                    | readonly ['list', null]
                    | readonly ['optional', null]
                    | readonly ['state group', string]
                >
            }
            export type sub_selection<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            
            export namespace type_arguments {
            }
            export type type_arguments<G_Source> = _T_Type_Arguments<G_Source>
        }
        export type component<G_Source> = {
            readonly 'location': _i_core._T_State_Group<G_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments<G_Source>
        }
        
        export namespace computed {
        }
        export type computed<G_Source> = _T_Type<G_Source>
        
        export namespace dictionary {
        }
        export type dictionary<G_Source> = _T_Type<G_Source>
        
        export namespace _function {
            
            export namespace context {
            }
            export type context<G_Source> = _T_Type<G_Source>
            
            export namespace parameters {
                
                export namespace D {
                }
                export type D<G_Source> = _T_Type<G_Source>
            }
            export type parameters<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
            
            export namespace _return {
            }
            export type _return<G_Source> = _T_Type<G_Source>
            
            export namespace type_parameters {
            }
            export type type_parameters<G_Source> = _T_Type_Parameters<G_Source>
        }
        export type _function<G_Source> = {
            readonly 'context': _T_Type<G_Source>
            readonly 'parameters': _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
            readonly 'return': _T_Type<G_Source>
            readonly 'type parameters': _T_Type_Parameters<G_Source>
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Type<G_Source>
        }
        export type group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
        
        export namespace key_value_pair {
        }
        export type key_value_pair<G_Source> = _T_Type<G_Source>
        export type _null<G_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type float<G_Source> = null
                
                export namespace integer {
                    export type signed<G_Source> = boolean
                }
                export type integer<G_Source> = {
                    readonly 'signed': boolean
                }
            }
            export type SG<G_Source> = 
                | readonly ['float', null]
                | readonly ['integer', {
                    readonly 'signed': boolean
                }]
        }
        export type _number<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >
        
        export namespace optional {
        }
        export type optional<G_Source> = _T_Type<G_Source>
        
        export namespace parameter {
        }
        export type parameter<G_Source> = _T_Type_Parameter_Selection<G_Source>
        export type _string<G_Source> = null
        
        export namespace tagged_union {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Type<G_Source>
        }
        export type tagged_union<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
    }
    export type SG<G_Source> = 
        | readonly ['array', _T_Type<G_Source>]
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'location': _i_core._T_State_Group<G_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments<G_Source>
        }]
        | readonly ['computed', _T_Type<G_Source>]
        | readonly ['dictionary', _T_Type<G_Source>]
        | readonly ['function', {
            readonly 'context': _T_Type<G_Source>
            readonly 'parameters': _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
            readonly 'return': _T_Type<G_Source>
            readonly 'type parameters': _T_Type_Parameters<G_Source>
        }]
        | readonly ['group', _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>]
        | readonly ['key value pair', _T_Type<G_Source>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<G_Source, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >]
        | readonly ['optional', _T_Type<G_Source>]
        | readonly ['parameter', _T_Type_Parameter_Selection<G_Source>]
        | readonly ['string', null]
        | readonly ['tagged union', _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>]
}

export namespace _T_Type_Arguments {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Type<G_Source>
}

export namespace _T_Type_Parameter_Selection {
    
    export namespace location {
        
        export namespace SG {
            export type _module<G_Source> = null
            export type _type<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['module', null]
            | readonly ['type', null]
    }
    export type location<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['module', null]
        | readonly ['type', null]
    >
    export type parameter<G_Source> = string
}

export namespace _T_Type_Parameters {
    export type D<G_Source> = null
}

// *** ALIASES FOR NESTED TYPES

export namespace Imports {
    
    export namespace D {
        
        export namespace tail {
            export type L<G_Source> = string
        }
        export type tail<G_Source> = _i_core._T_List<G_Source, string>
        
        export namespace _type {
            
            export namespace SG {
                
                export namespace ancestor {
                    export type dependency<G_Source> = string
                    export type number_of_steps<G_Source> = number
                }
                export type ancestor<G_Source> = {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }
                export type external<G_Source> = string
                export type sibling<G_Source> = string
            }
            export type SG<G_Source> = 
                | readonly ['ancestor', {
                    readonly 'dependency': string
                    readonly 'number of steps': number
                }]
                | readonly ['external', string]
                | readonly ['sibling', string]
        }
        export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
        
        export namespace type_arguments {
        }
        export type type_arguments<G_Source> = _T_Type_Arguments<G_Source>
    }
    export type D<G_Source> = {
        readonly 'tail': _i_core._T_List<G_Source, string>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['ancestor', {
                readonly 'dependency': string
                readonly 'number of steps': number
            }]
            | readonly ['external', string]
            | readonly ['sibling', string]
        >
        readonly 'type arguments': _T_Type_Arguments<G_Source>
    }
}

export namespace Module {
    
    export namespace imports {
    }
    export type imports<G_Source> = _T_Imports<G_Source>
    
    export namespace type_parameters {
    }
    export type type_parameters<G_Source> = _T_Type_Parameters<G_Source>
    
    export namespace types {
        
        export namespace D {
            
            export namespace parameters {
            }
            export type parameters<G_Source> = _T_Type_Parameters<G_Source>
            
            export namespace _type {
            }
            export type _type<G_Source> = _T_Type<G_Source>
        }
        export type D<G_Source> = {
            readonly 'parameters': _T_Type_Parameters<G_Source>
            readonly 'type': _T_Type<G_Source>
        }
    }
    export type types<G_Source> = _i_core._T_Dictionary<G_Source, {
        readonly 'parameters': _T_Type_Parameters<G_Source>
        readonly 'type': _T_Type<G_Source>
    }>
}

export namespace Module_Set {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace _module {
            }
            export type _module<G_Source> = _T_Module<G_Source>
            
            export namespace _set {
            }
            export type _set<G_Source> = _T_Module_Set<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['module', _T_Module<G_Source>]
            | readonly ['set', _T_Module_Set<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['module', _T_Module<G_Source>]
        | readonly ['set', _T_Module_Set<G_Source>]
    >
}

export namespace Type {
    
    export namespace SG {
        
        export namespace array {
        }
        export type array<G_Source> = _T_Type<G_Source>
        export type _boolean<G_Source> = null
        
        export namespace component {
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace _import {
                        export type _import<G_Source> = string
                        export type _type<G_Source> = string
                    }
                    export type _import<G_Source> = {
                        readonly 'import': string
                        readonly 'type': string
                    }
                    export type sibling<G_Source> = string
                }
                export type SG<G_Source> = 
                    | readonly ['import', {
                        readonly 'import': string
                        readonly 'type': string
                    }]
                    | readonly ['sibling', string]
            }
            export type location<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            
            export namespace sub_selection {
                
                export namespace L {
                    
                    export namespace SG {
                        export type dictionary<G_Source> = null
                        export type group<G_Source> = string
                        export type list<G_Source> = null
                        export type optional<G_Source> = null
                        export type state_group<G_Source> = string
                    }
                    export type SG<G_Source> = 
                        | readonly ['dictionary', null]
                        | readonly ['group', string]
                        | readonly ['list', null]
                        | readonly ['optional', null]
                        | readonly ['state group', string]
                }
                export type L<G_Source> = _i_core._T_State_Group<G_Source, 
                    | readonly ['dictionary', null]
                    | readonly ['group', string]
                    | readonly ['list', null]
                    | readonly ['optional', null]
                    | readonly ['state group', string]
                >
            }
            export type sub_selection<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            
            export namespace type_arguments {
            }
            export type type_arguments<G_Source> = _T_Type_Arguments<G_Source>
        }
        export type component<G_Source> = {
            readonly 'location': _i_core._T_State_Group<G_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments<G_Source>
        }
        
        export namespace computed {
        }
        export type computed<G_Source> = _T_Type<G_Source>
        
        export namespace dictionary {
        }
        export type dictionary<G_Source> = _T_Type<G_Source>
        
        export namespace _function {
            
            export namespace context {
            }
            export type context<G_Source> = _T_Type<G_Source>
            
            export namespace parameters {
                
                export namespace D {
                }
                export type D<G_Source> = _T_Type<G_Source>
            }
            export type parameters<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
            
            export namespace _return {
            }
            export type _return<G_Source> = _T_Type<G_Source>
            
            export namespace type_parameters {
            }
            export type type_parameters<G_Source> = _T_Type_Parameters<G_Source>
        }
        export type _function<G_Source> = {
            readonly 'context': _T_Type<G_Source>
            readonly 'parameters': _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
            readonly 'return': _T_Type<G_Source>
            readonly 'type parameters': _T_Type_Parameters<G_Source>
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Type<G_Source>
        }
        export type group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
        
        export namespace key_value_pair {
        }
        export type key_value_pair<G_Source> = _T_Type<G_Source>
        export type _null<G_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type float<G_Source> = null
                
                export namespace integer {
                    export type signed<G_Source> = boolean
                }
                export type integer<G_Source> = {
                    readonly 'signed': boolean
                }
            }
            export type SG<G_Source> = 
                | readonly ['float', null]
                | readonly ['integer', {
                    readonly 'signed': boolean
                }]
        }
        export type _number<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >
        
        export namespace optional {
        }
        export type optional<G_Source> = _T_Type<G_Source>
        
        export namespace parameter {
        }
        export type parameter<G_Source> = _T_Type_Parameter_Selection<G_Source>
        export type _string<G_Source> = null
        
        export namespace tagged_union {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Type<G_Source>
        }
        export type tagged_union<G_Source> = _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
    }
    export type SG<G_Source> = 
        | readonly ['array', _T_Type<G_Source>]
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'location': _i_core._T_State_Group<G_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments<G_Source>
        }]
        | readonly ['computed', _T_Type<G_Source>]
        | readonly ['dictionary', _T_Type<G_Source>]
        | readonly ['function', {
            readonly 'context': _T_Type<G_Source>
            readonly 'parameters': _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>
            readonly 'return': _T_Type<G_Source>
            readonly 'type parameters': _T_Type_Parameters<G_Source>
        }]
        | readonly ['group', _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>]
        | readonly ['key value pair', _T_Type<G_Source>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<G_Source, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >]
        | readonly ['optional', _T_Type<G_Source>]
        | readonly ['parameter', _T_Type_Parameter_Selection<G_Source>]
        | readonly ['string', null]
        | readonly ['tagged union', _i_core._T_Dictionary<G_Source, _T_Type<G_Source>>]
}

export namespace Type_Arguments {
    
    export namespace D {
    }
    export type D<G_Source> = _T_Type<G_Source>
}

export namespace Type_Parameter_Selection {
    
    export namespace location {
        
        export namespace SG {
            export type _module<G_Source> = null
            export type _type<G_Source> = null
        }
        export type SG<G_Source> = 
            | readonly ['module', null]
            | readonly ['type', null]
    }
    export type location<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['module', null]
        | readonly ['type', null]
    >
    export type parameter<G_Source> = string
}

export namespace Type_Parameters {
    export type D<G_Source> = null
}
