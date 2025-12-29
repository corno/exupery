import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/unresolved"

// **** TYPES

export type _T_Imports<M_Source> = _i_core._T_Dictionary<M_Source, {
    readonly 'tail': _i_core._T_List<M_Source, string>
    readonly 'type': _i_core._T_State_Group<M_Source, 
        | readonly ['ancestor', {
            readonly 'dependency': string
            readonly 'number of steps': number
        }]
        | readonly ['external', string]
        | readonly ['sibling', string]
    >
    readonly 'type arguments': _T_Type_Arguments<M_Source>
}>

export type _T_Module<M_Source> = {
    readonly 'imports': _T_Imports<M_Source>
    readonly 'type parameters': _T_Type_Parameters<M_Source>
    readonly 'types': _i_core._T_Dictionary<M_Source, {
        readonly 'parameters': _T_Type_Parameters<M_Source>
        readonly 'type': _T_Type<M_Source>
    }>
}

export type _T_Module_Set<M_Source> = _i_core._T_Dictionary<M_Source, _i_core._T_State_Group<M_Source, 
    | readonly ['module', _T_Module<M_Source>]
    | readonly ['set', _T_Module_Set<M_Source>]
>>

export type _T_Type<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['array', _T_Type<M_Source>]
    | readonly ['boolean', null]
    | readonly ['component', {
        readonly 'location': _i_core._T_State_Group<M_Source, 
            | readonly ['import', {
                readonly 'import': string
                readonly 'type': string
            }]
            | readonly ['sibling', string]
        >
        readonly 'sub selection': _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
            | readonly ['dictionary', null]
            | readonly ['group', string]
            | readonly ['list', null]
            | readonly ['optional', null]
            | readonly ['state group', string]
        >>
        readonly 'type arguments': _T_Type_Arguments<M_Source>
    }]
    | readonly ['computed', _T_Type<M_Source>]
    | readonly ['dictionary', _T_Type<M_Source>]
    | readonly ['function', {
        readonly 'context': _T_Type<M_Source>
        readonly 'parameters': _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
        readonly 'return': _T_Type<M_Source>
        readonly 'type parameters': _T_Type_Parameters<M_Source>
    }]
    | readonly ['group', _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>]
    | readonly ['null', null]
    | readonly ['number', _i_core._T_State_Group<M_Source, 
        | readonly ['float', null]
        | readonly ['integer', {
            readonly 'signed': boolean
        }]
    >]
    | readonly ['optional', _T_Type<M_Source>]
    | readonly ['parameter', _T_Type_Parameter_Selection<M_Source>]
    | readonly ['string', null]
    | readonly ['tagged union', _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>]
>

export type _T_Type_Arguments<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>

export type _T_Type_Parameter_Selection<M_Source> = {
    readonly 'location': _i_core._T_State_Group<M_Source, 
        | readonly ['function', null]
        | readonly ['module', null]
        | readonly ['type', null]
    >
    readonly 'parameter': string
}

export type _T_Type_Parameters<M_Source> = _i_core._T_Dictionary<M_Source, null>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Imports<M_Source> = _T_Imports<M_Source>

export type Module<M_Source> = _T_Module<M_Source>

export type Module_Set<M_Source> = _T_Module_Set<M_Source>

export type Type<M_Source> = _T_Type<M_Source>

export type Type_Arguments<M_Source> = _T_Type_Arguments<M_Source>

export type Type_Parameter_Selection<M_Source> = _T_Type_Parameter_Selection<M_Source>

export type Type_Parameters<M_Source> = _T_Type_Parameters<M_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Imports {
    
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
        
        export namespace type_arguments {
        }
        export type type_arguments<M_Source> = _T_Type_Arguments<M_Source>
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
        readonly 'type arguments': _T_Type_Arguments<M_Source>
    }
}

export namespace _T_Module {
    
    export namespace imports {
    }
    export type imports<M_Source> = _T_Imports<M_Source>
    
    export namespace type_parameters {
    }
    export type type_parameters<M_Source> = _T_Type_Parameters<M_Source>
    
    export namespace types {
        
        export namespace D {
            
            export namespace parameters {
            }
            export type parameters<M_Source> = _T_Type_Parameters<M_Source>
            
            export namespace _type {
            }
            export type _type<M_Source> = _T_Type<M_Source>
        }
        export type D<M_Source> = {
            readonly 'parameters': _T_Type_Parameters<M_Source>
            readonly 'type': _T_Type<M_Source>
        }
    }
    export type types<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'parameters': _T_Type_Parameters<M_Source>
        readonly 'type': _T_Type<M_Source>
    }>
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

export namespace _T_Type {
    
    export namespace SG {
        
        export namespace array {
        }
        export type array<M_Source> = _T_Type<M_Source>
        export type _boolean<M_Source> = null
        
        export namespace component {
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace _import {
                        export type _import<M_Source> = string
                        export type _type<M_Source> = string
                    }
                    export type _import<M_Source> = {
                        readonly 'import': string
                        readonly 'type': string
                    }
                    export type sibling<M_Source> = string
                }
                export type SG<M_Source> = 
                    | readonly ['import', {
                        readonly 'import': string
                        readonly 'type': string
                    }]
                    | readonly ['sibling', string]
            }
            export type location<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            
            export namespace sub_selection {
                
                export namespace L {
                    
                    export namespace SG {
                        export type dictionary<M_Source> = null
                        export type group<M_Source> = string
                        export type list<M_Source> = null
                        export type optional<M_Source> = null
                        export type state_group<M_Source> = string
                    }
                    export type SG<M_Source> = 
                        | readonly ['dictionary', null]
                        | readonly ['group', string]
                        | readonly ['list', null]
                        | readonly ['optional', null]
                        | readonly ['state group', string]
                }
                export type L<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['dictionary', null]
                    | readonly ['group', string]
                    | readonly ['list', null]
                    | readonly ['optional', null]
                    | readonly ['state group', string]
                >
            }
            export type sub_selection<M_Source> = _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            
            export namespace type_arguments {
            }
            export type type_arguments<M_Source> = _T_Type_Arguments<M_Source>
        }
        export type component<M_Source> = {
            readonly 'location': _i_core._T_State_Group<M_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments<M_Source>
        }
        
        export namespace computed {
        }
        export type computed<M_Source> = _T_Type<M_Source>
        
        export namespace dictionary {
        }
        export type dictionary<M_Source> = _T_Type<M_Source>
        
        export namespace _function {
            
            export namespace context {
            }
            export type context<M_Source> = _T_Type<M_Source>
            
            export namespace parameters {
                
                export namespace D {
                }
                export type D<M_Source> = _T_Type<M_Source>
            }
            export type parameters<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
            
            export namespace _return {
            }
            export type _return<M_Source> = _T_Type<M_Source>
            
            export namespace type_parameters {
            }
            export type type_parameters<M_Source> = _T_Type_Parameters<M_Source>
        }
        export type _function<M_Source> = {
            readonly 'context': _T_Type<M_Source>
            readonly 'parameters': _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
            readonly 'return': _T_Type<M_Source>
            readonly 'type parameters': _T_Type_Parameters<M_Source>
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Type<M_Source>
        }
        export type group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
        export type _null<M_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type float<M_Source> = null
                
                export namespace integer {
                    export type signed<M_Source> = boolean
                }
                export type integer<M_Source> = {
                    readonly 'signed': boolean
                }
            }
            export type SG<M_Source> = 
                | readonly ['float', null]
                | readonly ['integer', {
                    readonly 'signed': boolean
                }]
        }
        export type _number<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >
        
        export namespace optional {
        }
        export type optional<M_Source> = _T_Type<M_Source>
        
        export namespace parameter {
        }
        export type parameter<M_Source> = _T_Type_Parameter_Selection<M_Source>
        export type _string<M_Source> = null
        
        export namespace tagged_union {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Type<M_Source>
        }
        export type tagged_union<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
    }
    export type SG<M_Source> = 
        | readonly ['array', _T_Type<M_Source>]
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'location': _i_core._T_State_Group<M_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments<M_Source>
        }]
        | readonly ['computed', _T_Type<M_Source>]
        | readonly ['dictionary', _T_Type<M_Source>]
        | readonly ['function', {
            readonly 'context': _T_Type<M_Source>
            readonly 'parameters': _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
            readonly 'return': _T_Type<M_Source>
            readonly 'type parameters': _T_Type_Parameters<M_Source>
        }]
        | readonly ['group', _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<M_Source, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >]
        | readonly ['optional', _T_Type<M_Source>]
        | readonly ['parameter', _T_Type_Parameter_Selection<M_Source>]
        | readonly ['string', null]
        | readonly ['tagged union', _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>]
}

export namespace _T_Type_Arguments {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Type<M_Source>
}

export namespace _T_Type_Parameter_Selection {
    
    export namespace location {
        
        export namespace SG {
            export type _function<M_Source> = null
            export type _module<M_Source> = null
            export type _type<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['function', null]
            | readonly ['module', null]
            | readonly ['type', null]
    }
    export type location<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['function', null]
        | readonly ['module', null]
        | readonly ['type', null]
    >
    export type parameter<M_Source> = string
}

export namespace _T_Type_Parameters {
    export type D<M_Source> = null
}

// *** ALIASES FOR NESTED TYPES

export namespace Imports {
    
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
        
        export namespace type_arguments {
        }
        export type type_arguments<M_Source> = _T_Type_Arguments<M_Source>
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
        readonly 'type arguments': _T_Type_Arguments<M_Source>
    }
}

export namespace Module {
    
    export namespace imports {
    }
    export type imports<M_Source> = _T_Imports<M_Source>
    
    export namespace type_parameters {
    }
    export type type_parameters<M_Source> = _T_Type_Parameters<M_Source>
    
    export namespace types {
        
        export namespace D {
            
            export namespace parameters {
            }
            export type parameters<M_Source> = _T_Type_Parameters<M_Source>
            
            export namespace _type {
            }
            export type _type<M_Source> = _T_Type<M_Source>
        }
        export type D<M_Source> = {
            readonly 'parameters': _T_Type_Parameters<M_Source>
            readonly 'type': _T_Type<M_Source>
        }
    }
    export type types<M_Source> = _i_core._T_Dictionary<M_Source, {
        readonly 'parameters': _T_Type_Parameters<M_Source>
        readonly 'type': _T_Type<M_Source>
    }>
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

export namespace Type {
    
    export namespace SG {
        
        export namespace array {
        }
        export type array<M_Source> = _T_Type<M_Source>
        export type _boolean<M_Source> = null
        
        export namespace component {
            
            export namespace location {
                
                export namespace SG {
                    
                    export namespace _import {
                        export type _import<M_Source> = string
                        export type _type<M_Source> = string
                    }
                    export type _import<M_Source> = {
                        readonly 'import': string
                        readonly 'type': string
                    }
                    export type sibling<M_Source> = string
                }
                export type SG<M_Source> = 
                    | readonly ['import', {
                        readonly 'import': string
                        readonly 'type': string
                    }]
                    | readonly ['sibling', string]
            }
            export type location<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            
            export namespace sub_selection {
                
                export namespace L {
                    
                    export namespace SG {
                        export type dictionary<M_Source> = null
                        export type group<M_Source> = string
                        export type list<M_Source> = null
                        export type optional<M_Source> = null
                        export type state_group<M_Source> = string
                    }
                    export type SG<M_Source> = 
                        | readonly ['dictionary', null]
                        | readonly ['group', string]
                        | readonly ['list', null]
                        | readonly ['optional', null]
                        | readonly ['state group', string]
                }
                export type L<M_Source> = _i_core._T_State_Group<M_Source, 
                    | readonly ['dictionary', null]
                    | readonly ['group', string]
                    | readonly ['list', null]
                    | readonly ['optional', null]
                    | readonly ['state group', string]
                >
            }
            export type sub_selection<M_Source> = _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            
            export namespace type_arguments {
            }
            export type type_arguments<M_Source> = _T_Type_Arguments<M_Source>
        }
        export type component<M_Source> = {
            readonly 'location': _i_core._T_State_Group<M_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments<M_Source>
        }
        
        export namespace computed {
        }
        export type computed<M_Source> = _T_Type<M_Source>
        
        export namespace dictionary {
        }
        export type dictionary<M_Source> = _T_Type<M_Source>
        
        export namespace _function {
            
            export namespace context {
            }
            export type context<M_Source> = _T_Type<M_Source>
            
            export namespace parameters {
                
                export namespace D {
                }
                export type D<M_Source> = _T_Type<M_Source>
            }
            export type parameters<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
            
            export namespace _return {
            }
            export type _return<M_Source> = _T_Type<M_Source>
            
            export namespace type_parameters {
            }
            export type type_parameters<M_Source> = _T_Type_Parameters<M_Source>
        }
        export type _function<M_Source> = {
            readonly 'context': _T_Type<M_Source>
            readonly 'parameters': _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
            readonly 'return': _T_Type<M_Source>
            readonly 'type parameters': _T_Type_Parameters<M_Source>
        }
        
        export namespace group {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Type<M_Source>
        }
        export type group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
        export type _null<M_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type float<M_Source> = null
                
                export namespace integer {
                    export type signed<M_Source> = boolean
                }
                export type integer<M_Source> = {
                    readonly 'signed': boolean
                }
            }
            export type SG<M_Source> = 
                | readonly ['float', null]
                | readonly ['integer', {
                    readonly 'signed': boolean
                }]
        }
        export type _number<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >
        
        export namespace optional {
        }
        export type optional<M_Source> = _T_Type<M_Source>
        
        export namespace parameter {
        }
        export type parameter<M_Source> = _T_Type_Parameter_Selection<M_Source>
        export type _string<M_Source> = null
        
        export namespace tagged_union {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Type<M_Source>
        }
        export type tagged_union<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
    }
    export type SG<M_Source> = 
        | readonly ['array', _T_Type<M_Source>]
        | readonly ['boolean', null]
        | readonly ['component', {
            readonly 'location': _i_core._T_State_Group<M_Source, 
                | readonly ['import', {
                    readonly 'import': string
                    readonly 'type': string
                }]
                | readonly ['sibling', string]
            >
            readonly 'sub selection': _i_core._T_List<M_Source, _i_core._T_State_Group<M_Source, 
                | readonly ['dictionary', null]
                | readonly ['group', string]
                | readonly ['list', null]
                | readonly ['optional', null]
                | readonly ['state group', string]
            >>
            readonly 'type arguments': _T_Type_Arguments<M_Source>
        }]
        | readonly ['computed', _T_Type<M_Source>]
        | readonly ['dictionary', _T_Type<M_Source>]
        | readonly ['function', {
            readonly 'context': _T_Type<M_Source>
            readonly 'parameters': _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>
            readonly 'return': _T_Type<M_Source>
            readonly 'type parameters': _T_Type_Parameters<M_Source>
        }]
        | readonly ['group', _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<M_Source, 
            | readonly ['float', null]
            | readonly ['integer', {
                readonly 'signed': boolean
            }]
        >]
        | readonly ['optional', _T_Type<M_Source>]
        | readonly ['parameter', _T_Type_Parameter_Selection<M_Source>]
        | readonly ['string', null]
        | readonly ['tagged union', _i_core._T_Dictionary<M_Source, _T_Type<M_Source>>]
}

export namespace Type_Arguments {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Type<M_Source>
}

export namespace Type_Parameter_Selection {
    
    export namespace location {
        
        export namespace SG {
            export type _function<M_Source> = null
            export type _module<M_Source> = null
            export type _type<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['function', null]
            | readonly ['module', null]
            | readonly ['type', null]
    }
    export type location<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['function', null]
        | readonly ['module', null]
        | readonly ['type', null]
    >
    export type parameter<M_Source> = string
}

export namespace Type_Parameters {
    export type D<M_Source> = null
}
